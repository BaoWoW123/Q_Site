import "../styles/Contact.css";
import Footer from "./Footer";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit, reset] = useForm(
    process.env.REACT_APP_formspreeURL
  );

  if (state.succeeded) {
    return <div>Message sent!</div>;
  }

  return (
    <div className="Contact">
      <h1>Contact</h1>
      <div>
        Taking the first step can feel like the hardest part, but you don’t have
        to do it alone. Whether you have questions, need more information, or
        are ready to begin your counseling journey, we’re here to listen. We
        look forward to connecting with you.
      </div>
      <div>
        <h1>Book an appointment. </h1>
        Think we can help? Take the first step in your journey and book a free
        phone consultation appointment today to see if we are a match. Ready to
        jump right into it? Book an initial intake appointment and fill out the
        required documentation before your appointment.
        <form onSubmit={handleSubmit}>
          <h1>Message Us!</h1>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
          <ValidationError field="email" prefix="Email" errors={state.errors} />
          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="name" required />
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="(123) 123-4567"
            required
          />
          <ValidationError field="phone" prefix="phone" errors={state.errors} />
          <textarea
            id="message"
            name="message"
            placeholder="Optional message."
          />
          <ValidationError
            prefix="Message"
            field="messsage"
            errors={state.errors}
          />

          <button type="submit" disabled={state.submitting}>
            Send
          </button>
        </form>
        Please note: Payment is due at the time of service.
        <div>
          Please reach out for any questions regarding fees and lengths of
          services <a href="https://www.google.com">here.</a>
        </div>
        <div>
          Q’s Counseling PLLC currently only offers telehealth appointments via
          a secured HIPAA compliant platform. We are in the process of getting
          credentialed with insurances and is only accepting self-pay
          appointments at this time.
        </div>
        <div>
          Please check back at a later time if you’d prefer to use your
          insurance. See you then!
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
