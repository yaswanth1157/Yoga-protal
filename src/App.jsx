import { BrowserRouter as Router, Route ,Routes } from "react-router-dom"
import Hello_World from "./components/Hello_World"
import Home from "./pages/Home"
import About from "./pages/About"
import LoginPage from "./pages/LoginPage"
import NavBar from "./components/Navbar"
import SignupPage from "./pages/SignUp"
import Sidebar from "./components/SideBar"
import UserDashboard from "./pages/UserDashboard"
import ProfilePage from "./pages/ProfilePage"
 import AdminDashboard from "./pages/AdminDashboard"
 import AdminLog from "./pages/AdminLog"
 import YogaTrainer from "./pages/YogaTrainer"
import CourseList from "./pages/CourseList"

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/sidebar" element={<Sidebar/>}/>
        <Route path="/dashboard" element={<Sidebar/>}/>
        <Route path="/" element={<UserDashboard/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/admin" element={<AdminDashboard/>}/> 
         <Route path="/adminlog" element={<AdminLog/>}/>
         <Route path="/yogatrainer" element={<YogaTrainer/>}/>
         <Route path="/courselist" element={<CourseList/>}/>
       
        </Routes>
        </Router>
        
        

      
  )
}

export default App;
