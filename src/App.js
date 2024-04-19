import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import HighlightEvent from "./pages/Events/HighlightEvent";
import Registration from "./pages/Registration/Registration";
import About from "./pages/About/About";
import Events from "./pages/Events/Events";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/footer/Footer";

import Bg from "./assets/Bg.png";

function App() {
  return (
    <Box
      className="App"
      sx={{
        backgroundImage: `url(${Bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oct2024" element={<HighlightEvent />} />
          <Route path="/oct2024/register" element={<Registration />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;