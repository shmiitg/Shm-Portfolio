import { useRef, useState } from 'react';
import './ContactMe.css';
import { FaTelegramPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const ContactMe = () => {
    const formRef = useRef();
    const [sent, setSent] = useState(0);

    const formSubmit = async (e) => {
        e.preventDefault();
        try {
            await emailjs.sendForm(process.env.REACT_APP_SERVICE, process.env.REACT_APP_TEMPLATE, formRef.current, process.env.REACT_APP_USER)
            setSent(2);
        } catch (err) {
            setSent(1);
        }
    }

    return (
        <div className="contact-container">
            <div className="contact-wrapper">
                <div className="contact-left">
                    <div className="contact-text-top">
                        Any Suggestion or Queries?
                    </div>
                    <div className="contact-text-bottom">
                        Complete the form or email me at <span>shubhamank002@gmail.com</span>
                    </div>
                </div>
                <div className="contact-right">
                    <form ref={formRef} onSubmit={formSubmit} className="contact-form">
                        <input required type="text" placeholder='Name*' name="user_name" />
                        <input required type="email" placeholder='E-mail*' name="user_email" />
                        <input required type="text" placeholder='Your Message' name="message" />
                        <button type="submit" className="btn-submit">
                            <FaTelegramPlane />Send
                        </button>
                        <div className="thanks">
                            {sent === 2 && "Thank You..."}
                            {sent === 1 && "Failed... Try again"}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactMe
