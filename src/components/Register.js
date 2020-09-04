import React from "react";
import axios from "axios";

const Register = () => {
  const [registerEmail, setregisterEmail] = React.useState("");
  const [registerUser, setregisterUser] = React.useState("");
  const [registerPassword, setregisterPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://18.141.178.15:8080/register", {
        email: registerEmail,
        password: registerPassword,
        username: registerUser,
      })
      .then((res) => {
        alert(`${res.data.message}, anda Register Login`);
      })
      .catch((err) => {
        alert(err);
      });
    alert(` Register berhasil ${registerUser}`);
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={registerEmail}
          onChange={(e) => setregisterEmail(e.target.value)}
          type="email"
          placeholder="Email is here..."
        />
        <input
          value={registerUser}
          onChange={(e) => setregisterUser(e.target.value)}
          type="text"
          placeholder="username is here..."
        />
        <input
          value={registerPassword}
          onChange={(e) => setregisterPassword(e.target.value)}
          type="password"
          autoComplete="off"
          placeholder="password is here..."
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Register;
