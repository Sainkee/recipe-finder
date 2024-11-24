import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=f59077f07dcf41128cfdaf29bfa042c9`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch recipe details");
        }
        const recipeDetails = await response.json();
        setRecipe(recipeDetails);
      } catch (error) {
        setError("Error fetching recipe details");
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-600 text-6xl font-semibold">Loading...</div>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-96 object-cover rounded-md mb-4"
      />
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Ingredients:</h2>
        <ul className="list-disc pl-6">
          {recipe.extendedIngredients?.map((ingredient) => (
            <li key={ingredient.id} className="text-gray-700">
              {ingredient.original}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Instructions:</h2>
        <p className="text-gray-700">{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;
