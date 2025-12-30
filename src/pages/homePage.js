import logo from '../static/assets/images/logo.svg';
import profilePic from '../static/assets/images/profile.png'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import mainStyle from '../static/assets/css/main.module.css'

import MainNavbar from '../components/mainNavbar';
import SkillCardDisplay from '../components/skillCardDisplay';
import ImgDesc from '../components/imgDesc';
import MainFooter from '../components/footer';

function HomePage() {
  return (
    <main role="main" className={mainStyle.componentPrimary}>
      <MainNavbar />
      <br /><br />
      <div className="container pt-5">
        <ImgDesc
          title="Benedetto Yifan Lozzano"
          logo={profilePic}
        >
          Hello! I'm Ben, a freshman at the University of Illinois at Urbana-Champaign majoring in Information Sciences + Data Sciences. 
          <br /><br />
          I like to spend time dabling in whatever development piques my interest, but primarily concentrate on machine learning and data science for education and healthcare.
          <br /><br />
          I am currently working as an undergraduate researcher under Dr. Naiman and Dr. Evans, working to test various open source Multimodal Models on Visual Question Answering tasks on graphical figures.
        </ImgDesc>

        <div className="row d-flex align-items-center justify-content-center">
          <div className={`display-2 text-center mb-4 ${mainStyle.textPrimary}`}>
            At a Glance
          </div>
        </div>
       
        <SkillCardDisplay />


        <div className="row my-5 d-flex justify-content-between align-items-center">
          <div className="col-8">
            <div className={`h1 ${mainStyle.textPrimary}`}>
              Experiences
            </div>

            <div className="h4 mb-5">
              Click on the above cards to find experiences related to certain skills, or browse relevant experiences, awards, and honors from the link below.
            </div>
            <div className="col-5">
            <a href="/search" className="h-2 text-reset text-decoration-none">
                <div className={`btn py-2 px-3 ${mainStyle.componentTertiary}`}>       
                    View All Experiences →   
                </div>
              </a>
            </div>
          </div>
        </div>        
      </div>
      <MainFooter />
    </main>
  );
}

export default HomePage;
