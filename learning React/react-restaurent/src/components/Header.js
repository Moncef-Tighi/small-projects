import classes from 'Header.module.css';

const Header= function(props) {

    return (
    <>
        <header className={classes.header}>
            <h2>ReactMeals</h2>
            <button>Your Cart</button>
        </header>
        <div className={classes.main-image}>
            <img src='meals.jpg'></img>
        </div>
    </>
    )
}

export default Header