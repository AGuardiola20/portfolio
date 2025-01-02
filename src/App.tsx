import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router";
import Home from "./screens/Home";
const ProjectScreen = lazy(() => import("./screens/Projects"));
const AboutScreen = lazy(() => import("./screens/About"));
const ContactScreen = lazy(() => import("./screens/Contact"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/projects"
        element={
          <Suspense fallback="Loading...">
            <ProjectScreen />
          </Suspense>
        }
      />
      <Route
        path="/about"
        element={
          <Suspense>
            <AboutScreen />
          </Suspense>
        }
      />
      <Route
        path="/contact"
        element={
          <Suspense>
            <ContactScreen />
          </Suspense>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
