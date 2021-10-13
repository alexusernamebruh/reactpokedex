// import logo from './logo.svg';
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from "./Pages/Landing";
import DetailsPage from "./Pages/Details";


function App() {
 
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}/>

      
      <Route path="/pokemon/:name" component={DetailsPage} >
      </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
