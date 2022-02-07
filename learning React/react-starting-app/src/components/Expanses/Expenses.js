import Expense from "./Expense";
import './Expenses.css';
import Card from "../UI/Card";



function Expenses(props) {
    return (
    <Card className="expenses">
        {props.items.map( (expense) => {
          return <Expense title={expense.title} amount={expense.amount} date={expense.date} />
        }
        )}
    </Card>
    );
}

export default Expenses