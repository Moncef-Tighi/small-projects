import './Expense.css'

function Expense() {

    return(
        <div className='expense-item'>
            <div>28/03/2021</div>
            <div className='expense-item__description'>
                <h2>Asssurance</h2>
                <p className='expense-item__price'>$297.3</p>
            </div> 
        </div> 
    )
};

export default Expense; 