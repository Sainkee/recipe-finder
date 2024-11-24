import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 

export default function FoodCard({ recipe }) {
  const [isFavorited, setIsFavorited] = useState(false);

  const navigate = useNavigate(); 

  useEffect(() => {
    const favoritedRecipes = JSON.parse(localStorage.getItem("favoritedRecipes")) || [];
    if (favoritedRecipes.find(item => item.id === recipe.id)) {
      setIsFavorited(true);
    }
  }, [recipe.id]);

  const toggleFavorite = () => {
    const favoritedRecipes = JSON.parse(localStorage.getItem("favoritedRecipes")) || [];

    if (isFavorited) {
      // Remove from localStorage if already favorited
      const updatedFavorites = favoritedRecipes.filter(item => item.id !== recipe.id);
      localStorage.setItem("favoritedRecipes", JSON.stringify(updatedFavorites));
    } else {
      // Add to localStorage if not favorited
      favoritedRecipes.push(recipe);
      localStorage.setItem("favoritedRecipes", JSON.stringify(favoritedRecipes));
    }

    // Update the state after modifying localStorage
    setIsFavorited(!isFavorited);
  };

  const handleNavigate = () => {
    navigate(`/recipe/${recipe.id}`); 
  };

  return (
    <div
      onClick={handleNavigate}
      key={recipe.id}
      className="relative border border-gray-200 rounded-md shadow-lg bg-black my-2 overflow-hidden w-full max-w-xs mx-auto cursor-pointer"
    >
      {/* Background Image */}
      {recipe.image && (
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-48 object-cover absolute inset-0"
        />
      )}

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-700/10 to-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 p-4 text-white flex flex-col justify-between h-full">
        <h2 className="text-xl mt-2 font-semibold mb-2">{recipe.title}</h2>

        {/* Favorite Icon */}
        <button
          onClick={(e) => {
            e.stopPropagation();  // Prevent triggering the card navigation on icon click
            toggleFavorite();
          }}
          className="absolute right-0 top-0 p-2 text-white text-2xl"
        >
          {isFavorited ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart className="text-gray-300 hover:text-red-500" />
          )}
        </button>

        <a
          href={`https://spoonacular.com/recipes/${recipe.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:text-green-500 underline self-start"
        >
          Learn more
        </a>
      </div>
    </div>
  );
}
