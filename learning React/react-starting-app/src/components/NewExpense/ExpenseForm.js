import './ExpenseForm.css'

const ExpenseForm= () => {
    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Titre</label>
                    <input type='text'/>
                </div>
                <div className="new-expense__control">
                    <label>amount</label>
                    <input type='number' min='1' step='1' />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31'/>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Ajouter</button>
                </div>

            </div>
        </form>
    )
}

export default ExpenseForm