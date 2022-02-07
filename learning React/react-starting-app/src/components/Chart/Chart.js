import './Chart.css';
import ChartBar from './ChartBar';

const Chart= function(props) {

    const values= props.dataPoint.map(value=> value.amount);
    const largestExpense=Math.max(...values);

    return (
        <div className='chart'>
            {props.dataPoint.map(data => {
                return <ChartBar key={data.label} amount={data.amount} maxValue={largestExpense} label={data.label}/>
            })}
        </div>
    )
}


export default Chart;