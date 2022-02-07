import './ExpenseForm.css'
import { useState } from 'react'

const ExpenseForm= (props) => {

    const [inputs, setInput] = useState({
        titre: '',
        amount : '',
        date : ''
    })
    const titleChangeHandeler = (event) => {
        setInput( (previousState) => {
            return { ...previousState, titre:  event.target.value}
        });

    }

    const amountChangeHandeler = (event) => {
        setInput( (previousState) => {
            return { ...previousState, amount:  event.target.value}
        });

    }

    const dateChangeHandeler = (event) => {
        setInput( (previousState) => {
            return { ...previousState, date:  event.target.value}
        });

    }

    const submitHandeler = (event) => {
        event.preventDefault();
        props.onNewExpense(inputs);
        setInput({
            titre: '',
            amount : '',
            date : ''    
        })
    }

    return(
        <form  onSubmit={submitHandeler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Titre</label>
                    <input type='text' value={inputs.titre} onChange={titleChangeHandeler}/>
                </div>
                <div className="new-expense__control">
                    <label>amount</label>
                    <input type='number' min='1' step='1' value={inputs.amount} onChange={amountChangeHandeler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' value={inputs.date} onChange={dateChangeHandeler}/>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Ajouter</button>
                </div>

            </div>
        </form>
    )
}

export default ExpenseForm