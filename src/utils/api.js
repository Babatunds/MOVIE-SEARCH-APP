
export function getMovieVideos(movieId) {
  return fetchFromTMDb(`/movie/${movieId}/videos`);
}

export function getAnimationMovies(page = 1) {

  return fetchFromTMDb('/discover/movie', { with_genres: 16, page });
}


const API_KEY = '2e28c418c6a2d6dd17961bb0c1930925';
const BASE_URL = 'https://api.themoviedb.org/3';


async function fetchFromTMDb(endpoint, params = {}) {
  const url = new URL(`${BASE_URL}${endpoint}`);
  url.searchParams.append('api_key', API_KEY);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch from TMDb');
  return res.json();
}


export function getTrendingMovies(page = 1) {
  return fetchFromTMDb('/trending/movie/week', { page });
}


export function getTopRatedMovies(page = 1) {
  return fetchFromTMDb('/movie/top_rated', { page });
}


export function getUpcomingMovies(page = 1) {
  return fetchFromTMDb('/movie/upcoming', { page });
}


export function searchMovies(query, page = 1) {
  return fetchFromTMDb('/search/movie', { query, page });
}


export function getMovieDetails(movieId) {
  return fetchFromTMDb(`/movie/${movieId}`);
}


export function getMovieCredits(movieId) {
  return fetchFromTMDb(`/movie/${movieId}/credits`);
}
