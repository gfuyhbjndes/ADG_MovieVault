import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import search from "./search.png";

export const Details = () => {
  const params = useParams();
  const [movie, setMovie] = useState([]);
  const [cast, setCast] = useState([]);
  

  const apiKey = "406c3c0ea3f909f49117c1e238a17f76";
  const movieBase = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}`;
  const creditsBase = `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${apiKey}`;

  const image = movie.poster_path 
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}` 
    : search;

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await fetch(movieBase);
        const jsonData = await response.json();
        setMovie(jsonData);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }

    async function fetchCastDetails() {
      try {
        const response = await fetch(creditsBase);
        const jsonData = await response.json();
        setCast(jsonData.cast.slice(0, 10)); // Get the top 10 cast members
      } catch (error) {
        console.error("Error fetching cast details:", error);
      }
    }

    fetchMovieDetails();
    fetchCastDetails();
  }, [params.id]);

  useEffect(() => {
    document.title = `${movie.title}`;
  }, [movie.title]);

  return (
    <main className='container'>
      <h5 className="text-light py-2 border-bottom mb-3">{movie.title}</h5>
      <div className="row">
        <div className="col-md-4">
          <img src={image} className="img-fluid img-thumbnail border-dark" alt={movie.title} loading="lazy"/>
        </div>
        <div className="col-md-8 text-light">
          <h3 className="text-light text-start">{movie.title}</h3>
          <p className="mt-3 text-start">{movie.overview}</p>

          {movie.genres ? (
            <p className="text-start">
              {movie.genres.map((genre) => (
                <span key={genre.id} className="badge badge-pill bg-warning mx-1 text-dark">
                  {genre.name}
                </span>
              ))}
            </p>
          ) : null}

          <p className="mt-2 text-start text-light">
            <i className="bi bi-star-fill text-warning"></i> {movie.vote_average} |  
            <i className="bi bi-people-fill text-success"></i> {movie.vote_count}
          </p>
          
          <div className="text-start mt-3">
            
            <a className="btn btn-warning text-start me-4" target="_blank" rel="noopener noreferrer" href={`https://www.imdb.com/title/${movie.imdb_id}/`}>
              View in IMDB
            </a>
            
            <a
            className="btn btn-danger"
            target="_blank"
            href="/ADG_trailer.mp4"
            
            >
              Play Trailer
            </a>
            


          </div>

          {/*  Display Cast Members */}
          <h5 className="mt-4">Top Cast</h5>
          <div className="d-flex flex-wrap">
            {cast.map((actor) => (
              <div key={actor.id} className="p-2 text-center" style={{ width: "120px" }}>
                <img 
                  src={actor.profile_path ? `https://image.tmdb.org/t/p/w200${actor.profile_path}` : search}
                  className="img-fluid rounded-circle"
                  alt={actor.name}
                  style={{ width: "100px", height: "100px", objectFit: "cover" }}
                  loading="lazy"
                />
                <p className="small mt-2">{actor.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

