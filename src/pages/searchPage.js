import React, { useMemo, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import MainNavbar from "../components/mainNavbar";
import experiences from "../static/assets/json/experiences.json";

// streamlined constants
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

function SearchPage() {
  // data
  const [items] = useState(experiences);

  // ui state (no debounce — instant filtering)
  const [query, setQuery] = useState("");
  const [selectedTypes, setSelectedTypes] = useState(new Set());
  const [selectedLangs, setSelectedLangs] = useState(new Set());
  const [selectedFields, setSelectedFields] = useState(new Set());

  // build settings from data (major languages only)
  const settings = useMemo(() => {
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

  // simple toggle helpers
  const toggle = (setFn, setRef, val) => {
    const next = new Set(setRef);
    if (next.has(val)) next.delete(val);
    else next.add(val);
    setFn(next);
  };

  // results: instant filter + automatic date sort (newest first)
  const results = useMemo(() => {
    const q = normalize(query).trim();

    const filtered = items
      .map((it) => {
        // text search across title, desc, type, languages, fields
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

  return (
    <main>
      <MainNavbar />
      <br /><br />

      <div className="container my-4">
        {/* Search row (keeps the original first-iteration layout) */}
        <form className="row g-2 align-items-center" onSubmit={(e) => e.preventDefault()}>
          <div className="col-md-6">
            <input
              className="form-control"
              type="search"
              placeholder="Search experiences, titles, descriptions..."
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="col-auto">
            <button
              className="btn btn-outline-primary"
              type="button"
              onClick={() => {
                /* small convenience: clear query quickly */
                setQuery("");
              }}
            >
              Clear
            </button>
          </div>

          {/* Compact filter chips like the first version */}
          <div className="col-12 mt-2">
            <div className="d-flex gap-2 flex-wrap align-items-center">
              {/* Types */}
              <div>
                <small className="text-muted d-block">Types</small>
                {settings.types.map((t) => (
                  <button
                    key={t}
                    type="button"
                    className={
                      "btn btn-sm me-1 mb-1 " +
                      (selectedTypes.has(t) ? "btn-primary" : "btn-outline-primary")
                    }
                    onClick={() => toggle(setSelectedTypes, selectedTypes, t)}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {/* Languages */}
              <div>
                <small className="text-muted d-block">Languages</small>
                {settings.languages.length === 0 && (
                  <span className="text-muted small">(none)</span>
                )}
                {settings.languages.map((l) => (
                  <button
                    key={l}
                    type="button"
                    className={
                      "btn btn-sm me-1 mb-1 " +
                      (selectedLangs.has(l) ? "btn-success" : "btn-outline-success")
                    }
                    onClick={() => toggle(setSelectedLangs, selectedLangs, l)}
                  >
                    {l}
                  </button>
                ))}
              </div>

              {/* Fields */}
              <div>
                <small className="text-muted d-block">Fields</small>
                {settings.fields.map((f) => (
                  <button
                    key={f}
                    type="button"
                    className={
                      "btn btn-sm me-1 mb-1 " +
                      (selectedFields.has(f) ? "btn-dark" : "btn-outline-dark")
                    }
                    onClick={() => toggle(setSelectedFields, selectedFields, f)}
                  >
                    {f}
                  </button>
                ))}
              </div>

              <div className="ms-auto">
                <button className="btn btn-sm btn-outline-secondary" type="button" onClick={clearAll}>
                  Reset
                </button>
              </div>
            </div>
          </div>
        </form>

        {/* Results */}
        <div className="mt-4">
          <h5>
            Results <small className="text-muted">({results.length})</small>
          </h5>

          {results.length === 0 && <div className="alert alert-light">No results found.</div>}

          <div className="row">
            {results.map((it) => (
              <div key={it.id} className="col-md-12 col-lg-6 mb-3">
                <div className="card h-100">
                  <div className="card-body d-flex flex-column">
                    <h6 className="card-title">{it.title}</h6>
                    <p className="card-text flex-grow-1">{it.description}</p>

                    <div className="mt-2">
                      <small className="text-muted me-2">{it.type}</small>
                      {(it.languages || []).map((l) => (
                        <span key={l} className="badge bg-info text-dark me-1">
                          {l}
                        </span>
                      ))}
                      {(it.fields || []).map((f) => (
                        <span key={f} className="badge bg-secondary me-1">
                            {f}
                        </span>
                      ))}

                      <div className="mt-2">
                        <small className="text-muted">{it.date}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default SearchPage