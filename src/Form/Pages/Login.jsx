import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [loginDetails, SetLoginDetails] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const loginHandler = (e) => {
    const { name, value } = e.target;
    SetLoginDetails({ ...loginDetails, [name]: value });
  };

  const submitHandler = (e) => {
    if (!loginDetails.username || !loginDetails.password) {
      alert("enter details");
    } else {
      alert("login successfull");
      navigate("/dashboard");
    }
  };

  const cancelHandler = () => {
    SetLoginDetails({
      username: "",
      password: "",
    });
  };
  return (
    <div>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Login Page</h1>
        <input
          type="text"
          value={loginDetails.username}
          name="username"
          onChange={loginHandler}
          placeholder="enter username"
          required
        />
        <input
          type="text"
          value={loginDetails.password}
          name="password"
          onChange={loginHandler}
          placeholder="enter password"
          required
        />
        <div>
          <button onClick={submitHandler}>submit</button>
          <button onClick={cancelHandler}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
