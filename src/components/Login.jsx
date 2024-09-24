import { Card } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Login({ addLoggedUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const validLogin = {
    username: "pawin",
    password: "aksorndee",
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === validLogin.username && password === validLogin.password) {
      console.log("Login as", username, "", password);
      addLoggedUser(username);
      navigate("/UserDirectory", { state: { username, password } });
    } else {
      setErrorMessage("Wrong username or password !!");
    }
  };
  return (
    <>
      <Card className="card">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="error-message">
            <h2 className="error">{errorMessage}</h2>
          </div>
          <label htmlFor="username"> Username:</label>
          <input
            type="text"
            name="username"
            onChange={handleUsername}
            placeholder="Enter your username"
            required
          />
          <br />
          <br />
          <label htmlFor="password"> Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={handlePassword}
            required
          />
          <br />
          <br />
          <button type="submit" className="login">
            Login
          </button>
        </form>
      </Card>
    </>
  );
}

export default Login;
