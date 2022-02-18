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
  async function LoadData() {
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


  const dummyMovies = [
    {
      id: 1,
      title: 'Some Dummy Movie',
      openingText: 'This is the opening text of the movie',
      releaseDate: '2021-05-18',
    },
    {
      id: 2,
      title: 'Some Dummy Movie 2',
      openingText: 'This is the second opening text of the movie',
      releaseDate: '2021-05-19',
    },
  ];

  return (
    <React.Fragment>
      <section>
        <button>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={dummyMovies} />
      </section>
    </React.Fragment>
  );
}

export default App;
