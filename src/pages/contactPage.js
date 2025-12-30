import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import contactImage from '../static/assets/images/contact.jpg'
import mainStyle from '../static/assets/css/main.module.css'

import MainNavbar from "../components/mainNavbar";
import ImgDesc from "../components/imgDesc";
import MainFooter from "../components/footer";

function ContactPage() {
    return (
        <main role="main" className={mainStyle.componentPrimary}>
            <MainNavbar />
            <br /><br />

            <ImgDesc
                title="Contact Information"
                logo={contactImage}
                imgSide="left"
            >
                <div className="fs-4 mb-4">
                    I am mostly available between 10am and 10pm, but please fell free to message me at any time any I will get back to you promptly.
                </div>
                
                <ul className="fs-5">
                    <li className="mb-3">
                        <span className={`fw-bold ${mainStyle.textPrimary}`}>Phone Number:</span> 201-702-9959
                    </li>
                    <li className="mb-3">
                        <span className={`fw-bold ${mainStyle.textPrimary}`}>Work Email:</span> benlozzano@gmail.com
                    </li>
                    <li className="mb-3">
                        <span className={`fw-bold ${mainStyle.textPrimary}`}>School Email:</span> lozzano2@illinois.edu
                    </li>
                </ul>
                
            </ImgDesc>

            <MainFooter />
            
        </main>
    );
}

export default ContactPage