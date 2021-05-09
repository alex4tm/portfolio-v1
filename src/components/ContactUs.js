import React from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css'

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();
    emailjs.sendForm('gmail_acc', 'portofolio_form', e.target, 'user_rcViC8ergxun7b9d4juaN')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        document.getElementById('email-sent').innerText = "Email sent successfully! I will reply as soon as possible."
    }

    return(
        <div>
            <div className="contact-container" id="contact">
            <form onSubmit={sendEmail}>
                    <h2>Get in touch</h2>
                    <div className="contact-wrapper">
                        <div className="contact-field">
                            <input type="text" className="contact-input" placeholder="Name" name="name" required />
                        </div>
                        <div className="contact-field">
                            <input type="email" className="contact-input" placeholder="Email Address" name="email" required />
                        </div>
                        <div className="contact-field">
                            <input type="text" className="contact-input" placeholder="Subject" name="subject" required />
                        </div>
                        <div className="contact-field">
                            <textarea className="contact-input" cols="30" rows="4" placeholder="Your message" name="message" required ></textarea>
                        </div>
                        <div className="submit-btn" id="submit-btn">
                            <input type="submit" className="btn--outline" value="Send Message"></input>
                        </div>
                        <p id="email-sent"></p>
                    </div>
                </form>
            </div>
        </div>
    )
}
