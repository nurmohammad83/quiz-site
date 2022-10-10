import { createBrowserRouter } from "react-router-dom"
import Blog from "../Blog"
import Category from "../Category"
import ErrorPage from "../ErrorPage"
import Home from "../Home"
import Root from "../Root"
import Statistics from "../Statistics"
import { getLoaderData } from "./loader"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        loader: getLoaderData ,
        errorElement:<ErrorPage/>,
           
        children: [
            {
                path: '/',
                
                element: <Home />
            },
            {
                path: '/category',
                element: <Category />
            },
            {
                path: '/statistics',
                element: <Statistics />
            },
            {
                path: '/blog',
                element: <Blog />
            }

        ]
    },
])