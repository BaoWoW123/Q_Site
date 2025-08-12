import "../styles/Contact.css";
import Footer from "./Footer";
import { useForm } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit, reset] = useForm(
    process.env.REACT_APP_formspreeURL
  );

  if (state.succeeded) {
    return <div>Message sent!</div>;
  }

  return (
    <div className="Contact">
      <div style={{padding:' 0 10rem'}}>
      <h1>Contact</h1>
        Taking the first step can feel like the hardest part, but you don’t have
        to do it alone. Whether you have questions, need more information, or
        are ready to begin your counseling journey, we’re here to listen. We
        look forward to connecting with you.
      </div>

      <div className="contactSubsection">
      <h2>Book an appointment </h2>
        <div>
            Think we can help? Take the first step in your journey and book a
            free phone consultation appointment today to see if we are a match.
        </div>
        <div>          
            Ready to jump right into it? Book an initial intake appointment and
            fill out the required documentation before your appointment.          
          </div>
          <button className="apptBtn" onClick={() => window.open('https://quynh-akers.clientsecure.me/', '_blank', 'noopener,noreferrer')}>Book an appointment</button>
          <div className="apptNote">
          <b>Note:</b> Payment is due at the time of service. Please reach out
          for any questions regarding fees and lengths of services{" "}
          <a href="https://quynh-akers.clientsecure.me/">here.</a>{" "}
          Q’s Counseling PLLC currently only offers telehealth appointments via
          a secured HIPAA compliant platform. We are in the process of getting
          credentialed with insurances and is only accepting self-pay
          appointments at this time. Please check back at a later time if you’d
          prefer to use your insurance. See you then!
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
