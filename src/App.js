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

function App() {
  return (
    <Box
      className="App"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >

      <Navbar />

      <Box
        sx={{
          flex: "1", // Make the content area flexible to fill available space
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/oct2024/register" element={<Registration />} />
          <Route path="/oct2024" element={<HighlightEvent />} />
        </Routes>
      </Box>

      <Footer />
      
    </Box>
  );
}

export default App;
