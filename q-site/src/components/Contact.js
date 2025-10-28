import "../styles/Contact.css";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <section className="contact-header">
          <h1>Contact</h1>
          <p>
            Taking the first step can feel like the hardest part, but you don’t
            have to do it alone. Whether you have questions, need more
            information, or are ready to begin your counseling journey, we’re
            here to listen. We look forward to connecting with you.
          </p>
        </section>

        <section className="contact-book">
          <h2>Book an appointment</h2>
          <div className="contact-book-text">
            <p>
              Think we can help? Take the first step in your journey and book a
              free phone consultation appointment today to see if we are a
              match.
            </p>
            <p>
              Ready to jump right into it? Book an initial intake appointment
              and fill out the required documentation before your appointment.
            </p>
          </div>
          <button
            className="contact-button" onClick={() => 
              window.open('https://quynh-akers.clientsecure.me/', '_blank', 'noopener,noreferrer')}>
            <span>Book an appointment</span>
          </button>
        </section>

        <section className="contact-info">
          <h3>Important Information</h3>
          <p>
            Payment is due at the time of service. Please reach out for any
            questions regarding fees or session lengths{" "}
            <a href="https://quynh-akers.clientsecure.me/">here.</a>
          </p>
          <p>
            All sessions are currently held via a secure, HIPAA-compliant
            telehealth platform.
          </p>
        </section>

        <section className="contact-services">
          <h3>Services &amp; Insurance</h3>
          <p>
            Q’s Counseling offers individual therapy services for adolescents
            and adults (16+). We currently accept self-pay and are in-network
            with Aetna and BCBS NC. Please contact us with any questions about
            coverage or rates{" "}
            <a href="https://quynh-akers.clientsecure.me/">here.</a>
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
