// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);

  // Function to fetch a random joke from the API
  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
      setJoke(`${response.data.setup} - ${response.data.punchline}`);
    } catch (error) {
      setJoke('Oops! Something went wrong. Try again later.');
    }
    setLoading(false);
  };

  // Fetch a joke when the component mounts
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="app-container">
      <h1>Random Joke Generator</h1>
      <div className="joke-box">
        {loading ? <p>Loading...</p> : <p>{joke}</p>}
      </div>
      <button className="fetch-btn" onClick={fetchJoke}>
        Get Another Joke
      </button>
    </div>
  );
};

export default App;
