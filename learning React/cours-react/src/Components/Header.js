import './Header.css';
import Htitre from './Htitre';
import Logo from './Logo';

function Header(props) {
    const color = 'red';
    return (
        <nav className='header'>
            <Logo/>
            <Htitre pageTitle={props.pageTitle} color={color}/>
        </nav>
    )
}

export default Header