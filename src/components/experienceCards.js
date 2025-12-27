import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const ExperinceCards = ({ experienceList }) => {
    return (
        <div className="row">
            {experienceList.map((it) => (
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
    );
};

export default ExperinceCards