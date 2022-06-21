class Movies {
  constructor() {
    this.API_BASE_URL = 'https://api.tvmaze.com/';
    this.movies = [];
  }

  getMovieList = async (key) => {
    let Query = `search/shows?q=${key}`;
    const list = await fetch(`${this.API_BASE_URL}${Query}`).then((response) => response.json());
    this.movies = [...this.movies, ...list];
  }

  displayMovies = async () => {
    await this.getMovieList('action');
    await this.getMovieList('comedy');
    
  }



}

export default Movies;