import React from 'react';
import MovieList from './components/MovieList';
import Weather from './components/Weather';

const App = () => {
  return (
    <div className="App">
      <h1>Movie Database</h1>
      <Weather city="Cairo" />
      <MovieList />
    </div>
  );
};

export default App;
