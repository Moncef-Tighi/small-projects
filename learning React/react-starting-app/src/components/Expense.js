import './Expense.css'

function Expense(props) {
    return(
        <div className='expense-item'>
            <div>{props.date.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <p className='expense-item__price'>${props.amount}</p>
            </div> 
        </div> 
    )
};

export default Expense; 