// import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          {/* <Route exact path="/search">
            <Search />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
