import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const Form1: React.FC = () => {
  const [state, handleSubmit] = useForm("xkndknlj");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim() !== "" && name.trim() !== "") {
      handleSubmit(e);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm} method="post">
        <div>
          <input
            name="Email"
            id="email"
            type="email"
            placeholder="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <div>
          <input
            name="Name"
            id="name"
            type="text"
            placeholder="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form1;
