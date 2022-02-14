import classes from './Header.module.css';
import React from 'react';

const Header= function(props) {

    return (
    <>
        <header className={classes.header}>
            <h2>ReactMeals</h2>
            <button>Your Cart</button>
        </header>
        <div className={classes.mainImage}>
            <img src='./meals.jpg' alt=""></img>
        </div>
    </>
    )
}

export default Header