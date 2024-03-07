import {Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Events from "./pages/Events/Events";
import Registration from "./pages/Registration/Registration";
import HighlightEvent from "./pages/Events/HighlightEvent";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/oct2024" element={<HighlightEvent />} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
