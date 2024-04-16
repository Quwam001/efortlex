"use client";
import React from "react";
import { useState, useRef } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import emailjs from "@emailjs/browser";
import Head from "next/head";
import swal from "sweetalert";

const GetStarted: React.FC = () => {
  // const [value, setValue] = useState("");
  const [institute, setInstitute] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [name1, setName1] = useState("");

  const clearForm = () => {
    setInstitute("");
    setEducationLevel("");
    setPhone("");
    setMail("");
    setMessage("");
    setName1("");
  };
  const handleChange = (event: string) => {
    setPhone(event);
    // console.log(event);
  };
  const handleMessage = (e: any) => {
    setMessage(e.target.value);
    console.log(e.target.value);
  };

  const handleName = (e: any) => {
    setName1(e.target.value);
  };
  const submitInstiTute = (e: any) => {
    setInstitute(e.target.value);
    console.log(e.target.value);
  };
  const submitEducationalLevel = (e: any) => {
    setEducationLevel(e.target.value);
    console.log(e.target.value);
  };
  const handleEmail = (e: any) => {
    setMail(e.target.value);
    console.log(e.target.value);
  };
  const form = useRef(null);

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID &&
      form.current &&
      // Ensure value is not null or undefined
      phone &&
      phone.trim() !== "" &&
      institute.trim() !== "" &&
      educationLevel.trim() !== "" &&
      phone.trim() !== "" &&
      phone.trim() !== "" && // This line seems to be duplicated, you might want to remove one
      mail.trim() !== "" &&
      message.trim() !== "" &&
      mail.length > 1 &&
      mail.endsWith(
        "@gmail.com" || "@yahoo.com" || "@hotmail.com" || "outlook.com"
      )
    ) {
      emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );
      swal(
        "Good job!",
        "hello " +
          name1 +
          " Your form has been submitted successfully! we'll get back you",
        "success"
      );

      clearForm();
      //     .then(
      //       (result) => {
      //         alert(result.text);
      //       },
      //       (error) => {
      //         alert(error.text);
      //       }
      //     );
    } else {
      swal(
        "Oops!",
        "Something went wrong. Please try again. please fill up the form none of the input can be empty and make sure you're using a valid email",
        "error"
      );

      console.log("");
    }
  };

  return (
    <div>
      <div className="mt-4 mb-4  px-5 py-5 lg:px-28">
        <center>
          <h1 className="text-blueG text-2xl font-bold">Get In Touch </h1>
        </center>

        <div className="grid md:grid md:grid-cols-2 mt-5">
          <div className="text-white bg-blackBackground px-5 py-12 rounded grid justify-center">
            <div>
              {" "}
              <h1 className="text-2xl text-blueG ">
                Ready to elevate your academic performance?
              </h1>
              <div className="mb-4 mt-4">
                <small className="text-xm ">
                  Contact EduAid Solutions today to learn more about how we can
                  support you in achieving your academic goals.
                </small>
              </div>
              <div>
                <div className="mb-4">
                  <div>
                    <small className="text-blueG text-xm "> Email </small>
                  </div>
                  <small className="text-xm "> info@baftha.com </small>
                </div>

                <div className="mb-4">
                  <div>
                    <small className="text-blueG  text-xm">Phone Number </small>
                  </div>
                  <small className="text-xm ">+2349091337547</small>
                </div>

                <div>
                  <div>
                    <small className="text-blueG  text-xm">Address </small>
                  </div>
                  <small className=" text-xm ">
                    Nigeria Agege, Lagos, 23401 NG
                  </small>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 bg-blue-50 rounded border sm: mt-5 md:mt-0">
            <h2 className="text-message text-1xl font-bold">
              {" "}
              Send us a message
            </h2>
            <small className="text-we text-xm mb-4">
              We look forward to hearing from you. send us an email or fill out
              the contact form and our team will get back to you.
            </small>

            <form ref={form} onSubmit={sendEmail} action="" className="mt-5">
              <div className="mb-4 mt-2">
                <input
                  onChange={handleName}
                  value={name1}
                  type="text"
                  placeholder="Full_name "
                  className="border px-3 py-2 rounded text-xm "
                  name="username"
                />
              </div>
              <div>
                <input
                  type="email"
                  onChange={handleEmail}
                  value={mail}
                  placeholder="Email address "
                  className="mb-4 border px-3 py-2 rounded text-xm"
                  name="e_mail"
                />
              </div>

              <div>
                <PhoneInput
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  value={phone}
                  name="number"
                  defaultCountry="US"
                  className=" mb-4 border px-3 py-2 bg-white"
                />
              </div>

              <div>
                <select
                  onChange={submitEducationalLevel}
                  id="educationLevel"
                  value={educationLevel}
                  name="educationLevel"
                  className="mb-4 border px-3 py-2 rounded text-sm ">
                  <option className="text-sm" value="">
                    Level of education{" "}
                  </option>
                  <option className="text-xm" value="noHighSchool">
                    No High School Diploma
                  </option>
                  <option className="text-sm" value="highSchool">
                    High School Diploma
                  </option>
                  <option className="text-sm" value="someCollege">
                    Some College, No Degree
                  </option>
                  <option className="text-sm" value="associates">
                    Associate Degree
                  </option>
                  <option className="text-sm" value="bachelors">
                    Bachelor&apos;s Degree
                  </option>
                  <option className="text-sm" value="masters">
                    Master&apos;s Degree
                  </option>
                  <option className="text-sm" value="doctorate">
                    Doctorate
                  </option>
                </select>
              </div>
              <div>
                <select
                  onChange={submitInstiTute}
                  value={institute}
                  id="institution"
                  name="institution"
                  className="mb-4 border px-3 py-2 rounded text-sm ">
                  <option value="">Select an institution</option>
                  <option value="harvard">Harvard University</option>
                  <option value="mit">
                    Massachusetts Institute of Technology
                  </option>
                  <option value="stanford">Stanford University</option>
                  <option value="caltech">
                    California Institute of Technology
                  </option>
                  <option value="princeton">Princeton University</option>
                  <option value="yale">Yale University</option>
                  <option value="columbia">Columbia University</option>
                </select>
              </div>

              <div>
                <textarea
                  onChange={handleMessage}
                  value={message}
                  name="message"
                  id=""
                  placeholder="message"
                  rows={10}
                  cols={20}
                  className="mb-4 border px-3 py-2 rounded text-xm "></textarea>
              </div>
              <div>
                <button
                  className="font-light px-4 py-2 rounded font-size-2 text-sm text-white bg-black mt-6"
                  onClick={() => {
                    // handleSUbmit();
                  }}>
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
