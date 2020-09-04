import React from "react";
import "./App.css";
/* 1 axios */
import axios from "axios";
/* 2 import login */
import Login from "./components/Login.js";
/* 3 import react-router dom untuk button login */
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    /* 4 data untuk regis */
    this.state = {
      registerEmail: "",
      registerUser: "",
      registerPassword: "",
    };
  }

  /* 5 function submit untuk regis */
  onSubmitRegister() {
    axios
      .post("http://18.141.178.15:8080/register", {
        email: this.state.registerEmail,
        password: this.state.registerUser,
        username: this.state.registerPassword,
      })
      .then((res) => {
        console.log(res.data);
      });
  }

  /*6  function menambil value dari input */
  handleChangeEmail(event) {
    const value = event.target.value;
    console.log(value);
  }

  render() {
    return (
      <div className="App">
        <h1>Register</h1>
        {/* 7 from input */}
        <form onSubmit={this.onSubmitRegister}>
          <input
            placeholder="email here..."
            onChange={this.handleChangeEmail}
            type="email"
          />
          <br />
          <input
            placeholder="username here..."
            onChange={this.handleChangeusername}
            type="text"
            value={this.state.registerUsername}
          />
          <br />
          <input
            placeholder="passwrod here..."
            onChange={this.handleChangePassword}
            type="password"
            value={this.state.password}
          />
          <br />
          <input type="button" value="Register" />
        </form>

        {/* untuk React-router-dom */}
        <button dataLogin={this.props.login}>
          <Link to={Login}>Login</Link>
        </button>
      </div>
    );
  }
}

export default App;
