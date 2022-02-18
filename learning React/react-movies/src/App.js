import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

const fetchMovies= async function() {
  const request = await fetch("https://react-movies-33435-default-rtdb.europe-west1.firebasedatabase.app/movies.json");
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
      const moviesData = [];
      for (const key in data) {
        moviesData.push({
          id : key,
          title : data[key].title,
          openingText : data[key].openingText,
          releaseDate : data[key].releaseDate
        })
      }
      // const moviesData = data.results.map( (movieData) => {
      //   return {
      //     id: movieData.name,
      //     title: movieData.title,
      //     openingText : movieData.openingText,
      //     releaseDate : movieData.releaseDate
      //   }
      // });
      setMovies(moviesData);
      setIsLoading(false);
    } catch(e) {
      setError(e);
    }
  } 

  async function addMovieHandler(movie) {
      const request = await fetch("https://react-movies-33435-default-rtdb.europe-west1.firebasedatabase.app/movies.json", {
        method: 'POST',
        body : JSON.stringify(movie),
        headers: {
          'Content-Type' : 'application/json'
        }
      })       
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
        <AddMovie onAddMovie={addMovieHandler}/>
      </section>
      <section>
        <button onClick={loadData}>Afficher les films</button>
      </section>
      <section>
        {page}
      </section>
    </React.Fragment>
  );
}

export default App;
