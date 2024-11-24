import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favoritedRecipes")) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleRemoveFavorite = (id) => {
    const updatedFavorites = favorites.filter((recipe) => recipe.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favoritedRecipes", JSON.stringify(updatedFavorites));
  };

  const handleNavigate = (id) => {
    navigate(`/recipe/${id}`);  // Pass the recipe.id to navigate
  };

  return (
    <div className="container mx-auto bg-gradient-to-r from-green-200 to-green-500 p-4">
      <h1 className="text-3xl font-semibold mb-6">Favorite Recipes</h1>

      {favorites.length === 0 ? (
        <p className="text-gray-700">No favorite recipes added yet.</p>
      ) : (
        <div className="space-y-4">
          {favorites.map((recipe) => (
            <div
              key={recipe.id}
              onClick={() => handleNavigate(recipe.id)} // Pass recipe.id here
              className="flex items-center justify-between bg-white shadow-lg rounded-md p-4 cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <h2 className="font-semibold text-lg">{recipe.title}</h2>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();  
                  handleRemoveFavorite(recipe.id);
                }}
                className="text-red-600 hover:text-red-800 font-medium"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
