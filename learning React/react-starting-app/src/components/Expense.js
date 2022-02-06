import './Expense.css'
import ExpenseDate from './ExpenseDate';

function Expense(props) {
    return(
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <p className='expense-item__price'>${props.amount}</p>
            </div> 
        </div> 
    )
};

export default Expense; 