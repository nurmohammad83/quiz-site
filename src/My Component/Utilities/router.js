import { createBrowserRouter } from "react-router-dom"
import Blog from "../Blog"
import Category from "../Category"
import ErrorPage from "../ErrorPage"
import Home from "../Home"
import Root from "../Root"
import Statistics from "../Statistics"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement:<ErrorPage/>,
        loader:     
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