// import logo from './logo.svg';
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from "./Pages/Landing";


function App() {
 
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}/>

      
      <Route path="/pokemon/:name">
        <div classname="aboutpath">
        <h1>about</h1>
        </div>
      </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
