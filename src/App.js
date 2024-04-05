import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import { Box } from "@mui/material";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Events from "./pages/Events/Events";
import Registration from "./pages/Registration/Registration";
import HighlightEvent from "./pages/Events/HighlightEvent";
import Bg from "./assets/Bg.png"

function App() {
  return (
    <Box
      className="App"
      sx={{
        display: "flex",
        flexDirection: "column",
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

      <Box
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oct2024" element={<HighlightEvent />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/oct2024/register" element={<Registration />} />
        </Routes>
      </Box>

      <Footer />
      
    </Box>
  );
}

export default App;
