import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    function NewExpense(expenseData) {
        const addExpense= {
            ...expenseData,
            id: Math.random().toString()
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