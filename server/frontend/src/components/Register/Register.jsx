import React, { useState } from "react";
import "./Register.css";
import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import close_icon from "../assets/close.png";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const gohome = () => {
    window.location.href = window.location.origin;
  };

  const register = async (e) => {
    e.preventDefault();

    if (!userName || !firstName || !lastName || !email || !password) {
      setErrorMessage("Please fill in all 5 required fields.");
      return;
    }

    const register_url = window.location.origin + "/djangoapp/register";

    try {
      const res = await fetch(register_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: userName,
          password: password,
          firstName: firstName,
          lastName: lastName,
          email: email,
        }),
      });

      const json = await res.json();
      if (json.status === "Authenticated") {
        sessionStorage.setItem("username", json.userName);
        window.location.href = window.location.origin;
      } else if (json.error === "Already Registered") {
        setErrorMessage("The username already exists. Please choose another username.");
      } else if (json.error) {
        setErrorMessage(json.error);
      } else {
        setErrorMessage("Registration failed. Please check your information and try again.");
      }
    } catch (err) {
      setErrorMessage("Network error occurred during registration.");
    }
  };

  return (
    <div className="register_container">
      <div className="header" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <span className="text" style={{ fontSize: "2rem", fontWeight: "bold" }}>Sign Up</span>
        <a href="/" onClick={() => gohome()} style={{ cursor: "pointer" }}>
          <img style={{ width: "1cm" }} src={close_icon} alt="Close" />
        </a>
      </div>
      <hr style={{ color: "white", margin: "0 10px 15px 10px" }} />

      {errorMessage && (
        <div style={{ color: "red", backgroundColor: "#ffe6e6", padding: "10px", margin: "10px 20px", borderRadius: "5px", textAlign: "center" }}>
          {errorMessage}
        </div>
      )}

      <form onSubmit={register}>
        <div className="inputs">
          <div className="input">
            <img src={user_icon} className="img_icon" alt="Username" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="input_field"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>

          <div className="input">
            <img src={user_icon} className="img_icon" alt="First Name" />
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              className="input_field"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div className="input">
            <img src={user_icon} className="img_icon" alt="Last Name" />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              className="input_field"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <div className="input">
            <img src={email_icon} className="img_icon" alt="Email" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input_field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input">
            <img src={password_icon} className="img_icon" alt="Password" />
            <input
              name="psw"
              type="password"
              placeholder="Password"
              className="input_field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="submit_panel">
          <input className="submit" type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
};

export default Register;

