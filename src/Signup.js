import React, { Component } from 'react';

export default class Register extends Component {
  constructor() {
    super();
    this.emailId = React.createRef();
    this.password = React.createRef();
  }

  handleSignUp = () => {
    const email = this.emailId.current.value;
    const password = this.password.current.value;

    console.log('Email:', email);
    console.log('Password:', password);

    alert('User Registered Successfully!');
  };

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Sign Up</h2>

        <div style={{ marginBottom: '10px' }}>
          <input
            type="email"
            ref={this.emailId}
            placeholder="Enter Email"
            required
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <input
            type="password"
            ref={this.password}
            placeholder="Enter Password"
            required
          />
        </div>

        <button onClick={this.handleSignUp}>Sign Up</button>
      </div>
    );
  }
}
