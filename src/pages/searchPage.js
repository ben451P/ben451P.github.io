import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import MainNavbar from "../components/mainNavbar";
import FilterButtons from "../components/filterButtons";
import  useExperienceFilters  from "../hooks/useExperienceFilters";
import experiences from "../static/assets/json/experiences.json";
import ExperinceCards from "../components/experienceCards";

function SearchPage() {
    const [items] = useState(experiences);

    const {
        query,
        setQuery,
        selectedTypes,
        selectedLangs,
        selectedFields,
        filterOptions,
        filteredResults,
        toggleType,
        toggleLang,
        toggleField,
        clearAll,
    } = useExperienceFilters(items);

    return (
        <main>
            <MainNavbar />
            <br /><br />

            <div className="container my-4">

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
                          onClick={() => setQuery("")}
                        >
                            Clear
                        </button>
                    </div>

                    <div className="col-12 mt-2">
                        <div className="d-flex gap-2 flex-wrap align-items-center">
                            <FilterButtons
                                sectionTitle="Types"
                                sectionContents={filterOptions.types}
                                selected={selectedTypes}
                                onToggle={toggleType}
                                variant="primary"
                            />

                            <FilterButtons
                                sectionTitle="Languages"
                                sectionContents={filterOptions.languages}
                                selected={selectedLangs}
                                onToggle={toggleLang}
                                variant="success"
                            />

                            <FilterButtons
                                sectionTitle="Fields"
                                sectionContents={filterOptions.fields}
                                selected={selectedFields}
                                onToggle={toggleField}
                                variant="dark"
                            />

                            <div className="ms-auto">
                                <button 
                                  className="btn btn-sm btn-outline-secondary" 
                                  type="button" 
                                  onClick={clearAll}
                                >
                                    Reset
                                </button>
                            </div>
                        </div>
                    </div>
                </form>

                <div className="mt-4">
                    <h5>
                        Results <small className="text-muted">({filteredResults.length})</small>
                    </h5>

                    {filteredResults.length === 0 && (
                        <div className="alert alert-light">No results found.</div>
                    )}

                    <ExperinceCards
                        experienceList={filteredResults}
                    />
                    
                </div>
            </div>
        </main>
    );
}

export default SearchPage;