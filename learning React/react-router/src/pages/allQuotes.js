import QuoteList from '../components/quotes/QuoteList'

const dummyquotes = [
    {id: "1", author: 'aubgiube', text : 'oinoibiugbae'},
    {id: "1", author: 'htt', text : 'enhe nethdgbet eth'},
    {id: "1", author: ' zrz zgz', text : ' ethtujryjyilk  grhryn  trhrdf  deth'},
    {id: "1", author: 'aubgzrgzrgzgiube', text : 'oinoibiugbae'},
    {id: "1", author: 'r z zbgiube', text : 'ez zgfz zfvzrbz z zr'},
    {id: "1", author: 'poitnhoropn', text : 'zrgzrgzdcv sgbgregr'},
    {id: "1", author: 'gzrg', text : 'gzrgezrgzrgzgzr'},
    {id: "1", author: 'pàblo', text : 'gzrgz'}
]


const AllQuotes = () => {
    return (
        <QuoteList quotes={dummyquotes}/>
    )
  };
  
  export default AllQuotes;