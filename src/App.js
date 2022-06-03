import { Route, Switch, Redirect } from "react-router-dom";

import AllQoutes from "./components/Pages/AllQoutes";
import QouteDetails from "./components/Pages/QouteDetails";
import NewQuote from "./components/Pages/NewQoute";

import Layout from "./components/layout/Layout";
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQoutes />
        </Route>
        <Route path="/quotes/:quotesId">
          <QouteDetails />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
