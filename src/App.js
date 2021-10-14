// import logo from './logo.svg';
import "./App.css";

<<<<<<< HEAD
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from "./Pages/Landing";
import DetailsPage from "./Pages/Details";

=======
function App() {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const POKEMONS_PER_PAGE = 10;
  const spritePrefix = "https://img.pokemondb.net/sprites/home/normal/";
  const [input, setInput] = useState("");
  const [err, setErr] = useState(null);

  const fetchData = useCallback(() => {
    setLoading(true);
    setErr(null)
    const offset = (page - 1) * POKEMONS_PER_PAGE;
    fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${POKEMONS_PER_PAGE}&offset=${offset}`
    )
      .then((resp) => resp.json())
      .then((result) => {
        setData(result.results);
        setLoading(false);
      });
  },[page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
>>>>>>> 45e0a0cc5dccb14576db914c830425840c0c9059

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
