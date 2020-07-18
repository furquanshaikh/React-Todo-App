import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Todolist from "./component/todolist.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>TO DO LIST</h1>
        <Todolist />
      </div>
    );
  }
}

export default App;
