import { React, useRef } from 'react';
import emailjs from '@emailjs/browser';

import './contact.css';

import facebook from '../../assets/facebook.png';
import insta from '../../assets/instagram.png';
import linkedIn from '../../assets/linkedIn.png'
import twitter from '../../assets/twitter.png';


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
            <span className='contactDesc'> Please fill the form for any quires and support </span>
            <form ref={form} onSubmit={sendEmail} className='cotactForm'>
                <input type='text' className='name' placeholder='Your Name' name='from_name' />
                <input type='email' className='email' placeholder='Your Email' name='from_email' />
                <textarea className='msg' name='message' rows='5' placeholder='Your Message' />
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <img src={twitter} alt='twitter' className='link'/>
                    <img src={linkedIn} alt='linkedIn' className='link'/>
                    <img src={insta} alt='instagram' className='link'/>
                    <img src={facebook} alt='facebook' className='link'/>
                   

                    
                    
                </div>
            </form>
       </div>
   </section>
  )
}

export default Contact
