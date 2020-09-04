import React from "react";
import "./App.css";
import Routers from "./components/router";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      register: {
        registerEmail: "",
        registerUser: "",
        registerPassword: "",
      },
    };
  }

  render() {
    return (
      <div className="App">
        <Routers />
      </div>
    );
  }
}

export default App;
