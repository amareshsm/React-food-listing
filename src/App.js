import React,{useEffect,useState } from 'react';
import './App.css';
import Recipe from './recipes'

const App=()=>{
   const[recipes, setRecipes]=useState([]);
   const[search,setSearch]=useState("");
   const[query,setQuery]=useState('chicken');
   
 useEffect(() => {
    getRecipes();
  }, [query])

const getRecipes = async() =>{
  const response=await fetch(
  `https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&q=${query}&healt=alcohol-free`);
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits)
}

const updateSearch= e=>{
  setSearch(e.target.value);
};

const getSearch=e=>{
  e.preventDefault();
  setQuery(search);
}
  return(
    <div className="App">
   <h2 style={{textAlign:"center",marginTop:"10px"}}>Food Recipe API</h2>
   <form className="search-area" onSubmit={getSearch} className="search-form">
       <input className="search-bar" type="text"  value={search} onChange={updateSearch}/>
       <button   className="search-button" type="submit">Search</button>
    </form> 
    <div className="content">
     {
       recipes.length>0 ?
     recipes.map((recipe,index)=>(      
       <Recipe
        key={index}
       title={recipe.recipe.label}
       calories={recipe.recipe.calories}
       image={recipe.recipe.image}        
       totalWeight={recipe.recipe.totalWeight}
        />
     )) : <div>no results</div>
     }
     </div>
    </div>
  )
}

export default App;
