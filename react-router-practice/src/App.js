import { Route, Switch, Redirect } from 'react-router-dom';


import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';
import Layout from './components/layout/Layout';
import Notfound from './pages/NotFound';

function App() {
  return (
    <Layout>
      <Switch>
        <Redirect path='/' to="/quotes" exact>
        </Redirect>
        <Route path='/quotes' exact>
          <AllQuotes />
        </Route>

        <Route path='/quotes/:quoteId'>
          <QuoteDetail />
        </Route>

        <Route path='/new-quote'>
          <NewQuote />
        </Route>



      </Switch>
      <Route path='*'>
        <Notfound />
      </Route>
    </Layout>
  );
}

export default App;
