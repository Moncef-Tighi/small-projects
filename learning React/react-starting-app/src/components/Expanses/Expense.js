import "./Expense.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState} from 'react';

function Expense(props) {
	const [title, setTitle] = useState(props.title);
    const clickHandeler = () => {
		setTitle("Update !");
	};

  	return (
	<Card className="expense-item">
		<ExpenseDate date={props.date} />
		<div className="expense-item__description">
			<h2>{title}</h2>
			<p className="expense-item__price">${props.amount}</p>
		</div>
		<button onClick={clickHandeler}>Change title</button>
	</Card>
  );
}

export default Expense;
