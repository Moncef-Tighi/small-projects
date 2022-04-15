import './Header.css';
import Htitre from './Htitre';
import Logo from './Logo';

function Header() {
    return (
        <nav className='header'>
            <Logo/>
            <Htitre/>
        </nav>
    )
}

export default Header