import {createBrowserRouter} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Career from "../Pages/Career";

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
              path: "/about",
              element:<About></About>
            },
            {
              path: "/career",
              element:<Career></Career>
            },
          ],
      },

  ])

export default router