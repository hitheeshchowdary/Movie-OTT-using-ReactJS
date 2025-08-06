import React, { Component } from 'react';

export default class Login extends Component {
  constructor() {
    super();

    this.emailId = React.createRef();
    this.password = React.createRef();

    this.state = {
      users: [
        { userId: 1, name: 'Saketh', emailId: 'saketh@gmail.com', password: '123' },
        { userId: 2, name: 'Navaneeth', emailId: 'navaneeth@gmail.com', password: '123' },
        { userId: 3, name: 'Hitheesh', emailId: 'hitheesh@gmail.com', password: '123' },
        { userId: 4, name: 'Tejsai', emailId: 'tejsai@gmail.com', password: '123' },
        { userId: 5, name: 'Vasavi', emailId: 'vasavi@gmail.com', password: '123' },
        { userId: 6, name: 'Phani', emailId: 'phani@gmail.com', password: '123' }
      ],
      error: '',
    };
  }

  loginSubmit = () => {
    const emailId = this.emailId.current.value.trim();
    const password = this.password.current.value.trim();

    localStorage.setItem("emailId", emailId);

    if (emailId === "admin@ott.com" && password === "admin") {
      alert("Admin login successful");
      return;
    }

    const user = this.state.users.find(
      (u) => u.emailId === emailId && u.password === password
    );

    if (user) {
      alert(`Welcome, ${user.name}`);
    } else {
      this.setState({ error: 'Invalid email or password' });
    }
  };

  render() {
    const styles = {
      container: {
        marginTop: '80px',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '30px',
        width: '400px',
        backgroundColor: '#d5f5deff',
        color: 'black',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(156, 92, 92, 0.5)',
        fontFamily: 'Arial, sans-serif'
      },
      heading: {
        textAlign: 'center',
        marginBottom: '20px',
        color: '#00adb5',
      },
      table: {
        width: '100%',
      },
      label: {
        padding: '10px 0',
      },
      input: {
        width: '100%',
        padding: '8px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        fontSize: '14px',
      },
      button: {
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: '#00adb5',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '16px',
      },
      error: {
        color: 'red',
        marginTop: '15px',
        textAlign: 'center'
      }
    };

    return (
      <div style={styles.container}>
        <h1 style={styles.heading}>Login</h1>
        <table style={styles.table}>
          <tbody>
            <tr>
              <td style={styles.label}>Email</td>
              <td><input type="text" ref={this.emailId} style={styles.input} /></td>
            </tr>
            <tr>
              <td style={styles.label}>Password</td>
              <td><input type="password" ref={this.password} style={styles.input} /></td>
            </tr>
            <tr>
              <td colSpan="2" align="center">
                <button style={styles.button} onClick={this.loginSubmit}>Login</button>
              </td>
            </tr>
          </tbody>
        </table>

        {this.state.error && (
          <p style={styles.error}>{this.state.error}</p>
        )}
      </div>
    );
  }
}
