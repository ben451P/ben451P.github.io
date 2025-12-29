import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap-icons/font/bootstrap-icons.css';
import mainStyle from "../static/assets/css/main.module.css"

const MainFooter = () => {
    return (
        <footer className={`${mainStyle.componentSecondary} text-light py-4 mt-auto`}>
            <div className="container">
                <div className="row align-items-center text-center text-md-start">
                    <div className="col-12 mb-3 mb-md-0 text-center">
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
                </div>
            </div>
        </footer>
    );
};

export default MainFooter