import React from 'react';

const MovieCard = ({ movie }) => {
  const { title, poster_path, overview } = movie;
  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <div className="card mb-3">
      <img src={posterUrl} alt={title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
