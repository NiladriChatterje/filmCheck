import React, { useState, useEffect } from "react";
import DetailBox from './detailBox';
import TemplateCard from "./templateCard";
import SearchIcon from "./search.ico";
import "./App.css";

const API_URL = 'https://www.omdbapi.com/?apikey=42aa9aaa';

const App = () => {
  const [searchTerm, setSearchTerm] = useState("spiderman");
  const [movies, setMovies] = useState([]);
  const [type,setType] = useState('movie');
  const [movieData,setMovieData] = useState({})
  const [ImdbID,setImdbID] = useState('');

  useEffect(() => {
    searchMovies(searchTerm,type);
  }, [type,searchTerm]);
  
  const searchMovies = async (title,type) => {
    const response = await fetch(`${API_URL}&s=${title}&type=${type}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(
    ()=>{
      async function fetchData(){
      const response = await fetch(`https://www.omdbapi.com/?i=${ImdbID}&apikey=42aa9aaa`);
      const data = await response.json();
     
      console.log(data);
      setMovieData(data);
     }
    
     fetchData()}
    ,[ImdbID]);

  return (
    <div 
    >
      <DetailBox className='DetailBox' 
      movieData={movieData} />
    <div className="app">
      <div style={{display:'flex'}}><h2>Film</h2><h1>CHECK</h1></div>
      
      <div className="search">
        <input
          placeholder="Check Movies if available"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {setSearchTerm(document.querySelector('input').value)
                          searchMovies(searchTerm,type);}}
        />
      </div>
      <div
      style={{
        display: 'flex',
        flexDirection: 'column',
         width: '15vw',
         rowGap: '25px',
        justifyContent: 'space-evenly',
        padding: '5px',
        textAlign: 'center',
        fontSize: '1rem',
        fontWeight: '600',
        color:'white'
      }}>
        <span className="category-hover" 
        style={{background: 'rgb(101, 101, 102)',
                      padding: '5px 50px',
                    borderRadius: '80px',
                    display:'flex',
                      justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '1px 2px 10px -5px black',
                    }}
        onClick={(e)=>
          setType('movie')}>Movie</span>
        <span className="category-hover" 
        style={{background: 'rgb(101, 101, 102)',
                      padding: '5px 50px',
                      display:'flex',
                      justifyContent: 'center',
                    borderRadius: '80px',
                    cursor: 'pointer',
                    boxShadow: '1px 2px 10px -5px black',
                    }}
        onClick={(e)=>setType('series')}
        >Series
        </span>
        <span className="category-hover" 
        style={{background: 'rgb(101, 101, 102)',
                      padding: '5px 50px',
                      display:'flex',
                      justifyContent: 'center',
                    borderRadius: '80px',
                    cursor: 'pointer',
                    boxShadow: '1px 2px 10px -5px black',
                    }}
        onClick={(e)=>setType('episode')}>Episode</span>
      </div>
   

      

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <TemplateCard movie={movie}
                setMovieData={setMovieData} setImdbID={setImdbID} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No {type} found</h2>
        </div>
      )}
      
    </div>
    <div style={{
      position:'relative',
      bottom: -200,
      width: '100%',
      padding:'50px',
      background: 'rgb(50,50,50)',
      textAlign: 'center',
    }}>
    <p>Hi! I am Niladri and this is another test purpose</p>
    <p>your ask on movies will be responded with few details</p>
    </div>
    </div>
  );
};
export default App