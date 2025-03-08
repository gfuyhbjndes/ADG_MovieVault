import React, { useEffect, useState } from "react";
import { Movie } from "../components/Movie";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export const ListG = ({ title, type }) => {
  const { genreId } = useParams(); // Get genre ID from URL
  const [selectedGenre, setSelectedGenre] = useState(genreId || ""); // Default to URL genre
  const navigate = useNavigate();

  // Ensure state updates when URL changes
  useEffect(() => {
    setSelectedGenre(genreId || ""); 
  }, [genreId]);

  // Fetch movies/shows based on genre
  const { data: items } = useFetch(
    `discover/${type}`,
    selectedGenre ? `with_genres=${selectedGenre}` : null // Prevent empty queries
  );

  useEffect(() => {
    document.title = title;
  }, [title]);

  // Handle genre change
  const handleGenreChange = (e) => {
    const newGenre = e.target.value;
    setSelectedGenre(newGenre);
    navigate(`/${type}/genre/${newGenre}`); // Update URL
  };

  return (
    <div>
      <main className="container">
        <h5 className="text-black py-2 border-bottom">{title}</h5>

        {/* Genre Filter Dropdown */}
        <select 
          onChange={handleGenreChange} 
          value={selectedGenre} 
          className="form-select my-3"
        >
          <option value="">All Genres</option>
          <option value="28">Action</option>
          <option value="35">Comedy</option>
          <option value="18">Drama</option>
          <option value="878">Sci-Fi</option>
          <option value="27">Horror</option>
          
        </select>

        
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2">
  {Array.isArray(items) && items.length > 0 ? (
    items.map((item) => <Movie key={item.id} movie={item} type={type} />)
  ) : (
    <p>No movies found for this genre.</p>
  )}
</div>

      </main>
    </div>
  );
};
