import React, { Component } from "react";
/* 1 import axios */
import axios from "axios";

class Login extends Component {
  /* initilisasi state untuk login */
  state = {
    password: "",
    username: "",
  };

  /* function post data login */
  handleSubmitLogin() {
    axios
      .post("http://18.141.178.15:8080/login", {
        password: this.state.password,
        username: this.state.password,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmitLogin}>
          <input type="text" placeholder="password is here..." />
          <input type="text" placeholder="username is here..." />
          <input type="button" value="submit" />
        </form>
      </div>
    );
  }
}

export default Login;
