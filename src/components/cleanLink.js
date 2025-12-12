import { Nav } from "react-bootstrap";

const CleanLink = ({ route, children }) => {
  return (
    <Nav.Link
      href={route}
      style={{
        color: 'inherit',
        textDecoration: 'none',
        padding: 0,
      }}
    >
      {children}
    </Nav.Link>
  );
};

export default CleanLink;