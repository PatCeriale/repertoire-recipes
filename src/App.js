// import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import RecipeList from "./pages/RecipeList/RecipeList";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route exact path="/recipelist">
            <RecipeList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
