import "../styles/Navbar.css";
import React, { useEffect, useState } from "react";

const Navbar = ({ reroute, active }) => {
    const [progress,setProgress ]= useState(0);
    const navArr = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
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
      console.log(progress)

    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div className="Navbar">
      <div className="navbarBtns">
        { navArr.map((el) => (
            <button
                key={el.id}
                type="button"
                onClick={() => reroute(el.id)}
                className={active === el.id ? "active" : ""}
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
