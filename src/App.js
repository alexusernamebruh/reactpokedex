// import logo from './logo.svg';
import "./App.css";
import { useState, useEffect, useCallback } from "react";

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
  });

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSearch = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
      .then((resp) => resp.json())
      .then((json) => {
        setData([json]);
        setLoading(false);
      })
      .catch(() => {
        setErr(`${input} is not a pokemon`);
      });
  };

  useEffect(()=>{
    if (!input) {
      fetchData();
    }
  })
  return (
    <div className="App">
      <div className="form">
        <input
          type="search"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          onKeyDown={(e)=>{
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="container">
        {data
          ? data.map((v, i) => {
              return (
                <div className="pokemon button">
                  <p>{v.name}</p>
                  <img
                    src={`${spritePrefix}${v.name}.png`}
                    alt="bruh why no loading"
                  />
                </div>
              );
            })
          : null}
      </div>
      {err && <p className="error-message">{err}</p>}
      <div className="pagination">
        <button
          disabled={page === 1 || loading}
          className="button1"
          onClick={() => setPage(page === 1 ? 1 : page - 1)}
        >
          Previous
        </button>
        <button
          disabled={loading}
          classname="button2"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
      <p className="page-number">Page {page}</p>
    </div>
  );
}

export default App;
