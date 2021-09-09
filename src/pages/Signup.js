import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../providers/AuthProvider";

const Signup = (props) => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    email: "",
    password: ""
  });

  const handleFormSubmit = event => {
    console.log('signup compoent', userInfo)
    event.preventDefault();
    props.signup(userInfo);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(currentInfo => ({
      ...currentInfo,
      [name]: value
    }));
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>Firstname:</label>
        <input
          type="text"
          name="firstName"
          value={userInfo.firstName}
          onChange={handleChange}
        />
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={userInfo.password}
          onChange={handleChange}
        />
        <input type="submit" value="Signup" />
      </form>
      <p>
        Already have account?
        <Link to={"/login"}> Login</Link>
      </p>
    </div>
  );
}

export default withAuth(Signup);
