import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Achievements from "./pages/Achievements";
import Projects from "./pages/Projects";
import NavBar from "./components/NavBar";
import Aboutus from "./pages/Aboutus";
import Footer from "./components/Footer";
import MultipurposeTasksPage from "./components/tasks/ui/MultipurposeTasksPage";
import TasksPage from "./components/tasks/ui/TasksPage";

function App() {
  return (
    <Router>
      <NavBar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<Aboutus />}/>
            <Route path="/tasks" element={<TasksPage />}/>
            <Route path="/tasks/:domain" element={<MultipurposeTasksPage/>}/>
            <Route path="/achievements" element={<Achievements />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;