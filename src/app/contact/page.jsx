"use client";

import { FormErrors } from "@/components/FormErrors/FormErrors";
import emailjs from "emailjs-com";
import Image from "next/image";
import React, { useRef, useState } from "react";
import ContactImage from "/public/contact.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formErrors, setFormErrors] = useState({ email: "" });
  const [emailValid, setEmailValid] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const formEmail = useRef(null);

  const handleNameInput = (e) => {
    const value = e.target.value;
    setName(value);
  };

  const handleEmailInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEmail(value);
    validateField(name, value);
  };

  const handleMessageInput = (e) => {
    const value = e.target.value;
    setMessage(value);
  };

  const validateField = (fieldName, value) => {
    let fieldValidationErrors = { ...formErrors };
    let isValid = false;

    switch (fieldName) {
      case "email":
        isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = isValid ? "is valid" : " is invalid";
        break;
      default:
        break;
    }

    setFormErrors(fieldValidationErrors);
    setEmailValid(isValid);
    validateForm();
  };

  const validateForm = () => {
    setFormValid(emailValid);
  };

  const handleNavigation = (e) => {
    e.preventDefault(); // Prevent form submission

    emailjs
      .sendForm(
        "service_cw759m4",
        "template_6le7pfi",
        formEmail.current,
        "oKcWcuvwaDlPyOPcP"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("Error sending email:", error.text);
        }
      );
  };

  const errorClass = (error) => {
    return error.length === 0 ? "" : "has-error";
  };

  return (
    <div className="w-full h-max">
      <div className="pt-24 md:pt-24 lg:pt-24 p-6 lg:p-10 px-8 md:px-20 lg:px-44">
        <p className="text-center text-4xl font-bold">Let`&apos;`s Keep in Touch</p>
        <div className="flex flex-col justify-center md:flex-row md:justify-between mt-10 md:space-x-10">
          <div className="flex justify-start">
            <Image
              src={ContactImage}
              className="object-contain animate-move"
              height="400"
              width="400"
              alt="contact-image"
            />
          </div>
          <div className="md:flex md:flex-col md:justify-end md:w-[50%] h-max mt-10 md:mt-0">
            <form ref={formEmail} onSubmit={handleNavigation} method="post">
              <div
                className={`form-group space-y-4 ${errorClass(
                  formErrors.email
                )}`}
              >
                {!emailValid ? (
                  <div className="text-sm sm:text-base panel panel-default flex flex-1 justify-end text-red-500">
                    <FormErrors formErrors={formErrors} />
                  </div>
                ) : (
                  <div className="text-sm sm:text-base panel panel-default flex flex-1 justify-end text-green-500">
                    <FormErrors formErrors={formErrors} />
                  </div>
                )}
                <input
                  type="email"
                  placeholder="email"
                  value={email}
                  name="email"
                  onChange={handleEmailInput}
                  className="w-full p-2 border border-[#bbb] outline-none bg-transparent rounded-md"
                />
                <input
                  type="text"
                  value={name}
                  name="name"
                  onChange={handleNameInput}
                  placeholder="name"
                  className="w-full p-2 border border-[#bbb] outline-none bg-transparent rounded-md"
                />
                <textarea
                  placeholder="message"
                  value={message}
                  name="message"
                  onChange={handleMessageInput}
                  className="border p-2 border-[#bbb] outline-none bg-transparent rounded-md"
                  cols="30"
                  rows="10"
                ></textarea>
                <div className="md:block flex flex-1 justify-center">
                  <button
                    type="submit"
                    value="send"
                    className="px-6 py-1 bg-green-400 outline-none relative bottom-1 rounded-xl text-white"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
