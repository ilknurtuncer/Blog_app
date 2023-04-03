import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import NewBlog from "../pages/NewBlog"
import About from "../pages/About"
const AppRouter = () => {
  return (
    <Router>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<About/>} />
            <Route path="/new-blog" element={<NewBlog/>} />

        </Routes>
        <Footer/>
    </Router>
  )
}

export default AppRouter