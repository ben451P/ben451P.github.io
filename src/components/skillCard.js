
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '../static/assets/css/main.css';



const SkillCard = ({ text, logo }) => {
    return (
        <a href="" className="text-decoration-none text-reset">
            <div className="card">
                <div className="card-body d-flex justify-content-between align-items-center px-4 py-3">
                    <div className="h1">{text}</div>
                    <img 
                        src={logo} 
                        className="App-logo" 
                        alt={text}
                        style={{
                            height: '5rem',
                            width: 'auto',
                            objectFit: 'contain'
                        }}
                    />
                </div>
            </div>
        </a>
    );
};

export default SkillCard;