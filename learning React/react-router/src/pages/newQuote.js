import QuoteForm from '../components/quotes/QuoteForm.js'

const NewQuote = () => {
    const addQuote= quoteData=>{
        console.log(quoteData);
    }
    return <QuoteForm onAddQuote={addQuote} />
  };
  
  export default NewQuote;