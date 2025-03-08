 import React, { useEffect, useState } from 'react';
 import { Movie } from '../components/Movie';

 import { useFetch } from '../hooks/useFetch';
 import "./List.css";

 export const List = ({ title, path, type }) => {
   const [selectedGenre, setSelectedGenre] = useState(""); // Track selected genre
   useEffect(() => {
     setSelectedGenre(""); 
   }, [path]);

   // Construct query params correctly
 

   // Fetch data with updated query
   const { data: items } = useFetch(
     path || "discover/movie", // Default to movies if no path is provided
     selectedGenre ? `with_genres=${selectedGenre}` : ""
   );
  
  


   useEffect(() => {
     document.title = title;
   }, [title]);

  

   return (
     <div className='list-container'>
       <main className="list-main">
         {title === "MovieVault - The database for movies!" && (
           <div>
             <h3 className='list-welcome'>Welcome to MovieVault</h3>
           </div>
         )}

         <h5 className="list-title">{title}</h5>



         <div className="list-grid">
           {items.map((item) => (
             <Movie key={item.id} movie={item} type={type} />
           ))}
         </div>
       </main>
     </div>
   );
 };








