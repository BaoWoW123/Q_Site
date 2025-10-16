import "../styles/About.css";
import therapy from '../assets/therapy.jpg';
import monster from '../assets/monster.png';

const About = (props) => {
  return (
    <div className="About">
      <h1>About</h1>
      <div className="aboutSection">
      <img src={therapy} alt='therapy counseling between female client and counselor'/>
      <div>
        <h3>Welcome to your journey.</h3>
        <p>At Q’s Counseling, healing is seen as a
        personal and powerful process; one that honors where you’ve been while
        gently guiding you toward where you’re going. Like the lotus rising from
        the mud, your journey may begin in uncertainty, but it holds the power
        to bloom into something whole, resilient, and deeply yours.</p>
      </div>
      </div>
      <div >
      <div className="aboutSection">
        <div>

      <h3>A safe place to heal, grow, and be heard.</h3>
        Q’s Counseling was created to hold space for your meaningful journey
        through adversity, with empathy and grace, not judgement. Whether you're
        navigating life transitions, healing through pain, or simply seeking to
        feel more like yourself again, this is a space to be seen, supported,
        and gently guided back to your center.
        </div>
      <img src={monster} alt='woman overwhelmed by a psychological monster'/>
      </div>
      </div>
    </div>
  );
};

export default About;
