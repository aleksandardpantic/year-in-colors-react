
import './App.css';
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Stats from "./pages/Stats/Stats";
import SupportUs from "./pages/SupportUs/SupportUS";
import HIW from './pages/HowItWorks/HIW';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Personal from './pages/Personal/Personal';
function App() {
  return (
    <div className="App">
        <div className="navb"></div>
        <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/" element={<Home/>} />
                <Route path="kakoradi" element={<HIW/>} />
                <Route path="tvojagodina" element={<Personal/>} />
                <Route path="amogus" element={<AboutUs/>}/>
                <Route path="stats" element={<Stats/>}/>
                <Route path="money" element={<SupportUs/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="signup" element={<SignUp/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
