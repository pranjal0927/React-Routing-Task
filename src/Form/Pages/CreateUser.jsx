import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../Header/Dashboard";

function CreateUser() {
  const [userdetails, setUserdetails] = useState({
    username: "",
    email: "",
    phonenumber: "",
    gender: "",
    address: "",
  });

  const navigate = useNavigate();

  const userDataHandle = (event) => {
    const { name, value } = event.target;
    setUserdetails({ ...userdetails, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (userdetails.username.length < 4) {
      alert("username must be more than 4 character  ");
    }

    const phoneregex = /^[0-9]{10}$/;

    if (!phoneregex.test(userdetails.phonenumber)) {
      alert("phonenumber is less than 10 digits");
    }

    if (
      !userdetails.username ||
      !userdetails.email ||
      !userdetails.phonenumber ||
      !userdetails.gender ||
      !userdetails.address
    ) {
      alert("please enter details");
    } else {
      localStorage.setItem("userData", JSON.stringify(userdetails));
      navigate("/userlist");
    }
  };
  const cancelHandler = () => {
    navigate("/dashboard");
  };
  return (
    <div>
      <Dashboard />
      <h1 style={{ textAlign: "center" }}>New User</h1>
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
        <input
          type="text"
          name="username"
          value={userdetails.username}
          onChange={userDataHandle}
          placeholder="enter username"
        />
        <input
          type="text"
          name="email"
          value={userdetails.email}
          onChange={userDataHandle}
          placeholder="enter email"
        />
        <input
          type="text"
          name="phonenumber"
          value={userdetails.phonenumber}
          onChange={userDataHandle}
          placeholder="enter phone number"
        />
        <div>
          <label>male: </label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={userdetails.gender == "male"}
            onChange={userDataHandle}
            placeholder="enter gender"
          />
          <label>female:</label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={userdetails.gender == "female"}
            onChange={userDataHandle}
            placeholder="enter email"
          />
        </div>
        <textarea
          name="address"
          value={userdetails.address}
          onChange={userDataHandle}
          placeholder="enter address"
          maxLength={20}
        />
        <div style={{ gap: "10px" }}>
          <button onClick={submitHandler}>submit</button>
          <button onClick={cancelHandler}>cancel</button>
        </div>
      </div>
    </div>
  );
}

export default CreateUser;
