import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../api/movies';
import MovieCard from './MovieCard';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('Batman');

  useEffect(() => {
    const getMovies = async () => {
      const movieData = await fetchMovies(query);
      setMovies(movieData);
    };

    getMovies();
  }, [query]);

  return (
    <div className="container">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies"
        className="form-control"
      />
      <div className="row">
        {movies.map((movie) => (
          <div key={movie.id} className="col-12 col-md-4">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
