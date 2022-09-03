import { FaRegEnvelope, FaRegUser, FaRegComments } from 'react-icons/fa';
import { GiPaperPlane } from 'react-icons/gi';
import "../Styles/Contact.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    // EmailJS Public API Key
    const EmailJs_Public_API_Key = process.env.REACT_APP_EMAILJS_PUBLIC_API_KEY;

    // EmailJS Form Functionality
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_2de801c', 'template_ir7tp6n', form.current, EmailJs_Public_API_Key)
        .then((result) => {
            console.log(result.text);
            console.log("Message sent!");
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };

    // JSX Template
    return (
        <div className="Contact" id='contact'>
            <div className="contact_Container">
                <section className='heading_Section'>
                    <h2><FaRegEnvelope className='icon' /> | Contact Me | <GiPaperPlane /> </h2>
                </section>

                <section className='form_Section'>
                    <form ref={form} onSubmit={sendEmail} className='contact_Form'>
                        <div className='input-group'>
                            <input type="text" name='subject' required />
                            <label htmlFor="subject"><FaRegUser /> Subject*</label>
                        </div>
                        <div className='input-group'>
                            <input type="text" name='sender_Name' required />
                            <label htmlFor="name"><FaRegUser /> Your Name*</label>
                        </div>
                        <div className='input-group'>
                            <input type="email" name='sender_Email' required />
                            <label htmlFor="email"><FaRegEnvelope /> Your Email*</label>
                        </div>
                        <div className='input-group'>
                            <textarea name="message" rows="8" required></textarea>
                            <label htmlFor="message"><FaRegComments /> Your Message*</label>
                        </div>
                        <button type='submit'>Send <GiPaperPlane /></button>
                    </form>
                </section>
            </div>
        </div>
    );
}

export default Contact;