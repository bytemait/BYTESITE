import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Achievements from "./pages/Achievements";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/achievements" element={<Achievements />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="*" element={<Navigate to="/home" />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
