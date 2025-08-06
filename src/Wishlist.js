import React, { Component } from 'react';

export default class Wishlist extends Component {
  constructor() {
    super();

    let wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];
    let userEmailId = localStorage.getItem("emailId");

    this.state = {
      emailId: userEmailId,
      movies: wishlistItems
    };
  }

  
  handleRemove = (movieId) => {
    const updatedList = this.state.movies.filter(movie => movie.movieId !== movieId);
    localStorage.setItem("wishlist", JSON.stringify(updatedList));
    this.setState({ movies: updatedList });
  };

  render() {
    const styles = {
      container: {
        padding: '20px',
        fontFamily: 'Arial, sans-serif'
      },
      title: {
        textAlign: 'center',
        color: '#222',
        marginBottom: '30px'
      },
      table: {
        width: '100%',
        borderCollapse: 'collapse'
      },
      th: {
        backgroundColor: '#111',
        color: 'white',
        padding: '10px',
        textAlign: 'center',
        border: '1px solid #ddd'
      },
      td: {
        padding: '10px',
        textAlign: 'center',
        border: '1px solid #ddd',
        verticalAlign: 'middle'
      },
      poster: {
        width: '80px',
        height: '100px',
        objectFit: 'cover',
        borderRadius: '4px'
      },
      button: {
        backgroundColor: '#d9534f',
        color: 'white',
        padding: '5px 10px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      },
      emptyMsg: {
        color: 'red',
        textAlign: 'center',
        marginTop: '50px'
      }
    };

    if (this.state.movies.length > 0) {
      return (
        <div style={styles.container}>
          <h1 style={styles.title}>{this.state.emailId} Wishlist</h1>

          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Movie ID</th>
                <th style={styles.th}>Movie Name</th>
                <th style={styles.th}>Poster</th>
                <th style={styles.th}>Description</th>
                <th style={styles.th}>Action</th>
              </tr>
            </thead>

            <tbody>
              {
                this.state.movies.map((movie, index) => (
                  <tr key={index}>
                    <td style={styles.td}>{movie.movieId}</td>
                    <td style={styles.td}>{movie.title}</td>
                    <td style={styles.td}>
                      <img src={movie.imgurl} alt={movie.title} style={styles.poster} />
                    </td>
                    <td style={{ ...styles.td, textAlign: 'left' }}>{movie.about}</td>
                    <td style={styles.td}>
                      <button
                        style={styles.button}
                        onClick={() => this.handleRemove(movie.movieId)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      );
    } else {
      return (
        <h1 style={styles.emptyMsg}>Wishlist is Empty!!!</h1>
      );
    }
  }
}
