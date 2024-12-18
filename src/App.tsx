import { Route, Routes } from "react-router";
import Home from "./screens/Home";
import Projects from "./screens/Projects";
import About from "./screens/About";
import Connect from "./screens/Connect";
import MyPage from "./screens/MyPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/about/mypage" element={<MyPage />} />
      <Route path="/contact" element={<Connect />} />
    </Routes>
  );
}

export default App;
