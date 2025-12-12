import logo from '../static/assets/images/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/assets/css/main.css';
import { Button, Card, Container, Nav} from 'react-bootstrap';


import MainNavbar from '../components/mainNavbar';
import SkillCard from '../components/skillCard';

function App() {
  return (
    <main role="main">
      <div className="container-fluid">
        {/* <MainNavbar /> */}
        <SkillCard text="Java">
          <img src={logo} className="App-logo" alt="logo" />
        </SkillCard>
      </div>
    </main>
  );
}

export default App;
