import './Button.css';
import {useState} from 'react';

function Compteur() {
    const [compteur, incrémenter] = useState(0);
    const augementer = () => incrémenter(compteur+1);
    return (
        <span>
            <div>Nomber de click {compteur}</div>
            <button className='button' onClick={(augementer)}>Incrémenter</button>
        </span>
    )
}

export default Compteur