import { Routes, Route } from "react-router-dom";

import Homepage from "./Components/Homepage";
import Menu from "./Components/Menu";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
function App() {
  return (
    <Routes>

      {/* Home Page */}
      <Route path="/" element={<Homepage />} />

      {/* Menu Page */}
      <Route path="/menu" element={<Menu />} />

      {/* Gallery Page */}
      <Route path="/gallery" element={<Gallery />} />

       <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;