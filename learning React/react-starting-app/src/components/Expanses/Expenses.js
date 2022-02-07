import Expense from "./Expense";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseChart from "./ExpensesChar";

function Expenses(props) {

  const [currentYear, setCurrentYear] = useState('2021');
  const filterChangeHandler= selectedyear => {
    setCurrentYear(selectedyear);
  }
  const filteredArray=props.items.filter( expense=> expense.date.getFullYear()===Number(currentYear) )  

  let items;
  if (filteredArray.length===0) {
    items= <h2 className="expenses-list__fallback">Aucune expense trouvée</h2>
  } else {
    items= filteredArray.map( (expense) => {
        return <li><Expense key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} /></li>
    });
  }
  
  return (
      <Card className="expenses">
          <ExpenseFilter selected={currentYear} onChangeFilter={filterChangeHandler}/>
          <ExpenseChart expenses={filteredArray} />
          <ul>
            {items}
          </ul>
      </Card>
    );
}

export default Expenses