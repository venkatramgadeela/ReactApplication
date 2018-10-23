import React from "react";
import ReactDOM from "react-dom";
import users from "../assets/mock-users";
import { View } from "./view";

export class List extends React.Component {
  constructor() {
    super();
    this.state = users;
    this.val = "";
    this.check = this.check.bind(this);
  }

  check(user) {
    this.val = user;
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.map((user, i) => (
            <li key={i}>
              <div onClick={() => (this.val = user)}>{user.name}</div>
            </li>
          ))}
        </ul>
        <View usere={this.val} />
      </div>
    );
  }
}
