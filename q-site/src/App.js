import "./styles/App.css";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Team from "./components/Team";
import Faq from "./components/Faq";
import Resources from "./components/Resources";

function App() {
  const navigate = useNavigate();
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
      <Navbar reroute={navBtnEvent} activeRoute= {activeRoute}/>
      <Routes>
        <Route index path="/" element={<Home reroute={navBtnEvent} />} />
        <Route path="/Team" element={<Team reroute={navBtnEvent} />} />
        <Route path="/Contact" element={<Contact reroute={navBtnEvent}  />} />
        <Route path="/Faq" element={<Faq reroute={navBtnEvent}  />} />
        <Route path="/Resources" element={<Resources reroute={navBtnEvent}  />} />
      </Routes>
    </div>
  );
}

export default App;
