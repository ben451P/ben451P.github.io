import logo from '../static/assets/images/logo.svg';
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
          logo={logo}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vel at, porro perspiciatis, illum est dolore odit, veniam tempora reprehenderit placeat voluptatum beatae. Aspernatur repudiandae quia, expedita eligendi animi assumenda.
          Itaque unde facilis fugiat omnis necessitatibus quos dolorem molestiae magnam. Accusamus quam quaerat reprehenderit sed expedita error soluta consequatur corporis porro, id rerum optio, sunt adipisci officia pariatur fuga a?
          Delectus vero, rem totam corrupti eveniet sunt quo distinctio modi, fugit, est dicta tempore! Nihil, repellat eligendi? Repudiandae neque, porro inventore cum iusto accusantium ipsa perspiciatis, quibusdam asperiores quasi quas?
          Iste autem corporis corrupti quisquam necessitatibus neque suscipit optio assumenda, quam, eaque reiciendis quaerat numquam voluptatem amet unde at placeat blanditiis consectetur officia vitae illo nihil. Tempore nostrum rerum eligendi.
        </ImgDesc>

        <div className="row d-flex align-items-center justify-content-center">
          <div className="display-2 text-center mb-4">
            At a Glance
          </div>
        </div>
       
        <SkillCardDisplay />


        <div className="row my-5 d-flex justify-content-between align-items-center">
          <div className="col-8">
            <div className="h1">
              Experiences
            </div>

            <div className="h4 mb-5">
              Click on the above cards to find experiences related to certain skills, or browse relevant experiences, awards, and honors from the link below.
            </div>
            <div className="col-5">
            <a href="/search" className="h-2 text-reset text-decoration-none">
                <div className="btn btn-primary py-2 px-3">       
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
