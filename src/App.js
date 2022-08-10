import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: ""
  })
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid]= useState(false);

  const handleFirstNameInputChange = (e) => {
    setValues({...values, firstName: e.target.value})
  }

  const handleLastNameInputChange = (e) => {
    setValues({...values, lastName: e.target.value})
  }

  const handleInputEmailChange = (e) => {
    setValues({...values, email: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true)
  }

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? <div class="success-message">Success! Thank you for registering</div> : null} 
        <input
          onChange={handleFirstNameInputChange}
          value={values.firstName}
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {submitted && !values.firstName ? <span id="first-name-error">Please enter a first name</span> : null } 
        <input          
          onChange={handleLastNameInputChange}
          value={values.lastName}
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && !values.lastName ? <span id="last-name-error">Please enter a last name</span> : null} 
        <input
        onChange={handleInputEmailChange}
          value={values.email}
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {submitted && !values.email ? <span id="email-error">Please enter an email address</span> : null }
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
