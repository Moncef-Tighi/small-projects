import Expense from "./Expense";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

function Expenses(props) {

  const [currentYear, setCurrentYear] = useState('2021');
  const filterChangeHandler= selectedyear => {
    setCurrentYear(selectedyear);
  }
  if (props.length===0) return <Card className="expenses"><p>Aucun élément trouvé</p></Card>
  
  return (
    <Card className="expenses">
        <ExpenseFilter selected={currentYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
        {props.items.map( (expense) => {
          if (expense.date.getFullYear()===Number(currentYear)) {
            return <Expense key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
          }
          return ''
        }
        ) }
    </Card>
    );
}

export default Expenses