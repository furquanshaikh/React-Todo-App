import React, { Component } from "react";
import "./todolist.css";
import ListItem from "./listitem.js";

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      strikethrough: [],
      currentlist: {
        text: "",
        key: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteitem = this.deleteitem.bind(this);
    this.completeitem = this.completeitem.bind(this);
  }

  handleChange(e) {
    this.setState({
      currentlist: {
        text: e.target.value,
        key: Date.now()
      }
    });
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentlist;

    if (newItem.text !== "") {
      const new2Item = [...this.state.items, newItem];
      // console.log(new2Item);
      this.setState({
        items: new2Item,
        currentlist: {
          text: "",
          key: ""
        }
      });
    } else {
      alert("enter text");
    }
  }
  deleteitem(key) {
    const filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: filteredItems
    });
  }

  completeitem(key) {
    // console.log("furquan");
    // Array.prototype.filter()
    const complete = this.state.items.filter(item => item.key === key);
    console.log(complete);
    this.setState({
      strikethrough: complete
    });
  }

  render() {
    return (
      <div className="todolistmain">
        <header>
          <form id="myform" onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="enter text here"
              value={this.state.currentlist.text}
              onChange={this.handleChange}
            />
            <button type="submit">ADD NEW ITEM</button>
          </form>
        </header>
        <ListItem
          items={this.state.items}
          deleteitem={this.deleteitem}
          completeitem={this.completeitem}
          strikethrough={this.strikethrough}
        />
      </div>
    );
  }
}

export default Todolist;
