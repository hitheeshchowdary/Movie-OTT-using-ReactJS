import React, { Component } from 'react'

export default class Logout extends Component {
    constructor() {
        super();
        localStorage.removeItem("emailId");
        localStorage.clear();
        window.open("login", "_self");
    }
  render() {
    return (
      <div>
      </div>
    )
  }
}
