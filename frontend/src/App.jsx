import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./assets/Pages/Home"
import About from "./assets/Pages/About"
import SignIn from "./assets/Pages/SignIn"
import SignUp from "./assets/Pages/SignUp"
import Profile from "./assets/Pages/Profile"
import Header from "./Header"

export default function App() {
  return <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Sign-In" element={<SignIn/>}/>
    <Route path="/Sign-Up" element={<SignUp/>}/>
    <Route path="/Profile" element={<Profile/>}/>
  </Routes>
  </BrowserRouter>
}
