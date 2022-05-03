import { Fragment } from 'react';
import { useParams, Route, Outlet } from 'react-router-dom';

const QuoteDetail = (props) => {
  const params = useParams();
  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      <p>{params.quoteId}</p>
      <Outlet/>
    </Fragment>
  );
};

export default QuoteDetail;
