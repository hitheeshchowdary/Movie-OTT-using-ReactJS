import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Movies from './Movies';
import Wishlist from './Wishlist';
import Logout from './Logout';

export default class Main extends Component {
  render() {
    return (
      <Router>
        <div>
          
          <style>{`
            .navbar {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              background-color: #222;
              padding: 10px 20px;
              position: relative;
            }
            .nav-link {
              color: white;
              text-decoration: none;
              margin-right: 20px;
              font-weight: 500;
            }
            .nav-link:hover {
              color: #00f0ff;
              text-decoration: underline;
            }
            .nav-link.logout {
              position: absolute;
              right: 20px;
            }
          `}</style>

          <nav className="navbar">
            <NavLink className="nav-link" to="/home">Home</NavLink>
            <NavLink className="nav-link" to="/login">Login</NavLink>
            <NavLink className="nav-link" to="/signup">Signup</NavLink>
            <NavLink className="nav-link" to="/movies">Movies</NavLink>
            <NavLink className="nav-link" to="/wishlist">Wishlist</NavLink>
            <NavLink className="nav-link logout" to="/logout">Logout</NavLink>
          </nav>

          <br />

          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/movies" component={Movies} />
          <Route path="/wishlist" component={Wishlist} />
          <Route path="/logout" component={Logout} />
        </div>
      </Router>
    );
  }
}
