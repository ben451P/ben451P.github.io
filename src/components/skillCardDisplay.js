
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '../static/assets/css/main.css';
import logo from '../static/assets/images/logo.svg';

import SkillCard from '../components/skillCard';


const SkillCardDisplay = () => {

    const items = [
        {"itemName":"Java","logo":logo},
        {"itemName":"JavaScript","logo":logo}
    ]

    // need to add detecting size of screen to html?

    return (
        <div className="row">
          {items.map(item => (
          <div className="col-3">
            <SkillCard text={item.itemName} logo={item.logo}></SkillCard>
          </div>
          ))}
        </div>
    );
};

export default SkillCardDisplay;