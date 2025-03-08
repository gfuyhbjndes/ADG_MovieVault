import React, { useState, useEffect } from 'react';

export const Trailer = ({ movieId }) => {
  const [trailerKey, setTrailerKey] = useState(null);
  const apiKey = "406c3c0ea3f909f49117c1e238a17f76"; // Replace with your API key

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const trailers = data.results.filter(
          (video) => video.type === 'Trailer' && video.site === 'YouTube'
        );

        if (trailers.length > 0) {
          setTrailerKey(trailers[0].key);
        }
      } catch (error) {
        console.error('Error fetching trailer:', error);
      }
    };

    if (movieId) {
      fetchTrailer();
    }
  }, [movieId, apiKey]);

  if (!trailerKey) {
    return <p>No trailer available.</p>;
  }

  const youtubeUrl = `http://www.youtube.com/embed/${trailerKey}`;

  return (
    <iframe
      width="560"
      height="315"
      src={youtubeUrl}
      title="Movie Trailer"
      
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};


