import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBTextArea,
} from "mdb-react-ui-kit";

export const Email = () => {
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { subject, email, message };

    try {
      const response = await fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Email sent successfully!");
        // Optionally, clear the form
        setSubject("");
        setEmail("");
        setMessage("");
      } else {
        alert("Failed to send email");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending email");
    }
  };

  return (
    <MDBContainer className="py-5">
      <MDBRow className="gx-5">
        {/* Contact Form Column */}
        <MDBCol lg="6" className="mb-4">
          <h2 className="mb-4">Get in touch <h5><i>(Still on Development)</i></h5></h2>
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
                  required disabled
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
                  required disabled
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
              required disabled
            />

            <div className="d-flex justify-content-end items-center gap-3">
              <button className="more" type="submit" disabled>
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
              style={{ maxWidth: "24%", height: "auto", transform: "scaleX(-1)" }}
            />
          </div>
        </MDBCol>
      </MDBRow>
      {/* GIF Section */}
      {/* <div className="d-flex justify-content-end">
        <img
          src="https://i.gifer.com/y2.gif"
          alt="Exciting GIF"
          style={{ maxWidth: "8%", height: "auto" }}
        />
      </div> */}
    </MDBContainer>
  );
};
