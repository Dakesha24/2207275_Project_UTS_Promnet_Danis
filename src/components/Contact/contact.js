import React, { useEffect, useRef } from "react";
import './contact.css';

import AOS from "aos";
import "aos/dist/aos.css";

import emailjs from '@emailjs/browser';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
    });
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ivc4utg', 'template_of5p919', form.current, '4RIOnuWHDEbQmTJ-B')
      .then((result) => {
          console.log(result.text);
          alert('Email berhasil terkirim!');
      }, (error) => {
          console.log(error.text);
          alert('Gagal mengirim email.');
      });
  };


  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle" data-aos="fade-up">Contact Me</h1>
        <span className="contactDesc" data-aos="fade-up" data-aos-delay="200">Tolong kontak saya jika Anda butuh sesuatu, saya siap membantu jika saya mau
        </span>
        <form className='contactForm' data-aos="fade-up" data-aos-delay="200" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder='Nama Anda' name='your_name'/>
          <input type="text" className="email" placeholder='Email Anda' name='your_email'/>
          <textarea className='message' name="message" rows="$" placeholder='Your Message'></textarea>
          <button type='submit' value='Send' className="submitBtn">Submit</button>

          
          
        </form>
      </div>

    </section>
  )
}

export default Contact;