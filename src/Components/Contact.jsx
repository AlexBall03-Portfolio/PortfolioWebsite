import { FaRegEnvelope, FaRegUser, FaRegComments } from 'react-icons/fa';
import { GiPaperPlane } from 'react-icons/gi';
import "../Styles/Contact.css";

function Contact() {
    return (
        <div className="Contact">
            <div className="contact_Container">
                <section className='heading_Section'>
                    <h2><FaRegEnvelope className='icon' /> | Contact Me | <GiPaperPlane /> </h2>
                </section>

                <section className='form_Section'>
                    <form className='contact_Form'>
                        <div className='input-group'>
                            <input type="text" id='name' name='sender-name' required />
                            <label htmlFor="name"><FaRegUser /> Your Name*</label>
                        </div>
                        <div className='input-group'>
                            <input type="email" id='email' name='sender-email' required />
                            <label htmlFor="email"><FaRegEnvelope /> Your Email*</label>
                        </div>
                        <div className='input-group'>
                            <textarea name="sender-message" id="message" rows="8" required></textarea>
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