// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container } from 'react-bootstrap';
// src/components/Card.jsx

const CustomCard = ({ title, children }) => {
  return (
    <div className="Custom">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="card-text">{children}</div>
      </div>
    </div>
  );
};

export default CustomCard;