import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import mainStyle from "../static/assets/css/main.module.css";

const ExperinceCards = ({ experienceList }) => {
  return (
    <div className="row justify-content-center">
      {experienceList.map((it) => (
        <div key={it.id} className="col-md-12 col-lg-10 mb-3">
          <div className={`card h-100 ${mainStyle.componentTertiary}`}>
            <div className="card-body d-flex flex-column">
              {/* Title */}
              <h5 className={`card-title mb-1 d-flex justify-content-between ${mainStyle.textPrimary}`}>
                <span className="fw-bold">{it.title}</span>
                <span>{it.type}</span>
              </h5>

              {/* Subheading (affiliation + location) */}
              {it.subheading && (
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <div className={`fw-semibold small ${mainStyle.textPrimary}`}>{it.subheading}</div>

                  {/* Date under the second header */}
                  {it.date && (
                    <div>
                      <small className={`${mainStyle.textPrimary}`}>{it.date}</small>
                    </div>
                  )}
                </div>
              )}

              {/* Short description before bullet points */}
              {it.description && (
                <p className="card-text flex-grow-1 mb-2 fs-6">
                  {it.description}
                </p>
              )}

              {/* Bullet points */}
              {(it.bullet_points || []).length > 0 && (
                <ul className="mb-2">
                  {it.bullet_points.map((b, i) => (
                    <li key={i} className="small">
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              {/* Links */}
              {it.links && (
                <div className="d-flex gap-2 align-items-center mt-4">
                  {Object.keys(it.links).map((key) =>
                    it.links[key] ? (
                      <a
                        key={key}
                        href={it.links[key]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none"
                      >
                        <div className={`btn btn-sm text-small ${mainStyle.filterBtnActive}`}>
                          Link to {key} →
                        </div>
                      </a>
                    ) : null
                  )}
                </div>
              )}
            </div>

            <ExperienceCardFooter 
            category="Languages"
            mapped={it.languages}
            badgeStyle={mainStyle.badgePrimary}
            />

            <ExperienceCardFooter 
            category="Fields"
            mapped={it.fields}
            badgeStyle={mainStyle.badgeSecondary}
            />

            <ExperienceCardFooter 
            category="Tools and Frameworks"
            mapped={it.frameworks_used}
            badgeStyle={mainStyle.badgeSecondary}
            />
            
          </div>
        </div>
      ))}
    </div>
  );
};

function ExperienceCardFooter({ category, badgeStyle, mapped }){
  return (
    <div className="card-footer bg-transparent border-0 d-flex align-items-center flex-wrap gap-1 px-3 py-2 border-top border-secondary">
      <span className="me-2">{category}:</span>
      {(mapped || []).map((item) => (
        <span key={item} className={`badge me-1 ${badgeStyle}`}>
          {item}
        </span>
      ))}
    </div>
  );
  
}

export default ExperinceCards;
