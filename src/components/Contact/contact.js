import { React, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./contact.css";

import Github from "../../ui/SocialIcons/Github";
import LinkedIn from "../../ui/SocialIcons/LinkedIn";
// import Facebook from "../../ui/SocialIcons/Facebook";
import X from "../../ui/SocialIcons/X";

const Contact = () => {
  const form = useRef();
  const [modal, setModal] = useState({
    show: false,
    message: "",
    isSuccess: false,
  });
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.from_name) errors.from_name = "Name is required";
    if (!formData.from_email) errors.from_email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.from_email))
      errors.from_email = "Invalid email address";
    if (!formData.message) errors.message = "Message cannot be empty";
    return errors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    emailjs
      .sendForm(
        "service_u6ivzki",
        "template_tpzchgh",
        form.current,
        "LweSJTgvb0x0TrT5r"
      )
      .then(() => {
        setModal({
          show: true,
          message: "Email Sent Successfully!",
          isSuccess: true,
        });
        setIsSubmitting(false);
        setFormData({ from_name: "", from_email: "", message: "" });
      })
      .catch(() => {
        setModal({
          show: true,
          message: "Failed to send email. Please try again.",
          isSuccess: false,
        });
        setIsSubmitting(false);
      });
  };

  const closeModal = () => setModal({ ...modal, show: false });

  return (
    <section id="contactsPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          {" "}
          Please fill the form for any queries and support{" "}
        </span>
        <form ref={form} onSubmit={sendEmail} className="contactForm">
          <input
            type="text"
            className={`name ${formErrors.from_name ? "error" : ""}`}
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
            className={`email ${formErrors.from_email ? "error" : ""}`}
            placeholder="Your Email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
          />
          {formErrors.from_email && (
            <span className="errorText">{formErrors.from_email}</span>
          )}

          <textarea
            className={`msg ${formErrors.message ? "error" : ""}`}
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          />
          {formErrors.message && (
            <span className="errorText">{formErrors.message}</span>
          )}

          <button type="submit" value="Send" className="submitBtn">
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
          {modal.show && (
            <>
              <div className="modalOverlay" onClick={closeModal}></div>
              <div className={`modal ${modal.isSuccess ? "success" : "error"}`}>
                <div className="modalContent">
                  <p>{modal.message}</p>
                  <button onClick={closeModal} className="closeModalBtn">
                    Close
                  </button>
                </div>
              </div>
            </>
          )}
        </form>

        <div className="links">
          <a
            href="https://github.com/MohdUmar07"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="socialIcon" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohdumar2506/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn className="socialIcon" />
          </a>
          {/* <a
            href="https://www.facebook.com/your-facebook-profile/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="socialIcon" />
          </a> */}
          <a
            href="https://twitter.com/@ICodeAlchemist"
            target="_blank"
            rel="noopener noreferrer"
          >
            <X className="socialIcon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
