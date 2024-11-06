import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import React, { RefObject, useRef, useState } from "react";
import emailjs from "emailjs-com";
interface ContactProps {
  contactRef: RefObject<HTMLDivElement>;
}

export const Contact: React.FC<ContactProps> = ({ contactRef }) => {
  const firstName = useRef<HTMLInputElement>(null);
  const lastName = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLTextAreaElement>(null);
  const [check, setCheck] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState("");

  const emailRegex = RegExp(/.+@+./);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Extract values from refs
    const nameValue: string | undefined = firstName.current?.value;
    const lastNameValue: string | undefined = lastName.current?.value;
    const emailValue: string | undefined = email.current?.value;
    const messageValue: string | undefined = message.current?.value;

    // Validation checks
    if (
      nameValue &&
      lastNameValue &&
      messageValue &&
      emailRegex.test(emailValue || "")
    ) {
      // Sending email using EmailJS
      emailjs
        .sendForm(
          "service_mddpkdt",
          "template_uhj4ab5",
          e.currentTarget,
          "M0ccpJ2uj-bmWZy7D"
        )
        .then((result) => {
          console.log(result.text);

          // Set success message and clear inputs
          setCheck(true);
          setErrorMessage("Your message has been sent.");
        })
        .catch((error) => {
          console.error(error.text);

          // Set error message if email sending fails
          setCheck(false);
          setErrorMessage("Failed to send message. Please try again later.");
        });

      // Clear inputs after submission
      if (firstName.current) firstName.current.value = "";
      if (lastName.current) lastName.current.value = "";
      if (phone.current) phone.current.value = "";
      if (email.current) email.current.value = "";
      if (message.current) message.current.value = "";
    } else {
      setCheck(false);
      setErrorMessage("Please fill out all required fields correctly.");
    }
  };

  return (
    <>
      <section
        className="contact-section"
        id="contact-section"
        ref={contactRef}
      >
        <div className="container flexSB">
          <div className="contact-form-box w-half">
            <div className="section-header">
              <h2 className="section-title">Let’s work together!</h2>
            </div>

            <div className="tj-contact-form">
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="flexSB gap">
                  <div className="form_group">
                    <input
                      type="text"
                      name="conName"
                      id="conName"
                      placeholder="First name"
                      ref={firstName}
                      required
                      maxLength={30}
                    />
                  </div>
                  <div className="form_group">
                    <input
                      type="text"
                      name="conLName"
                      id="conLName"
                      placeholder="Last name"
                      ref={lastName}
                      required
                    />
                  </div>
                </div>
                <div className="flexSB gap">
                  <div className="form_group">
                    <input
                      type="email"
                      name="conEmail"
                      id="conEmail"
                      placeholder="Email address"
                      ref={email}
                      required
                    />
                  </div>
                  <div className="form_group">
                    <input
                      type="tel"
                      name="conPhone"
                      id="conPhone"
                      placeholder="Phone number"
                      ref={phone}
                    />
                  </div>
                </div>

                <div className="form_group">
                  <textarea
                    name="conMessage"
                    id="conMessage"
                    placeholder="Message"
                    ref={message}
                    required
                  ></textarea>
                </div>
                <div className="form_btn">
                  <button type="submit" className="btn tj-btn-primary">
                    Send Message
                  </button>
                </div>
              </form>
              <p
                style={{
                  color: check ? "#28a745" : "darkred",
                  marginTop: "1rem",
                }}
              >
                {errorMessage}
              </p>
            </div>
          </div>

          <div className="contact-info-list w-half">
            <ul className="ul-reset">
              <li>
                <div className="icon-box">
                  <IoCallOutline size={25} />
                </div>
                <div className="text-box">
                  <p>Phone</p>
                  <p>+40751227911</p>
                </div>
              </li>
              <li>
                <div className="icon-box">
                  <TfiEmail />
                </div>
                <div className="text-box">
                  <p>Email</p>
                  <p>padurariuionutradu@gmail.com</p>
                </div>
              </li>
              <li>
                <div className="icon-box">
                  <CiLocationOn size={25} />
                </div>
                <div className="text-box">
                  <p>Address</p>
                  <p>Falticeni, Suceava, Romania</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
