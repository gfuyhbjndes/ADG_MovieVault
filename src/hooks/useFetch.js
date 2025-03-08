import { useEffect, useState } from 'react';

export const useFetch = ( path,query='' )=> {
    const [data,setData] = useState([]);
    const apiKey = "406c3c0ea3f909f49117c1e238a17f76";
    

    useEffect (()=>{
        const base = `https://api.themoviedb.org/3/${path}?api_key=${apiKey}&query=${query}`;
        console.log("Fetching from URL:", base);
        async function fetchMovies() {
            fetch(base)
            .then((res)=>res.json())
            .then((jsonData)=>setData(jsonData.results));
        }
        fetchMovies();
    },[path,query]);
    return { data };
}


