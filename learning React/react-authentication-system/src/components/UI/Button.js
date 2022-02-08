import styles from "./Boutton.module.css";


const Button= function(props) {
    return(
        <button className={styles.button} type='submit' onClick={props.onClick}>{props.children}</button>
    )
}

export default Button