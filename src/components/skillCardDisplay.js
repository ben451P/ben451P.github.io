
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from '../static/assets/images/logo.svg';
import mainStyle from '../static/assets/css/main.module.css'

const SkillCardDisplay = () => {

    const items = [
        {"itemName":"Java","numExperiences":5,"logo":logo},
        {"itemName":"JavaScript","numExperiences":5,"logo":logo}
    ]

    return (
        <div className="row">
          {items.map(item => (
          <div className="col-3">
            <SkillCard 
            text={item.itemName} 
            logo={item.logo}
            numExperiences={item.numExperiences}
            />
          </div>
          ))}
        </div>
    );
};

function SkillCard({text, logo, numExperiences}){
    return (
        <a href="" className="text-decoration-none text-reset">
            <div className={`card ${mainStyle.componentTertiary}`}>
                <div className="card-header">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="">
                        {text}
                      </span>
                      <small className="custom-muted">{numExperiences} Experiences</small>
                    </div>
                    <div className="d-flex flex-column align-items-center text-center my-3">
                      <h5 className="mb-2 text-dark"></h5>
                      <img
                        src={logo}
                        loading="lazy"
                        width="auto"
                        height="100"
                      />
                    </div>
                    <div className="text-center">
                      <small className="custom-muted">Click to explore →</small>
                    </div>
                </div>
            </div>
        </a>
    );
};


export default SkillCardDisplay;