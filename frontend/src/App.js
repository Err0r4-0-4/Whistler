import "./App.css";
import Home from "./Components/Login/home";
import Admin_Auth from "./Components/Auth/Admin_Auth/Admin_Auth";
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
          <Route path="/admin/auth" exact component={Admin_Auth} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
