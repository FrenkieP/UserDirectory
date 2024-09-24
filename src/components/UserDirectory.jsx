import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "react-bootstrap";

function UserDirectory({ loggedUsers }) {
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchUser, setSearchUser] = useState("");

  const navigate = useNavigate();

  const handleUserSelect = (userId) => {
    if (selectedUser === userId) {
      setSelectedUser(null);
    } else {
      setSelectedUser(userId);
    }
  };
  const handleSearch = (e) => {
    setSearchUser(e.target.value);
  };

  const handleLogout = () => {
    navigate("/");
  };

  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      details: "Some more details about John",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "User",
      details: "Some more details about Jane",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      role: "Editor",
      details: "Alice is an experienced editor in the team.",
    },
    {
      id: 4,
      name: "Bob Brown",
      email: "bob@example.com",
      role: "Moderator",
      details: "Bob is responsible for moderating the forums.",
    },
    {
      id: 5,
      name: "Charlie Davis",
      email: "charlie@example.com",
      role: "User",
      details:
        "Charlie is a regular user who frequently participates in discussions.",
    },
  ];
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchUser.toLowerCase())
  );
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          onChange={handleSearch}
          className="search-bar"
          placeholder="Search user.."
        />
      </div>
      <Container>
        <h2>WELCOME ! , {loggedUsers}</h2>
        <div className="userlist-container">
          <ul className="userlist">
            {filteredUsers.map((user) => (
              <li
                key={user.id}
                className={selectedUser === user.id ? "active" : ""}>
                <div onClick={() => handleUserSelect(user.id)}>{user.name}</div>
                <div className="userdetail">
                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p>
                    <strong>Role:</strong> {user.role}
                  </p>
                  <p>
                    <strong>Details:</strong> {user.details}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </Container>
    </>
  );
}

export default UserDirectory;
