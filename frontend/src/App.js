import "./App.css";
import Home from "./Components/Login/home";
import Public from "./Components/SawoApis/public";
import Ngo from "./Components/SawoApis/ngo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/public" exact component={Public} />
          <Route path="/ngo" exact component={Ngo} />
          <Route path="/admin" exact component={Ngo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
