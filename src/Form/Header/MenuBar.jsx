import React, { useState } from "react";
import { Link } from "react-router-dom";

function MenuBar() {
  const [isOpen, setIsOpen] = useState(false);

  const istoggele = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={istoggele} style={{ margin: "10px" }}>
        Menu
      </button>
      {isOpen && (
        <div className="menu">
          <ul
            style={{
              listStyle: "none",
              padding: "0",
              margin: "0",
            }}
          >
            <li
              style={{
                textAlign: "left",
                padding: "10px 0",
              }}
            >
              <Link to="/productlist">Product List </Link>
            </li>
            <li style={{ textAlign: "left", padding: "10px 0" }}>
              <Link to="/createuser">Create User</Link>
            </li>
            <li style={{ textAlign: "left", padding: "10px 0" }}>
              <Link to="/userlist">User List</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default MenuBar;
