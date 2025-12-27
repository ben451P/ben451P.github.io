import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from '../static/assets/images/logo.svg';

import MainNavbar from "../components/mainNavbar";
import ImgDesc from "../components/imgDesc";
import MainFooter from "../components/footer";

function ContactPage() {
    return (
        <main role="main">
            <MainNavbar />
            <br /><br />

            <ImgDesc
                title="Contact Information"
                logo={logo}
                imgSide="left"
            >
                <div className="fs-4 mb-4">
                    I am mostly available between 10am and 10pm, but please fell free to message me at any time any I will get back to you promptly.
                </div>
                
                <ul className="fs-5">
                    <li className="mb-3">
                        <span className="fw-bold">Phone Number:</span> 201-702-9959
                    </li>
                     <li className="mb-3">
                        <span className="font-weight-bold">Phone Number:</span> 201-702-9959
                    </li>
                     <li className="mb-3">
                        <span className="font-weight-bold">Phone Number:</span> 201-702-9959
                    </li>
                </ul>
                
            </ImgDesc>

            <MainFooter />
            
        </main>
    );
}

export default ContactPage