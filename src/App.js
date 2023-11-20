import { useState } from "react";

import "./App.css";
import SearchBar from "./Search";
import { SearchResultsList } from "./SearchResultsList";

function App() {
  const [results, setResults] = useState([]);
  const count=0;
  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
    </div>
  );
}

export default App;