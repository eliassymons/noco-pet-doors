import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import checked from "../images/envelope-check.svg";

function Contact() {
  const [messageSent, setMessageSent] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    number: "",
    message: "",
    name: "",
    zip: "",
  });
  const handleOnChange = (event) => {
    event.persist();
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  // Server State Handling

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setMessageSent(true);
    axios({
      method: "POST",
      url: "https://formbold.com/s/3Gbd9",
      data: inputs,
    })
      .then((r) => {
        console.log("hello");
      })
      .catch((r) => {
        console.log("error");
      });
  };
  return (
    <div className="contact" id="contact">
      <h1>Get in touch</h1>
      <div className="contact-container">
        {!messageSent ? (
          <form onSubmit={handleOnSubmit}>
            <input
              onChange={handleOnChange}
              value={inputs.name}
              id="name"
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
              onChange={handleOnChange}
              value={inputs.email}
              id="email"
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              onChange={handleOnChange}
              value={inputs.number}
              id="number"
              type="tel"
              name="number"
              placeholder="Phone Number"
            />
            <input
              onChange={handleOnChange}
              value={inputs.zip}
              id="zip"
              type="text"
              name="zip"
              placeholder="Zip Code"
            />
            <textarea
              onChange={handleOnChange}
              value={inputs.message}
              id="message"
              name="message"
              placeholder="Type your message"
            />
            <Button type="submit"> Send Message </Button>
          </form>
        ) : (
          <div className="message-recieved">
            <img alt="email-recieved" src={checked} />
            <h3>
              Thank you for your submission. You can expect a response within
              the next business day.
            </h3>
          </div>
        )}
        <div className="hours">
          <h2>Hours:</h2>
          <p>Monday 8-6</p>
          <p>Tuesday 8-6</p>
          <p>Wednesday 8-6</p>
          <p>Thursday 8-6</p>
          <p>Friday 8-6</p>
          <p>Saturday 8-6</p>
          <div className="about-us-contact">
            <a href="mailto: Info@nocopetdoors.com">Info@nocopetdoors.com </a> /
            <a href="tel:970-215-7385"> (970) 215-7385</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
