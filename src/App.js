import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/ui/Navbar.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Sidebar from "./components/ui/Sidebar.js";
import Contact from "./pages/Contact.js";
import MetaTags from "react-meta-tags";
import kl_logo from './logos/sumant_moment.png'

function App() {
  return (
    <>
      <MetaTags>
        <meta id="meta-description" name="description" content="official website for knowless" />
        <meta id="og-title" property="og:title" content="knowless" />
        <meta id="og-image" property="og:image" content={kl_logo} />
      </MetaTags>
      <Router>
        <div
          className="App"
          id="app-page"
          style={{ background: "rgb(232, 223, 209)" }}
        >
          <Navbar />
          <Sidebar />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
