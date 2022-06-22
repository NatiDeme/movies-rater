import './css/style.css';
import header from './modules/header.js';
import Movies from './modules/movies.js';
import comments from './modules/comments.js';
import commentCounter from './modules/commentCounter';
// import addComment from './modules/addComment.js';

const movies = new Movies();

header();
comments();
commentCounter(139);
movies.displayMovies();
