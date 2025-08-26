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
import { UserContextProvider } from "./pages/Blog/UserContext";
import blogRoutes from "./pages/Blog/blogRoutes";
import BlogPage from "./pages/BlogPage";
import TaskForm from "./components/tasks/ui/TaskForm";
import ComingSoon from "./components/tasks/ComingSoon";

function App() {
	return (
		<UserContextProvider>
			<Router>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<Aboutus />} />
					<Route path="/tasks" element={<ComingSoon />} />
					<Route
						path="/tasks/:domain"
						element={<MultipurposeTasksPage />}
					/>
					{/* <Route path="/tasks/submission" element={<TaskForm />} /> */}
					<Route path="/achievements" element={<Achievements />} />
					<Route path="/projects" element={<Projects />} />
					{/* Routes for blog */}
					<Route path="/blog">
						{blogRoutes.map(({ path, element }) => (
							<Route key={path} path={path} element={element} />
						))}
					</Route>
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
				<Footer />
			</Router>
		</UserContextProvider>
	);
}

export default App;
