import { BrowserRouter as Router, Route ,Routes } from "react-router-dom"
import Hello_World from "./components/Hello_World"
import Home from "./pages/Home"
import About from "./pages/About"
import LoginPage from "./pages/LoginPage"
import NavBar from "./components/Navbar"


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        </Routes>
        </Router>
        
        

      
  )
}

export default App;
