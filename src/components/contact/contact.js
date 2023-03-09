import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: "" });
  };

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const validatePhone = (phone) => {
    const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return re.test(String(phone));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted");
    let isError = false;
    if (!formData.name) {
      setError({ ...error, name: "Name is required" });
      isError = true;
    }
    if (!formData.email) {
      setError({ ...error, email: "Email is required" });
      isError = true;
    } else if (!validateEmail(formData.email)) {
      setError({ ...error, email: "Invalid email" });
      isError = true;
    }
    if (!formData.phone) {
      setError({ ...error, phone: "Phone is required" });
      isError = true;
    } else if (!validatePhone(formData.phone)) {
      setError({ ...error, phone: "Invalid phone number" });
      isError = true;
    }
    if (!formData.message) {
      setError({ ...error, message: "Message is required" });
      isError = true;
    }
    if (!isError) {
      console.log(formData);
      // add code to submit the form data to your server here
      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container px-4 py-5">
        <h2 className="primary-color fs-1 pb-2 border-bottom">Contact Us</h2>
        <Form className="py-5" onSubmit={handleSubmit}>
          <Form.Group className="pb-3">
            <Form.Label className="primary-color">Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              isInvalid={error.name}
            />
            <Form.Control.Feedback type="invalid">
              {error.name}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="pb-3">
            <Form.Label className="primary-color">Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              isInvalid={error.email}
            />
            <Form.Control.Feedback type="invalid">
              {error.email}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="pb-3">
            <Form.Label className="primary-color">Phone</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              isInvalid={error.phone}
            />
            <Form.Control.Feedback type="invalid">
              {error.phone}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="pb-3">
            <Form.Label className="primary-color">Message</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              isInvalid={error.message}
            />
            <Form.Control.Feedback type="invalid">
              {error.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="luxurious-background rounded-0 border-0"
            style={{ minWidth: "130px" }}
          >
            Submit
          </Button>
          {/* <a href="mailto:`othmanben.vp@gmail.com`?subject={subject}&body={body}">
            Submit
          </a> */}
        </Form>
      </div>
    </section>
  );
};
export default Contact;
