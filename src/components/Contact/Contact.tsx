import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = ({ handleCloseModal }: { handleCloseModal: () => void }) => {
  const form = React.useRef() as React.MutableRefObject<HTMLFormElement>;

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm('service_x1kwkw9', 'template_25enrdc', form.current, {
        publicKey: 'oMXS_YfAs1Vw2hAhD',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Emial enviado com sucesso');
          handleCloseModal();

        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="from_email" />
      <label>Message</label>
      <textarea name="message" />
      <div>
        <input type="submit"  value="Send" />
        <input type='button' onClick={handleCloseModal} value="Cancel" />
      </div>
    </form>
  );
};

export default Contact