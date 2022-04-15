import './Htitre.css';

function Htitre(props) {
    return (
        <div className={props.color}>
            {props.pageTitle}
        </div>
    )
}

export default Htitre