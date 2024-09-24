import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import UserDirectory from "./components/userDirectory";
import Login from "./components/Login";

function App() {
  const [loggedUsers, setLoggedUsers] = useState("");

  const addLoggedUser = (username) => {
    setLoggedUsers(username); // Updates the state
    localStorage.setItem("loggedUser", username); // Stores the user in localStorage
  };
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login addLoggedUser={addLoggedUser} />} />
          <Route
            path="/UserDirectory"
            element={<UserDirectory loggedUsers={loggedUsers} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
