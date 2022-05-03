import { Routes, Route } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
import Comments from './components/comments/Comments';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllQuotes/>} />
      <Route path="new" element={<NewQuote/>} />
      <Route path="detail/:quoteId" element={<QuoteDetail/>}>
        <Route path="comments" element={<Comments />} />
      </Route>
      <Route path="*" element={<h1>ERROR</h1>} />
    </Routes>
  );
}

export default App;
