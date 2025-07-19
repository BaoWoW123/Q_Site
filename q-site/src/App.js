import "./styles/App.css";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState("");

  //Navigation Event Handler
  const navBtnEvent = (id) => {
    setActiveRoute(id);
    //if (progress.current) progress.current.style.width = "0%";
    window.scrollTo({top:0, behavior: "smooth"});
    navigate(id === "home" ? "/" : `/${id}`)
  };

  return (
    <div className="App">
      <Navbar reroute={navBtnEvent} />
      <Routes>
        <Route index path="/" element={<Home reroute={navBtnEvent}/>} />
        <Route path="/About" element={<About reroute={navBtnEvent} />} />
        <Route path="/Contact" element={<Contact reroute={navBtnEvent} />} />
      </Routes>
    </div>
  );
}

export default App;
