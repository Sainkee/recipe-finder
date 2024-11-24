

import { createBrowserRouter,RouterProvider } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import LayOut from "./components/LayOut"
import Favorites from "./components/FavoritePage"
import RecipeDetail from "./components/DynamicDetailPage"
export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children:[
        {
          index:true,
          element: <LandingPage />,
        },
        {
          path: "about",
          element: <h1>About</h1>,
        },
        {
          path: "favorites",
          element: <Favorites/>,
        },
        {
          path: "recipe/:id",
          element: <RecipeDetail/>,
        }
      ]
    },
   
    
    {
      path: "*",
      element: <h1>Page Not Found</h1>,
    }
  
  ])

  return (
    <RouterProvider router={router} />
  )
}