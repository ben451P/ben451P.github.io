import logo from '../static/assets/images/logo.svg';
import '../static/assets/css/App.css';
import { Button, Card, Container } from 'react-bootstrap';


import CustomCard from "../components/button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <CustomCard title="Featured Content">
          <p>This is some featured text inside the CustomCard.</p>
          <p>This seems to be the body text</p>
          <p>This seems to be the body text</p>

      </CustomCard>
    </div>
  );
}

export default App;
