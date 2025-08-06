import React, { Component } from 'react';

export default class Movies extends Component {
  constructor() {
    super();
    let userEmailId = localStorage.getItem("emailId");

    this.state = {
      wishlist: [],
      emailId: userEmailId,

      movies: [
        {
          movieId: 1,
          title: 'Baahubali',
          about: 'Baahubali is an Indian epic action franchise centered around the fictional kingdom of Mahishmati, following the conflict between two cousins vying for the throne. ',
          imgurl: 'Images/download (2).jpeg'
        },
        {
          movieId: 2,
          title: 'Salaar',
          about: 'Salaar was a huge hit in its native country, becoming the 3rd highest grossing Telugu language film of 2023. Its the story of two childhood friends–Deva and Vardharaja–who grow up doing anything for each other.',
          imgurl: 'Images/download (4).jpeg'
        },
        {
          movieId: 3,
          title: 'RRR',
          about: 'RRR takes place during the pre-Independence era of India, primarily in Delhi during the 1920s, very loosely inspired by real historical events and figures.',
          imgurl: 'Images/download (5).jpeg'
        }
      ]
    };
  }

  addToWishlist = (movie) => {
    const updatedWishlist = [...this.state.wishlist, movie];
    this.setState({ wishlist: updatedWishlist });
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  render() {
    return (
      <div style={{ backgroundColor: '#121212', minHeight: '100vh', padding: '20px' }}>
        <style>
          {`
            .movies-container {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              gap: 20px;
            }

            .movie-card {
              width: 300px;
              height: 420px;
              background-color: #1c1c1c;
              color: white;
              border-radius: 10px;
              box-shadow: 0px 0px 10px #000;
              overflow: hidden;
              transition: transform 0.2s;
            }

            .movie-card img {
              width: 100%;
              height: auto;
              max-height: 200px;
              object-fit: contain;
              border-top-left-radius: 10px;
              border-top-right-radius: 10px;
            }
            

            .movie-card:hover {
              transform: scale(1.03);
            }

            .movie-card img {
              width: 100%;
              height: 200px;
              object-fit: cover;
            }

            .card-body {
              padding: 15px;
              text-align: center;
            }

            .btn-success {
              background-color: #00b894;
              border: none;
              padding: 8px 16px;
              border-radius: 5px;
              color: white;
              cursor: pointer;
            }

            h1, h3 {
              color: white;
              text-align: center;
            }
          `}
        </style>

        <h3>Welcome {this.state.emailId}!</h3>
        <h1>Movie Collection</h1>

        <div className="movies-container">
          {this.state.movies.map((movie) => (
            <div className="movie-card" key={movie.movieId}>
              <img src={movie.imgurl} alt={movie.title} />
              <div className="card-body">
                <h4>{movie.title}</h4>
                <p style={{ fontSize: '13px' }}>{movie.about}</p>
                <button
                  onClick={() => this.addToWishlist(movie)}
                  className="btn-success"
                >
                  Add to Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
