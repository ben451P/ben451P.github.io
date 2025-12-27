import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function MainFooter() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container">
        <div className="row align-items-center text-center text-md-start">

          {/* Left: Name / Title */}
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 className="mb-1">Your Name</h5>
            <small className="text-muted">Software Engineer</small>
          </div>

          {/* Center: Icons */}
          <div className="col-md-4 mb-3 mb-md-0 text-center">
            <a
              href="https://www.linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light fs-4 mx-2"
            >
              <i className="bi bi-linkedin"></i>
            </a>

            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light fs-4 mx-2"
            >
              <i className="bi bi-github"></i>
            </a>

            <a
              href="mailto:your@email.com"
              className="text-light fs-4 mx-2"
            >
              <i className="bi bi-envelope-fill"></i>
            </a>
          </div>

          {/* Right: Extra Info */}
          <div className="col-md-4 text-center text-md-end">
            <div>
              <a
                href="https://your-portfolio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-light"
              >
                Portfolio
              </a>
            </div>
            <div>
              <a
                href="/resume.pdf"
                className="text-decoration-none text-light"
              >
                Resume
              </a>
            </div>
          </div>

        </div>

        <hr className="border-secondary my-3" />

        <div className="text-center text-muted small">
          © {new Date().getFullYear()} Your Name
        </div>
      </div>
    </footer>
  );
}
