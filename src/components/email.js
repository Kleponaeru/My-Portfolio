import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBTextArea,
} from "mdb-react-ui-kit";
import emailjs from "emailjs-com"; // Import the emailjs-com package

export const Email = () => {
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get reCAPTCHA token
    window.grecaptcha
      .execute("6LdURG8qAAAAAL7ZcQ5WYB4XrQnRuROJx9vieTU_", { action: "submit" })
      .then((token) => {
        const templateParams = {
          subject,
          user_email: email,
          message,
          "g-recaptcha-response": token, // Add the token to templateParams
        };

        // Send email using EmailJS
        emailjs
          .send(
            "service_xmydokc",
            "template_96ivq1w",
            templateParams,
            "B8zUeMQKB4PbaJXLc"
          )
          .then(
            (response) => {
              console.log(
                "Email sent successfully!",
                response.status,
                response.text
              );
            },
            (error) => {
              console.log("Failed to send email. Error:", error);
            }
          );

        // Clear form fields after sending
        setSubject("");
        setEmail("");
        setMessage("");
      });
  };

  return (
    <MDBContainer className="py-5">
      <MDBRow className="gx-5">
        {/* Contact Form Column */}
        <MDBCol lg="6" className="mb-4">
          <h2 className="mb-4">
            <h4>Send Me a Message</h4>
          </h2>
          <form onSubmit={handleSubmit}>
            <MDBRow className="mb-4">
              <MDBCol md="6">
                <MDBInput
                  label="Subject "
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="mb-2 text-white"
                  labelClass="text-secondary custom-label"
                  required
                />
              </MDBCol>
              <MDBCol md="6">
                <MDBInput
                  label="Email "
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mb-2 text-white"
                  labelClass="text-secondary custom-label"
                  required
                />
              </MDBCol>
            </MDBRow>

            <MDBTextArea
              label="Your message "
              rows={8}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mb-4 text-white"
              labelClass="text-secondary custom-label"
              required
            />

            <div className="d-flex justify-content-end items-center gap-3">
              <button className="more" type="submit">
                <span>Send Email</span>
              </button>
            </div>
          </form>
        </MDBCol>

        {/* Information Column */}
        <MDBCol lg="6">
          <div className="mb-5">
            <h4 className="mb-3">About Collaboration</h4>
            <p className="text-muted">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out
              with any questions about web development, programming, or any
              potential collaborations.
            </p>
          </div>

          <div>
            <h4 className="mb-3">Current Availability</h4>
            <p className="text-muted">
              I'm currently available for freelance work and full-time
              opportunities. Whether you need a website, web application, or
              technical consultation, I'd love to hear about your project and
              see how I can help.
            </p>
          </div>
          <div className="d-flex justify-content-end">
            <img
              src="https://i.gifer.com/y2.gif"
              alt="Exciting GIF"
              style={{
                maxWidth: "24%",
                height: "auto",
                transform: "scaleX(-1)",
              }}
            />
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
