import Chart from "../Chart/Chart";

const ExpenseChart = props => {

    const chartData= [
        {label : 'Jan' ,amount : 0},
        {label : 'Fév' ,amount : 0},
        {label : 'Mars' ,amount : 0},
        {label : 'Avril' ,amount : 0},
        {label : 'Mai' ,amount : 0},
        {label : 'Jun' ,amount : 0},
        {label : 'Jui' ,amount : 0},
        {label : 'Aout' ,amount : 0},
        {label : 'Sep' ,amount : 0},
        {label : 'Nov' ,amount : 0},
        {label : 'Oct' ,amount : 0},
        {label : 'Dec' ,amount : 0},
    ]

    for (const expense of props.expenses) { 
        const expenseMonth= expense.date.getMonth();
        chartData[expenseMonth].amount+=expense.amount;
    }

    return <Chart  dataPoint={chartData}/>
}


export default ExpenseChart