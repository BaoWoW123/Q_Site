import "../styles/Home.css";
import lotus from "../assets/lotusicon.png";
import About  from "./About";

const Home = () => {
  return (
    <div className="Home">
      <div className="header">
        <div className="headerImgWrapper">
            <img src={lotus} alt="lotus logo"/>
        </div>
        <div className="headerQuote">“Out of the mud of your fears, struggles, and pain, 
            the lotus flower of your inner self can grow.” 
            — Debasish Mridha</div>
      </div>
      <div className="homeBody">
        <About/>
      </div>
    </div>
  );
};

export default Home;
