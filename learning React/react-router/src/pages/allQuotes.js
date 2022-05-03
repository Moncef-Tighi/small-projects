import QuoteList from '../components/quotes/QuoteList'
import { dummyquotes } from './DUMMY';


const AllQuotes = () => {
    return (
        <QuoteList quotes={dummyquotes}/>
    )
  };
  
  export default AllQuotes;