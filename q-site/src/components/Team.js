import quynh from "../assets/quynh.jpg";
import "../styles/Team.css";
import Footer from "./Footer";

const Team = () => {
  return (
    <>
      <div className="Team">
        <h1>Our Team</h1>
        <div className="teamList">
          <h2>Meet Quynh</h2>
          <div className="member">
            <img src={quynh} alt="headshot of Qunyh" />
            <div className="eduBg">
              <b>Educational Background:</b>
              <div>
                M.S., Clinical Mental Health Counseling w/ emphasis in
                Addictions, East Carolina University, Greenville, NC
              </div>
              <div>
                B.A., Psychology, Sacramento State University Sacramento,
                Sacramento, CA
              </div>
            </div>
          </div>
          <div className="bio">
            <div>
              I am a Licensed Clinical Mental Health Counselor Associate
              (LCMHCA) with over 2 years of experience in the state of North
              Carolina. I strive to provide a safe, understanding, and
              nonjudgmental space for people from all walks of life,
              particularly veterans, women, women veterans, adolescents, young
              adults, and those going through life transitions.
            </div>
            <div>
              As a veteran, first-generation
              Asian-American immigrant, and a mother, I understand the stigma
              surrounding mental health and the weight and pressure that many of
              us carry. These lived experiences have shaped my passion for
              creating a safe, affirming, and collaborative space where those
              struggling with quiet battles can feel seen, heard, and supported.
            </div>
            <div>
              {" "}
              My counseling style is warm and collaborative; drawing from
              person-centered therapy, motivational interview, Cognitive
              Behavioral Therapy (CBT), and Dialectical Behavioral Therapy (DBT)
              skills. But more than techniques, I believe in meeting you exactly
              where you are. Whether you’re navigating anxiety, depression,
              trauma, ADHD, or just longing to feel more like yourself again
              and/or tell your story, I am here to support you. This is your
              space - to breathe, to be, to begin again.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Team;
