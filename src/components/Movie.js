 import { Link } from "react-router-dom";

 export const Movie =({ movie }) =>{
     const image = movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}`:"./logo.svg";
     return (
     <div className="col text-light">
         <div className="card shadow-sm bg-dark text-light" title={movie.title}>
             <img src={image} alt="Movie poster" loading="lazy" className=""/>
             <div className="card-body"> 
                 <h5 className="card-title text-light text-overflow-1">{movie.title}</h5>
                 <p className="card-text text-overflow-2">{movie.overview}</p>
             </div>
             <div className="info-container">
             <Link to={`/movie/${movie.id}`} className="btn btn-outline-success  btn-sm stretched-link">
                 More Info
             </Link>
            
             <span className="rating">
                 <i className="bi bi-star-fill text-warning">
                <span className="text-light"> {movie.vote_average} |{movie.vote_count} ratings</span>
                 </i>
             </span>
             </div>
         </div>
     </div>
 )};


// import React from 'react';
// import { Link } from 'react-router-dom';
// //import './Movie.css'; // Import the CSS file

// export const Movie = ({ movie }) => {
//   const image = movie.poster_path
//     ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
//     : 'https://via.placeholder.com/500x750?text=No+Image';

//   return (
//     <div className="movie-card">
//       <Link to={`/movie/${movie.id}`} className="movie-link">
//         <img src={image} alt={movie.title} className="movie-image" />
//         <div className="movie-info">
//           <h5 className="movie-title">{movie.title}</h5>
//           <p className="movie-rating">⭐ {movie.vote_average}</p>
//         </div>
//       </Link>
//     </div>
//   );
// };
