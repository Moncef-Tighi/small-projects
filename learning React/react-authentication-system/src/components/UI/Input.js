
function Input(props) {

    return (
        <div className={props.className}>
            <label htmlFor={props.type}>{props.type}</label>
            <input
            type={props.type} id={props.type} value={props.value} onChange={props.onChange} onBlur={props.onBlur}
            />
        </div>
    )
}

export default Input