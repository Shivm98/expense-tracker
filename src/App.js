import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllExpenses from "./pages/AllExpenses/AllExpenses";
import NewExpense from "./pages/NewExpense/NewExpense";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={AllExpenses} />
        <Route path="/new-expense" component={NewExpense} />
      </Switch>
    </Router>
  );
}

export default App;
