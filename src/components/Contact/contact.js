import { React, useRef } from 'react';
import emailjs from '@emailjs/browser';

import './contact.css';

// Importing the social media icon components
import Github from '../../ui/SocialIcons/Github';
import LinkedIn from '../../ui/SocialIcons/LinkedIn';
import Facebook from '../../ui/SocialIcons/Facebook';
import X from '../../ui/SocialIcons/X';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_u6ivzki', 'template_tpzchgh', form.current, 'LweSJTgvb0x0TrT5r')
            .then((result) => {
                console.log(result.text);
                alert("Email Sent!");
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id='contactsPage'>
            <div id='contact'>
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'> Please fill the form for any queries and support </span>
                <form ref={form} onSubmit={sendEmail} className='contactForm'>
                    <input type='text' className='name' placeholder='Your Name' name='from_name' />
                    <input type='email' className='email' placeholder='Your Email' name='from_email' />
                    <textarea className='msg' name='message' rows='5' placeholder='Your Message' />
                    <button type='submit' value='Send' className='submitBtn'>Submit</button>
                    <div className='links'>
                        {/* Rendering social media icon components */}
                        <Github className='socialIcon' />
                        <LinkedIn className='socialIcon' />
                        <Facebook className='socialIcon' />
                        <X className='socialIcon' />
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;
