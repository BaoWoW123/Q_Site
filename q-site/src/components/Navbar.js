import "../styles/Navbar.css";
import React, { useEffect, useState } from "react";

const Navbar = ({ reroute, activeRoute }) => {
    const [progress,setProgress ]= useState(0);
    const navArr = [
        { id: "home", label: "Home" },
        { id: "team", label: "Team" },
        { id: "contact", label: "Contact" }
    ]
      //Scroll progress bar effect
  useEffect(() => { 
    const handleScroll = () => { 
       const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
        const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      
      const scrolled =((winScroll / height) * 100);
      setProgress(scrolled)
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div className="Navbar">
      <title>Q's Counseling</title>
        <div className="navbarTitle">Q's Counseling </div>
      <div className="navbarBtns">
        { navArr.map((el) => (
            <button
                key={el.id}
                type="button"
                onClick={() => reroute(el.id)}
                className={activeRoute === el.id ? "activeRoute" : ""}
            >
                <div>{el.label}</div>
            </button>
        ))
        }
      </div>
      <div className="progressWrapper">
        <div className="progress" style={{width: `${progress}%`}}></div>
      </div>
    </div>
  );
};
export default Navbar;
