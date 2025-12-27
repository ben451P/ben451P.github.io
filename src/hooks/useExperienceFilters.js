import { useMemo, useState } from "react";

const MAJOR_LANGUAGES = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "C++",
  "Go",
  "Rust",
  "C#",
  "Ruby",
];

const ALLOWED_TYPES = [
  "Personal Project",
  "Internship",
  "Research",
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
        if (MAJOR_LANGUAGES.includes(l)) langs.add(l);
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
          ...(it.languages || []),
          ...(it.fields || []),
        ]
          .join(" ")
          .toLowerCase();

        if (q && !hay.includes(q)) return null;
        if (selectedTypes.size > 0 && !selectedTypes.has(it.type)) return null;

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
      const ta = a.date ? new Date(a.date).getTime() : 0;
      const tb = b.date ? new Date(b.date).getTime() : 0;
      return tb - ta;
    });

    return filtered;
  }, [items, query, selectedTypes, selectedLangs, selectedFields]);

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