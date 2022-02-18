import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

const fetchMovies= async function() {
  const request = await fetch("https://swapi.dev/api/films");
  if (!request.ok) throw new Error(request.status);
  return await request.json();
}


function App() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function loadData() {
    setIsLoading(true);
    setError(null);
    try {
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
    } catch(e) {
      setError(e);
    }
  } 

  let page = <h2>Aucun film n'a été chargé</h2>
  if (movies.length>0) {
    page= <MoviesList movies={movies} />
  }
  if (isLoading) { 
    page = <p>Chargement des données... </p>
  }
  if (error) {
    page=<p>Une erreur a été rencontrée...</p>
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={loadData}>Fetch Movies</button>
      </section>
      <section>
        {page}
      </section>
    </React.Fragment>
  );
}

export default App;
