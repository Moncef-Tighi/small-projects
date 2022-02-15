import classes from './Header.module.css';
import React from 'react';
import image from './meals.jpg';
import HeaderCartButton from './HeaderCartButton';
const Header= function(props) {

    return (
    <>
        <header className={classes.header}>
            <h2>ReactMeals</h2>
            <HeaderCartButton/>
        </header>
        <div className={classes.mainImage}>
            <img src={image} alt=""/>
        </div>
    </>
    )
}

export default Header