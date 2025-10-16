import "../styles/Home.css";
import lotus from "../assets/lotusicon.png";
import About  from "./About";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
    <div className="Home">
      <div className="header">
        <div className="headerImgWrapper">
            <img src={lotus} alt="lotus logo"/>
        </div>
        <div className="headerQuote">“Out of the mud of your fears, struggles, and pain, 
            the lotus flower of your inner self can grow.” 
            — Debasish Mridha</div>
      </div>
        <About/>
    </div>
        <Footer/>
        </>
  );
};

export default Home;
