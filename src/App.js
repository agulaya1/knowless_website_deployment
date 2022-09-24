import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/ui/Navbar.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Sidebar from "./components/ui/Sidebar.js";
import Contact from "./pages/Contact.js";

function App() {
  return (
    <Router>
      <div className="App" id="app-page" style={{background: 'rgb(232, 223, 209)'}}>
        <Navbar />
        <Sidebar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
