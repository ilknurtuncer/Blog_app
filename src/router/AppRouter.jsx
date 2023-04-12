import Login from "../pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Detail from "../pages/Detail";
import NewBlog from "../pages/NewBlog";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="" element={<PrivateRouter />}>
          <Route path="/new-blog" element={<NewBlog />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
