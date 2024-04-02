import React, { useState } from "react";
import axios from "axios";
import "./auth.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post("http://your-api-endpoint.com/login", {
      //   username,
      //   password,
      // });
      alert(`Username: ${username}, Password: ${password}`);
      setMessage(response.data.message);
    } catch (error) {
      // Handle error
      setMessage(error.response.data.error);
    }
  };

  return (
    <div className="main-login">
      <div className="rings">
        <i style={{ "--clr": "#00ff0a" }}></i>
        <i style={{ "--clr": "#ff0057" }}></i>
        <i style={{ "--clr": "#fffd44" }}></i>

        <div className="login">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="inputBx">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <br />
            <div className="inputBx">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br />
            <div className="inputBx">
              <input type="submit" value="Sign in" />
            </div>
            <br />
            <div className="links">
              <a href="#">Forget Password</a>
              <a href="#">Signup</a>
            </div>
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
