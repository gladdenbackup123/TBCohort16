import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SearchForm from './SearchForm';
import RecipeList from './RecipeList';

function App() {
  const [recipes,setRecipes] = useState([]);
  const [loading,setLoading] = useState(false);

  async function searchRecipes(input){
    setLoading(true);
    const apiKey = 'e4efb4bed94d44949d023e1531c6eb70';
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${input}&apiKey=${apiKey}`);

    const data = await response.json();
    setRecipes(data.results);
    setLoading(false);
  }
  
  return (
    <div className="App">
      <h1>Recipe Finder App</h1>
      
      <SearchForm searchRecipes={searchRecipes}/>
      {loading ? <img src='https://media1.tenor.com/m/MBkg9RscWfMAAAAC/loading-bar.gif'/> : <RecipeList recipes={recipes}/>}
      <br/>
      <img src='https://wallpapers.com/images/featured/chef-pictures-v1bg0imx3zan1ijx.jpg'/>

    </div>
  );
}

export default App;
