import { useMemo, useState, useEffect } from "react";

const ALLOWED_TYPES = [
  "Internship",
  "Research",
  "Project",
  "Award",
];

function normalize(s = "") {
  return String(s).toLowerCase();
}

export default function useExperienceFilters(items) {
  const [query, setQuery] = useState("");
  const [selectedTypes, setSelectedTypes] = useState(new Set());
  const [selectedLangs, setSelectedLangs] = useState(new Set());
  const [selectedFields, setSelectedFields] = useState(new Set());

  // Build available filter options from data
  const filterOptions = useMemo(() => {
    const langs = new Set();
    const fields = new Set();

    items.forEach((it) => {
      (it.languages || []).forEach((l) => {
        langs.add(l);
      });
      (it.fields || []).forEach((f) => fields.add(f));
    });

    return {
      types: ALLOWED_TYPES,
      languages: Array.from(langs).sort(),
      fields: Array.from(fields).sort(),
    };
  }, [items]);

  // Create toggle functions for each filter type
  const createToggle = (setFn, currentSet) => (val) => {
    const next = new Set(currentSet);
    if (next.has(val)) {
      next.delete(val);
    } else {
      next.add(val);
    }
    setFn(next);
  };

  // Filter and sort results
  const filteredResults = useMemo(() => {
    const q = normalize(query).trim();

    const filtered = items
      .map((it) => {
        const hay = [
          it.title,
          it.description,
          it.type,
          ...it.languages,
          ...it.fields,
        ]
          .join(" ")
          .toLowerCase();

        if (q && !hay.includes(q)) return null;
        if (selectedTypes.size > 0) {
          const hasMatch = Array.from(selectedTypes).some((sel) =>
            ALLOWED_TYPES.some((allowed) => it.type.includes(sel))
          );
          if (!hasMatch) return null;
        }


        if (selectedLangs.size > 0) {
          const ok = (it.languages || []).some((l) => selectedLangs.has(l));
          if (!ok) return null;
        }

        if (selectedFields.size > 0) {
          const ok = (it.fields || []).some((f) => selectedFields.has(f));
          if (!ok) return null;
        }

        return it;
      })
      .filter(Boolean);

    filtered.sort((a, b) => {
      const getEndTime = (item) => {
        if (!item.date) return 0;

        // "Sep 2025 to Dec 2025" → "Dec 2025"
        const end = item.date.split(" to ")[1] ?? item.date;

        // Force day = 1 for consistent parsing
        return new Date(`${end} 1`).getTime();
      };

      return getEndTime(b) - getEndTime(a);
    });


    return filtered;
  }, [items, query, selectedTypes, selectedLangs, selectedFields]);

  useEffect(() => {
    const searchParamsStr = sessionStorage.getItem("searchParams");
    
    if (!searchParamsStr) return;
    
    const searchParams = JSON.parse(searchParamsStr);
    console.log(searchParams);
    
    // Check if array has elements
    if (searchParams.Types && searchParams.Types.length > 0) {
      setSelectedTypes(new Set(searchParams.Types)); // Convert array to Set
    }
    
    if (searchParams.Languages && searchParams.Languages.length > 0) {
      // If Languages is array of objects: [{text: "Java"}]
      const langs = searchParams.Languages.map(lang => lang.text || lang);
      setSelectedLangs(new Set(langs));
    }
    
    if (searchParams.Fields && searchParams.Fields.length > 0) {
      setSelectedFields(new Set(searchParams.Fields));
    }
    
    if (searchParams.query) {
      setQuery(searchParams.query);
    }
  }, []);
  const clearAll = () => {
    setQuery("");
    setSelectedFields(new Set());
    setSelectedLangs(new Set());
    setSelectedTypes(new Set());
  };

  return {
    query,
    setQuery,
    selectedTypes,
    selectedLangs,
    selectedFields,
    filterOptions,
    filteredResults,
    toggleType: createToggle(setSelectedTypes, selectedTypes),
    toggleLang: createToggle(setSelectedLangs, selectedLangs),
    toggleField: createToggle(setSelectedFields, selectedFields),
    clearAll,
  };
}