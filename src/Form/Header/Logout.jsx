import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const istoggele = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div>
      <div
        className="Profile-picture"
        style={{ position: "absolute", right: "10px", top: "10px" }}
      >
        <a href="#" onClick={istoggele}>
          <img
            src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp"
            alt="profile image"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
        </a>
        {isOpen && (
          <div
            className="logout-dropdown"
            style={{
              position: "absolute",
              top: "60px",
              right: "10px",
              border: "1px solid #ccc",
              padding: "10px",
            }}
          >
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Logout;
