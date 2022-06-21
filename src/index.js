import './css/style.css';
import header from './modules/header.js';
import Movies from './modules/movies.js';

const movies = new Movies();

header();
movies.displayMovies();
