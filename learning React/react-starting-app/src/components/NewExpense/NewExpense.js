import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    function NewExpense(expenseData) {
        const addExpense= {
            id: Math.random().toString(),
            ...expenseData,
            date: new Date(expenseData["date"]),
        }
        props.onAddExpense(addExpense);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onNewExpense={NewExpense} />
        </div>
    )
};

export default NewExpense;