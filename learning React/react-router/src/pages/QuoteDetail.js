import { Fragment } from 'react';
import { useParams, Outlet, useNavigate } from 'react-router-dom';
import { dummyquotes } from './DUMMY';
import HighlightedQuote from '../components/quotes/HighlightedQuote.js';

const QuoteDetail = (props) => {
  const params = useParams();
  const navigate= useNavigate();
  console.log(params);
  const quote= dummyquotes.find(quote=>quote.id===params.quoteId);
  if (quote===undefined) navigate('/error');

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author ={quote.author} />

      <Outlet/>
    </Fragment>
  );
};

export default QuoteDetail;
