import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const MainNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid px-3 px-lg-5">
            <a className="navbar-brand" href="/">Ben Lozzano</a>
            
            {/* Hamburger button for mobile */}
                <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav" 
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Overview</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/search">Experiences</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/hobbies">Hobbies</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact</a>
                    </li>
                </ul>
            
                {/* Resume link on the right */}
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a 
                            className="nav-link" 
                            href="/resume" 
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
};

export default MainNavbar;