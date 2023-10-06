import {createBrowserRouter} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Career from "../Pages/Career";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DetailsNews from "../Pages/NewsPages/DetailsNews";
import PriveteRoute from "./PriveteRoute";

  const router = createBrowserRouter([
       {
        path: "/",
        element: <Root></Root>,
        children: [
            {
              path: "/",
              element:<Home></Home>
            },
            {
              path: "/news/:id",
              element : <PriveteRoute><DetailsNews></DetailsNews></PriveteRoute>
            },
            {
              path: "/about",
              element:<About></About>
            },
            {
              path: "/career",
              element:<Career></Career>
            },
            {
              path: "/login",
              element:<Login></Login>
            },
            {
              path: "/register",
              element:<Register></Register>
            },
          ],
      },

  ])

export default router