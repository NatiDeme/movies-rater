import './css/style.css';
import header from './modules/header.js';
import Movies from './modules/movies.js';
import comments from './modules/comments.js';

const movies = new Movies();

header();
comments();
movies.displayMovies();
