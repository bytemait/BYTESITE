import BlogPage from "../BlogPage";
import Admin from "./Admin";
import Blog from "./Blog";
import CreateBlog from "./CreateBlog";
import EditBlog from "./EditBlog";
import LoginPage from "./Login";
import RegisterPage from "./Register";

const blogRoutes = [
  { path: "", element: <BlogPage /> },
  { path: "admin", element: <Admin /> },
  { path: "register", element: <RegisterPage /> },
  { path: "login", element: <LoginPage /> },
  { path: "create", element: <CreateBlog /> },
  { path: ":id", element: <Blog /> },
  { path: "edit/:id", element: <EditBlog /> },
];

export default blogRoutes;
