import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../Header/Dashboard";

function UserList() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate;

  useEffect(() => {
    try {
      const data = localStorage.getItem("userData");
      if (data) {
        setUserData(JSON.parse(data));
      } else {
        setError("something went wrong in fetching data ");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  const cancelhandler = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <Dashboard />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h1>User Details</h1>
        <button onClick={cancelhandler}>Cancel</button>
      </div>
      <div className="container">
        <div className="card">
          {userData ? (
            <div
              className="card-body"
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                justifyContent: "space-evenly",
              }}
            >
              <p>{userData.username}</p>
              <p>{userData.email}</p>
              <p>{userData.phonenumber}</p>
              <p>{userData.gender}</p>
              <p>{userData.password}</p>
              <button>edit</button>
            </div>
          ) : (
            <div>
              <p>No record found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserList;
