import React, {Suspense} from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

// import AllQuotes from "./pages/AllQuotes";
// import NewQuote from "./pages/NewQuote";
// import QuoteDetail from "./pages/QuoteDetail";
// import Comments from './components/comments/Comments';
// import NotFound from "./pages/NotFound";

const AllQuotes = React.lazy(()=> import("./pages/AllQuotes"))
const NewQuote = React.lazy(()=> import( "./pages/NewQuote"))
const QuoteDetail = React.lazy(()=> import("./pages/QuoteDetail"))
const Comments = React.lazy(()=> import('./components/comments/Comments'))
const NotFound = React.lazy(()=> import("./pages/NotFound"))

function App() {

  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner/>}>
        <Routes>
          <Route path="/" element={<AllQuotes/>} />
          <Route path="new" element={<NewQuote/>} />
          <Route path="detail/:quoteId" element={<QuoteDetail/>}>
            <Route path="comments" element={<Comments />} />
          </Route>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
