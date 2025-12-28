import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SearchPage from "./pages/searchPage";
import HomePage from "./pages/homePage";
import HobbiesPage from "./pages/hobbiesPage";
import ContactPage from "./pages/contactPage";
import ResumePage from "./pages/resumePage";


function App() {
  return (
    <Router>
      {/* Optional: Place shared components like a Navbar here */}
      <Routes>
        {/* Define the path and the element (component) to render */}
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/hobbies" element={<HobbiesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </Router>
  );
}

export default App;
