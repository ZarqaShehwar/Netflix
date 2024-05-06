import  axios  from "axios";

export const ApiKey = 'bad8a8b102fd96cc7a5280028b128236';
export const TMDB_url='https://api.themoviedb.org/3';

// Api for Generes Data

async function fetchData() {
    try {
      const response = await axios.get(`${TMDB_url}/genre/movie/list?api_key=${ApiKey}`);
      return response ;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
 
  const createArrayFromRawData = (results, moviesArray, genres) => {
    results.forEach((movie) => {
      const movieGenres = [];
      movie.genre_ids.forEach((genre) => {
        const name = genres.find(({ id }) => id === genre);
        if (name) movieGenres.push(name.name);
      });
      if (movie.backdrop_path)
        moviesArray.push({
          id: movie.id,
          name: movie?.original_name ? movie.original_name : movie.original_title,
          image: movie.backdrop_path,
          genres: movieGenres.slice(0, 3),
        });
        
    });

  };
  const fetchMovieData = async ( genres, paging = false, type = 'all') => {
    const api = `${TMDB_url}/trending/${type}/week?api_key=${ApiKey}`;
    const moviesArray = [];
    for (let i = 1; moviesArray.length < 60 && i < 10; i++) {
      const { data: { results } } = await axios.get(`${api}${paging ? `&page=${i}` : ""}`);
      console.log("results", results);
      createArrayFromRawData(results, moviesArray, genres);
    }
    return moviesArray;
  };
  
    
  

  // Call the function
 export {fetchData,fetchMovieData};
  
