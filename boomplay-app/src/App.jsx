import "./App.css";
import React, { useState, useEffect } from "react";

function App() {

    const [results, setResults] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '30a2ea9321msh123dc69e303c412p10130fjsn77335132d8c9',
        'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
      }
    };
    fetch('https://book-finder1.p.rapidapi.com/api/search?series=Wings%20of%20fire&book_type=Fiction&lexile_min=600&lexile_max=800&results_per_page=25&page=55', options)
      .then(response => response.json())
      .then(response => {
        setResults(response.results);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Results:</h2>
      <ul>
        {results.map(result => (
          <li key={result.id}>{result.author_first_names}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;