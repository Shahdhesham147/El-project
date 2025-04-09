import axios from 'axios';

const API_KEY = 'your_api_key';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};
