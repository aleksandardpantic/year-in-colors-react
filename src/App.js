
import './App.css';
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Stats from "./pages/Stats/Stats";
import SupportUs from "./pages/SupportUs/SupportUS";
import HIW from './pages/HowItWorks/HIW';
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
                <Route path="amogus" element={<AboutUs/>}/>
                <Route path="stats" element={<Stats/>}/>
                <Route path="money" element={<SupportUs/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
