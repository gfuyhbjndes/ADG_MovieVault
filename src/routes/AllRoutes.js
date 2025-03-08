import { Route, Routes } from "react-router-dom";
import { Details, List, OnSearch } from "../pages";
import { ListG } from "../pages/ListG";

const AllRoutes = ()=> {
  return (
   <>
   <Routes> 
    <Route path="/" element={<List title="MoviesDB - The database for movies!" path="movie/now_playing"/>} />
    <Route path="movies/popular" element={<List title="Popular Movies" path="movie/popular" type = "movie"/>} />
    <Route path="movies/top" element={<List title="Top rated movies" path="movie/top_rated" type = "movie"/>} />
    <Route path="/tv/popular" element={<List title="Popular TV Shows" path="tv/popular" type = "tv"/>} />
    <Route path="/tv/top_rated" element={<List title="Top Rated TV Shows" path="tv/top_rated" type="tv"/>} />

    <Route path="/movies/genre/:genreId" element={<ListG title="Movies by Genre"  type="movie"/>} />
    <Route path="/tv/genre/:genreId" element={<ListG title="TV Shows by Genre"  type="tv"/>} />
    
    <Route path="movie/:id" element={<Details />} />
    <Route path="search" element={<OnSearch path="search/movie"/>}/>
    {/* <Route path="/movie/:id/trailer" element={<Trailer />} /> */}

    {/* <Route path="/tv/popular" element={<List title="Popular TV Shows" path="tv/popular"/>} />
    <Route path="/tv/popular" element={<List title="Popular TV Shows" path="tv/popular"/>} /> */}
    </Routes>
   </>
  )
};

export default AllRoutes
