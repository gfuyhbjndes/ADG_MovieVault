import React, { useEffect } from 'react'
import { Movie } from '../components/Movie';
import { useSearchParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

export const OnSearch = ({ path })=> {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const { data : movies } = useFetch(path,query);
  useEffect(()=>{
    document.title = `Search results for: ${query}`;
  });

  return <main className='container'>
    <h4 className='text-light py-2 border-bottom'>
      {movies.length === 0?`No results for "${query}"`:`Search results for ${query}`}
    </h4>
    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2'>
      {movies.map((movie)=>{
        return <Movie apiKey={movie.id} movie={movie}/>;
      })}
      </div>
  </main>;
}


