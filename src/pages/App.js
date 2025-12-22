import logo from '../static/assets/images/logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '../static/assets/css/main.css';


import MainNavbar from '../components/mainNavbar';
import SkillCard from '../components/skillCard';
import Carousel from '../components/carosel';
import SkillCardDisplay from '../components/skillCardDisplay';


function App() {

  const items = [
    {"itemName":"Java","logo":logo},
    {"itemName":"JavaScript","logo":logo}
  ]

  return (
    <main role="main">
      <div className="container-fluid">
        
        <div className="row px-5 py-4 border border-danger">
          <div className="col-7">
            <div className="display-4 mb-4">Benedetto Lozzano</div>

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vel at, porro perspiciatis, illum est dolore odit, veniam tempora reprehenderit placeat voluptatum beatae. Aspernatur repudiandae quia, expedita eligendi animi assumenda.
            Itaque unde facilis fugiat omnis necessitatibus quos dolorem molestiae magnam. Accusamus quam quaerat reprehenderit sed expedita error soluta consequatur corporis porro, id rerum optio, sunt adipisci officia pariatur fuga a?
            Delectus vero, rem totam corrupti eveniet sunt quo distinctio modi, fugit, est dicta tempore! Nihil, repellat eligendi? Repudiandae neque, porro inventore cum iusto accusantium ipsa perspiciatis, quibusdam asperiores quasi quas?
            Iste autem corporis corrupti quisquam necessitatibus neque suscipit optio assumenda, quam, eaque reiciendis quaerat numquam voluptatem amet unde at placeat blanditiis consectetur officia vitae illo nihil. Tempore nostrum rerum eligendi.
          </div>
          <div className="col-5">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="row d-flex align-items-center justify-content-center">
          <div className="display-2 text-center mb-4">
            At a Glance
          </div>
        </div>

        {/* <MainNavbar /> */}
        <SkillCardDisplay></SkillCardDisplay>
        
      </div>
    </main>
  );
}

export default App;
