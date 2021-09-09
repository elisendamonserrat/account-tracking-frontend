import React, { useState } from "react";
import { withAuth } from "../providers/AuthProvider";

const Login = (props) => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: ""
  })

  const handleFormSubmit = event => {
    event.preventDefault();
    props.login(userInfo)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(currentInfo => ({
      ...currentInfo,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleFormSubmit}>
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
      <input type="submit" value="Login" />
    </form>
  );
}

export default withAuth(Login);
