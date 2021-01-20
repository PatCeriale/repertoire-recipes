// import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import RecipeList from "./pages/RecipeList/RecipeList";
import Recipe from "./pages/Recipe/Recipe";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route exact path="/recipelist">
            <RecipeList />
          </Route>
          <Route exact path="/recipe">
            <Recipe />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
