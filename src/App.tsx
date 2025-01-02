import { Navigate, Route, Routes } from "react-router";
import Home from "./screens/Home";
import Projects from "./screens/Projects";
import About from "./screens/About";
import Contact from "./screens/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
