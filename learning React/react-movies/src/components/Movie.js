import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
  return (
      <li className={classes.movie}>
        <div className={classes.image}>
            <img src={props.image}></img>
        </div>
        <div className={classes.aside}>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <h3>{props.releaseDate}</h3>
        </div>
      </li>
  );
};

export default Movie;
