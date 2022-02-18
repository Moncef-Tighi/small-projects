import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

const fetchMovies= async function() {
  const request = await fetch("https://swapi.dev/api/films");
  return await request.json();
}


function App() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function loadData() {
    setIsLoading(true);
    const data = await fetchMovies();
    const moviesData = data.results.map( (movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText : movieData.opening_crawl,
        releaseDate : movieData.release_date
      }
    });
    setMovies(moviesData);
    setIsLoading(false);
  } 

 

  return (
    <React.Fragment>
      <section>
        <button onClick={loadData}>Fetch Movies</button>
        {!isLoading && movies.length>0 && <MoviesList movies={movies} />}
        {!isLoading &&  movies.length===0 && <h2>Aucun film n'a été chargé</h2> }
        {isLoading && <p>Chargement des données... </p>}

      <section>
      </section>
      </section>
    </React.Fragment>
  );
}

export default App;
