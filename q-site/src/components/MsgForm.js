import { useForm, ValidationError } from '@formspree/react';
import { Dialog, DialogPanel, DialogTitle, Transition } from '@headlessui/react'
import { useState } from 'react'
import '../styles/MsgForm.css'

const MsgForm = ()=>  {
  let [isOpen, setIsOpen] = useState(false);
  const [state, handleSubmit, reset] = useForm(
    process.env.REACT_APP_formspreeURL
  );

  if (state.succeeded) {
    console.log('state succeeded')
    return <div>Message sent!</div>;
  }

  return (
    <>
      <button onClick={() => setIsOpen(true)} className ='MsgFormBtn'>Book a free consulation</button>
<Transition show={isOpen} className='trans'>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className='dialog'
      >
        <div
          style={{
            position: 'fixed',
            inset: 0,
            display: 'flex',
            width: '100vw',
            height: '100vh',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            backgroundColor: 'rgba(0,0,0,0.5)', 
            opacity:'0',
            animation: 'appear .1s ease-in-out 0s forwards',
            // optional overlay effect
          }}
        >
          <DialogPanel      
            style={{
              maxWidth: '40rem', // approx max-w-lg
              maxHeight: '30rem',
              backgroundColor: 'white',
              padding: '2rem', // p-12
              border: '1px solid #3c9cab',
              borderRadius: '0.375rem',
              display: 'flex',
              flexDirection: 'column',
              position:'relative'
            }}
          >
              <button onClick={() => setIsOpen(false)} className='exitFormBtn'>X</button>
            <DialogTitle style={{ margin:'auto', padding:'1rem 0'}}>
              Book a Free Consultation
            </DialogTitle>
            <form onSubmit={handleSubmit} className='msgFormPanel'>
              <div>
                <div>
          <label htmlFor="email">Email: </label>
          <input id="email" type="email" name="email" placeholder='example@gmail.com' required />
          <ValidationError field="email" prefix="Email" errors={state.errors} />
              </div>
              <div>
          <label htmlFor="name">Name: </label>
          <input id="name" type="text" name="name" placeholder='John Smith' required />
              </div>
              <div>
          <label htmlFor="phone">Phone Number: </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="(123) 123-4567"
            required
            />
          <ValidationError field="phone" prefix="phone" errors={state.errors} />
            </div>
              </div>
          <textarea
            id="message"
            name="message"
            className='message'
            placeholder="What's on your mind?"
            maxLength={250}
            required
          />
          <ValidationError
            prefix="Message"
            field="messsage"
            errors={state.errors}
          />

          <button type="submit" className='sendFormBtn' disabled={state.submitting}>
            Send Message
          </button>
        </form>
          </DialogPanel>
        </div>
      </Dialog>
      </Transition>
    </>
  )
}

export default MsgForm;
