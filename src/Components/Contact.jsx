import { FaRegEnvelope } from 'react-icons/fa';

function Contact() {
    return (
        <div className="Contact">
            <h2><FaRegEnvelope /> | Contact Me</h2>
            <form>
                <input type="text" name="name" id="sender-name" placeholder="Your name..."/>
                <input type="email" name="email" id="sender-email" placeholder="Your email..."/>
                <textarea name="message" id="sender-message" cols="30" rows="5" placeholder="Your message..." />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Contact;