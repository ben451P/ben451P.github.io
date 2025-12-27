import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const MainNavbar =() => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div class="container-fluid px-5">
                <a class="navbar-brand" href="/">Ben Lozzano</a>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav d-flex justify-content-start">
                    <li class="nav-item">
                    <a class="nav-link active" href="/">Overview</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" href="/search">Experiences</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" href="/hobbies">Hobbies</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" href="/contact">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default MainNavbar


