
import './App.css';
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
        <BrowserRouter>
            <Routes>
                <Route path="/" >
                    <Route index  />
                    <Route path="blogs"  />
                    <Route path="contact"  />
                    <Route path="*"  />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
