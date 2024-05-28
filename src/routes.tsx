import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Error from "./pages/error";
import Compare from "./pages/compare";
import Movie from "./pages/movie";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <Home/>,
        errorElement : <Error />
    },
    {
        path:"/compare/:title",
        element: <Compare/>,
        errorElement : <Error />
    },
    {
        path:"/movie",
        element: <Movie/>,
        errorElement : <Error />
    }
]);