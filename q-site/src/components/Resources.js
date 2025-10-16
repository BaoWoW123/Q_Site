import "../styles/Resources.css";
import Footer from "./Footer";

const Resources = () => {
  return (
    <>
      <div className="Resources">
        <h1>Resources</h1>
        <div className="resourceList">
          <div className="resourceBio">
            <h2>Mental Health Resources</h2>
            If you or someone you know is in crisis or needs extra support,
            please reach out to one of the resources below. You are not alone;
            help is available.
          </div>
          <ul>
            <li>
              <h2>📍 North Carolina Resources</h2>
              <strong>NC 988 Suicide &amp; Crisis Lifeline</strong>
              <br />
              <a
                href="https://988lifeline.org/chat/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website / 988 Chat
              </a>
              <br />
              Call or text 988. 24/7 free and confidential support for anyone in
              distress.
            </li>

            <li>
              <strong>
                NC Department of Health &amp; Human Services – Behavioral Health
              </strong>
              <br />
              <a
                href="https://www.ncdhhs.gov/divisions/behavioral-health-and-developmental-disabilities"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
              <br />
              Information on mental health, substance use, and developmental
              disability services in North Carolina.
            </li>

            <li>
              <strong>Trillium Health Resources</strong>
              <br />
              <a
                href="https://www.trilliumhealthresources.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>{" "}
              | Call 1-877-685-2415
              <br />
              Manages mental health, substance use, and
              intellectual/developmental disability services for eastern NC
              counties.
            </li>

            <li>
              <strong>Cardinal Innovations / Partners Health Management</strong>
              <br />
              <a
                href="https://www.partnersbhm.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>{" "}
              | Call 1-888-235-4673
              <br />
              Provides crisis help, therapy referrals, and case management in
              many NC counties.
            </li>

            <li>
              <strong>Hope4NC Helpline</strong>
              <br />
              Call or text 1-855-587-3463
              <br />
              24/7 emotional support for anyone in NC, including disaster and
              pandemic-related stress.
            </li>

            <li>
              <strong>Mobile Crisis Services – NC</strong>
              <br />
              Call 1-855-587-3463 (same as Hope4NC)
              <br />
              24/7 crisis teams that come to your location for in-person mental
              health support.
            </li>
          </ul>

          <h2>🌎 National Resources</h2>
          <ul>
            <li>
              <strong>988 Suicide &amp; Crisis Lifeline</strong>
              <br />
              <a
                href="https://988lifeline.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
              <br />
              Call or text 988. 24/7 free, confidential support for anyone in
              emotional distress.
            </li>

            <li>
              <strong>SAMHSA’s National Helpline</strong>
              <br />
              Call 1-800-662-4357 (HELP)
              <br />
              Free, confidential treatment referral and information in English
              and Spanish.
            </li>

            <li>
              <strong>National Domestic Violence Hotline</strong>
              <br />
              <a
                href="https://www.thehotline.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>{" "}
              | Call 1-800-799-SAFE (7233) | Text "START" to 88788
              <br />
              24/7 confidential support, crisis intervention, and safety
              planning.
            </li>

            <li>
              <strong>Veterans Crisis Line</strong>
              <br />
              <a
                href="https://www.veteranscrisisline.net/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>{" "}
              | Call 988 and Press 1 | Text 838255
              <br />
              24/7 support for veterans, service members, and their families.
            </li>

            <li>
              <strong>Crisis Text Line</strong>
              <br />
              <a
                href="https://www.crisistextline.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>{" "}
              | Text HOME to 741741
              <br />
              24/7 free text support from trained crisis counselors.
            </li>

            <li>
              <strong>The Trevor Project (LGBTQ+ Youth)</strong>
              <br />
              <a
                href="https://www.thetrevorproject.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>{" "}
              | Call 1-866-488-7386 | Text START to 678678
              <br />
              24/7 crisis intervention and suicide prevention for LGBTQ+ youth.
            </li>

            <li>
              <strong>RAINN – National Sexual Assault Hotline</strong>
              <br />
              <a
                href="https://www.rainn.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website / Online Chat
              </a>{" "}
              | Call 1-800-656-4673 (HOPE)
              <br />
              24/7 confidential support for survivors of sexual assault.
            </li>
          </ul>

          <div></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Resources;
