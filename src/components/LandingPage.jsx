import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";

function LandingPage() {
  const [searchItem, setSearchItem] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (debouncedSearch) {
      const fetchRecipes = async () => {
        try {
          const response = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?query=${debouncedSearch}&number=10&apiKey=f59077f07dcf41128cfdaf29bfa042c9`
          );

          const data = await response.json();

          if (data.results && data.results.length>0) {
            setRecipes(data.results);
          } else {
            setRecipes([]);
            setError("Failed to fetch recipes. Please try again later.");
          }
        } catch (err) {
          setError("Failed to fetch recipes. Please try again later.");
          console.error(err);
        }
      };

      fetchRecipes();
    } else {
      setRecipes([]);
    }
  }, [debouncedSearch]);

  const handleSearch = (e) => {
    setSearchItem(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchItem);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchItem]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-200 to-green-500 px-4">
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">
        Welcome to Food Recipe Finder
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-white mb-6 text-center">
        Discover amazing recipes for every occasion!
      </p>

      {/* Search Bar */}
      <div className="w-full max-w-lg mb-6">
        <input
          value={searchItem}
          onChange={handleSearch}
          type="text"
          placeholder="Search for recipes..."
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent shadow-md"
        />
      </div>

      {/* Error Message */}
      {debouncedSearch && error && (
        <p className="text-red-500 text-center mb-4">{error}</p>
      )}

      {/* Recipes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl text-center ">
        {recipes.length > 0 &&
          recipes.map((recipe) => (
            <FoodCard recipe={recipe}  />
            
          ))}

        
      </div>
      {!debouncedSearch && (
          <p className="text-white w-full text-2xl text-center">
            Start searching for recipes!
          </p>
        )}
    </div>
  );
}

export default LandingPage;
