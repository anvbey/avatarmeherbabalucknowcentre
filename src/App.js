import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import HighlightEvent from "./pages/Events/HighlightEvent";
import Registration from "./pages/Registration/Registration";
import About from "./pages/About/About";
import Events from "./pages/Events/Events";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/footer/Footer";
import PDF from "./pages/About/PDF";

import Bg from "./assets/Bg.png";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
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
          <Route path='/pdf' element={<PDF />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
    </LocalizationProvider>
  );
}

export default App;