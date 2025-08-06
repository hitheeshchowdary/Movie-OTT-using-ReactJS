import React, { Component } from 'react';

export default class Home extends Component {
  constructor() {
    super();
    let userEmailId = localStorage.getItem("emailId");
    this.state = { emailId: userEmailId };
  }

  render() {
    return (
      <div className="container">
        <style>{`
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 80vh;
            background-color: #3d3b3bff;
            color: white;
            border-radius: 10px;
            padding: 40px;
          }

          .welcome {
            color: #00b894;
            font-size: 20px;
            margin-bottom: 20px;
          }

          .home-title {
            font-size: 28px;
            font-weight: 600;
            color:red;
          }
        `}</style>

        <h3 className="welcome">Welcome {this.state.emailId}!</h3>
        <h1 className="home-title">OTT</h1>
      </div>
    );
  }
}
