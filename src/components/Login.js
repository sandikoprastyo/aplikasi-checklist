import React from "react";
import axios from "axios";

const Login = () => {
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://18.141.178.15:8080/login", {
        password: password,
        username: username,
      })
      .then((res) => {
        alert(` ${res.data.message}, ${username} anda berhasil Login `);
      })
      .then((response) => {
        axios.get("http://18.141.178.15:8080/checklist").then((response) => {
          console.log(response.data.message);
        });
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          autoComplete="off"
          placeholder="password is here..."
        />
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username is here..."
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Login;
