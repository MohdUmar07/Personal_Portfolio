'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Github from '../../ui/SocialIcons/Github';
import LinkedIn from '../../ui/SocialIcons/LinkedIn';
import X from '../../ui/SocialIcons/X';

interface FormData {
  from_name: string;
  from_email: string;
  message: string;
}

interface FormErrors {
  from_name?: string;
  from_email?: string;
  message?: string;
}

interface ModalState {
  show: boolean;
  message: string;
  isSuccess: boolean;
}

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [modal, setModal] = useState<ModalState>({
    show: false,
    message: '',
    isSuccess: false,
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    from_name: '',
    from_email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = (): FormErrors => {
    const errors: FormErrors = {};
    if (!formData.from_name.trim()) errors.from_name = 'Name is required';
    if (!formData.from_email.trim()) {
      errors.from_email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.from_email)) {
      errors.from_email = 'Invalid email address';
    }
    if (!formData.message.trim()) errors.message = 'Message cannot be empty';
    return errors;
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    if (!form.current) return;

    setIsSubmitting(true);
    emailjs
      .sendForm('service_u6ivzki', 'template_tpzchgh', form.current, 'LweSJTgvb0x0TrT5r')
      .then(() => {
        setModal({ show: true, message: 'Email Sent Successfully!', isSuccess: true });
        setIsSubmitting(false);
        setFormData({ from_name: '', from_email: '', message: '' });
      })
      .catch(() => {
        setModal({
          show: true,
          message: 'Failed to send email. Please try again.',
          isSuccess: false,
        });
        setIsSubmitting(false);
      });
  };

  const closeModal = (): void => setModal((prev) => ({ ...prev, show: false }));

  return (
    <section id="contactsPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill the form for any queries and support
        </span>
        <form ref={form} onSubmit={sendEmail} className="contactForm">
          <input
            type="text"
            className={`name ${formErrors.from_name ? 'error' : ''}`}
            placeholder="Your Name"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
          />
          {formErrors.from_name && (
            <span className="errorText">{formErrors.from_name}</span>
          )}

          <input
            type="email"
            className={`email ${formErrors.from_email ? 'error' : ''}`}
            placeholder="Your Email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
          />
          {formErrors.from_email && (
            <span className="errorText">{formErrors.from_email}</span>
          )}

          <textarea
            className={`msg ${formErrors.message ? 'error' : ''}`}
            name="message"
            rows={5}
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          />
          {formErrors.message && (
            <span className="errorText">{formErrors.message}</span>
          )}

          <button type="submit" className="submitBtn" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>

          {modal.show && (
            <>
              <div className="modalOverlay" onClick={closeModal}></div>
              <div className={`modal ${modal.isSuccess ? 'success' : 'error'}`}>
                <div className="modalContent">
                  <p>{modal.message}</p>
                  <button type="button" onClick={closeModal} className="closeModalBtn">
                    Close
                  </button>
                </div>
              </div>
            </>
          )}
        </form>

        <div className="links">
          <a href="https://github.com/MohdUmar07" target="_blank" rel="noopener noreferrer">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/mohdumar2506/" target="_blank" rel="noopener noreferrer">
            <LinkedIn />
          </a>
          <a href="https://twitter.com/@ICodeAlchemist" target="_blank" rel="noopener noreferrer">
            <X />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
