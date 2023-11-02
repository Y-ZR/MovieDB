import { useEffect } from 'react';
import './App.css';
import searchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=8cd2ac81';

const dummyMovie = {
  "Title": "Miles Morales Ultimate Spiderman",
  "Year": "2021",
  "imdbID": "tt14311386",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNmMzODkwNDktMTkyMy00MmU5LWE4MGMtYzIzZjdjNmJiZDRiXkEyXkFqcGdeQXVyNDU1NDQ0NzE@._V1_SX300.jpg"
}

const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  }

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <div className="app">
      <h1>MovieDB</h1>

      <div className="search">
        <input 
          placeholder="Search for movies"
          value="Superman"
          onChange={() => {}}
        />
        <img 
          src={searchIcon}
          alt="Search Icon"
          onClick={() => {}}
        />
      </div>

      <div className="container">
        <div className="movie">
          <div>
            <p>{dummyMovie.Year}</p>
          </div>

          <div>
            <img 
              src={dummyMovie.Poster}
              alt={dummyMovie.Title}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;