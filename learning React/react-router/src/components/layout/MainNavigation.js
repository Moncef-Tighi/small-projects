import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';
const MainNavigation =() => {

    return (
        <header className={classes.header}>
            <div className={classes.logo}>Quotes API</div>
                <nav className={classes.nav}>
                    <ul>
                        <li><NavLink to='/' className={({isActive})=>  isActive? classes.active : ""}>Tout les quotes</NavLink></li>
                        <li><NavLink to='/new' className={({isActive})=> isActive? classes.active : ""}>Nouveau quote</NavLink></li>
                    </ul>
                </nav>
        </header>
    )

}

export default MainNavigation