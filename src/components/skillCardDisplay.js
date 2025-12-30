import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import mainStyle from "../static/assets/css/main.module.css";
import logo from '../static/assets/images/logo.svg';


import languageImagePaths from "../static/assets/json/languageImages.json";
import experiencesData from "../static/assets/json/experiences.json";

const getNumExpLang = (lang) => {
  let total = 0;

  experiencesData.map(experience => {
    if ((experience.languages || []).includes(lang)) {
      total++;
    }
  });

  return total;
};

const SkillCardDisplay = () => {
  return (
    <div className="row">
      {Object.keys(languageImagePaths).map((lang) => (
        <div key={lang} className="col-6 col-md-4 col-lg-3 mb-4">
          {getNumExpLang(lang) !== 0 && 
            <SkillCard
              text={lang}
              logo={languageImagePaths[lang]}
            />
          }
        </div>
      ))}
    </div>
  );
};

function SkillCard({ text, logo }) {
  return (
    <a
      href="/search"
      className="text-decoration-none text-reset"
      onClick={() => {
        sessionStorage.setItem(
          "searchParams",
          JSON.stringify({ Types: [], Languages: [text], Fields: [] })
        );
      }}
    >
      <div className={`card ${mainStyle.componentTertiary} ${mainStyle.hoverLift}`}>
        <div className="card-header">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className={`fs-5 ${mainStyle.textPrimary}`}>{text}</span>
            <small className={`fs-6 ${mainStyle.textPrimary}`}>
              {getNumExpLang(text) === 1 ? `${getNumExpLang(text)} Experience` : `${getNumExpLang(text)} Experiences`}
            </small>
          </div>

          <div className="d-flex flex-column align-items-center text-center my-3">
            <img
              src={logo}
              loading="lazy"
              height="100"
              alt={`${text} logo`}
              onError={(e) => {
                e.currentTarget.src = {logo};
              }}
            />
          </div>

          <div className="text-center">
            <small className="custom-muted">Click to explore →</small>
          </div>
        </div>
      </div>
    </a>
  );
}

export default SkillCardDisplay;
