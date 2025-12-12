import CleanLink from "./cleanLink";
import { Card } from "react-bootstrap";
import '../static/assets/css/main.css';



const SkillCard = ({ text, children }) => {
    return (
        <CleanLink route="#">
            <Card className="skill-card">
                <Card.Header className="d-flex align-items-center justify-content-between">
                    <div className="h1">{text}</div>
                    {children}
                </Card.Header>
            </Card>
        </CleanLink>
    );
};

export default SkillCard;