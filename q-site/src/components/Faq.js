import "../styles/Faq.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import Footer from "./Footer";
import { ArrowDropDown } from "@mui/icons-material";

const Faq = () => {
  return (
    <>
    <div className="Faq">
      <h1>Frequently Asked Questions</h1>
      <div className="faq">
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDown />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="question"
          >
            <Typography component="span">
              What issues do you work with?
            </Typography>
          </AccordionSummary>

          <AccordionDetails className="answer">
            <Typography>
              I work with adults navigating life transitions, trauma recovery,
              anxiety, depression, relationship challenges, and personal growth.
              I also have experience supporting veterans, mothers, military
              families/dependents, adolescents, and those adjusting to
              significant changes in life.
            </Typography>
          </AccordionDetails>
        </Accordion>

        
          <Accordion>
            <AccordionSummary expandIcon={<ArrowDropDown/>}
            aria-controls="panel-content"
            id="panel-header"
            className="question">
              <Typography component="span">
                Do you offer in-person or online sessions?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Currently, I offer sessions online via secure video. This allows
                you to access therapy from the comfort and privacy of your home
                while ensuring confidentiality and HIPAA compliance. We just ask
                that you ensure you are in a private location by yourself and
                not operating a vehicle.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ArrowDropDown/>}
            aria-controls="panel-content"
            id="panel-header"
            className="question">
              <Typography component="span">How long is a session? </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Most individual sessions are 50 minutes. Options are available
                for adjustment on a case-by-case basis.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ArrowDropDown/>}
            aria-controls="panel-content"
            id="panel-header"
            className="question">
              <Typography component="span">
                How often should I come to therapy?{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Many clients begin with weekly sessions to build momentum. Over
                time, we may meet less frequently as you progress towards your
                goal. We’ll decide together what works best for your needs.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ArrowDropDown/>}
            aria-controls="panel-content"
            id="panel-header"
            className="question">
              <Typography component="span">
                Do you accept insurance?{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                At this time, I am self-pay only and do not accept insurance. I
                can provide a superbill upon request, which you may submit to
                your insurance provider for potential out-of-network
                reimbursement. I am in the process of working with insurances to
                become credentialed, so if you prefer to use insurance, please
                check back at a later time.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ArrowDropDown/>}
            aria-controls="panel-content"
            id="panel-header"
            className="question">
              <Typography component="span">
                How much does therapy cost?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                My current rate is $150 per 50 minute session. Limited
                sliding-scale spots may be available for clients with financial
                need, so please don’t hesitate to reach out.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ArrowDropDown/>}
            aria-controls="panel-content"
            id="panel-header"
            className="question">
              <Typography component="span">
                How do I pay for my sessions?{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                I accept payments through secure online processing via Simple
                Practice. Please note, payment is due at the time of service.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ArrowDropDown/>}
            aria-controls="panel-content"
            id="panel-header"
            className="question">
              <Typography component="span">
                Is online therapy effective?{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes! Research shows that virtual therapy can be as effective as
                in-person sessions for many concerns. I use a HIPAA-secure video
                platform to ensure your privacy and comfort.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ArrowDropDown/>}
            aria-controls="panel-content"
            id="panel-header"
            className="question">
              <Typography component="span">
                Is therapy really confidential?{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes. Everything in therapy is kept confidential, with the
                exception of certain situations as required by law (such as
                safety concerns involving harm to self or others). This is
                something we will also review before starting therapy.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ArrowDropDown/>}
            aria-controls="panel-content"
            id="panel-header"
            className="question">
              <Typography component="span">How do I get started?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You can contact me <a href="/contact"> here</a> via the website or e-mail me at
                quynh@qscounselingpllc.com to schedule a free 15-minute
                consultation. This helps us see if we’re a good fit before
                starting therapy.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ArrowDropDown/>}
            aria-controls="panel-content"
            id="panel-header"
            className="question">
              <Typography component="span">
                What should I expect in the first session?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Your first session is about getting to know you, to include your
                history, what’s bringing you to therapy, and what you hope to
                achieve. We will discuss your goals and outline a plan moving
                forward.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ArrowDropDown/>}
            aria-controls="panel-content"
            id="panel-header"
            className="question">
              <Typography component="span">
                What if I’ve never been to therapy before?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                That’s okay! I’ll walk you through the process step by step. You
                don’t need to prepare anything; just come as you are!
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ArrowDropDown/>}
            aria-controls="panel-content"
            id="panel-header"
            className="question">
              <Typography component="span">
                Do you work with children or teens?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                While I do have experience working with both children and teens,
                I do not currently provide telehealth appointments for children
                under the age of 12. If you are looking for child therapy, I can
                help refer you to trusted colleagues.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ArrowDropDown/>}
            aria-controls="panel-content"
            id="panel-header"
            className="question">
              <Typography component="span">
                Can I end therapy whenever I want?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Absolutely. You are in control of your therapy journey. We can
                also discuss how to wrap up sessions in a way that feels
                complete and supportive for you.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ArrowDropDown/>}
            aria-controls="panel-content"
            id="panel-header"
            className="question">
              <Typography component="span">
                What happens if I need to cancel?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Please provide at least 24 hours’ notice to avoid a late
                cancellation fee.
              </Typography>
            </AccordionDetails>
          </Accordion>
        
      </div>

    </div>
      <Footer />
      </>
  );
};

export default Faq;
