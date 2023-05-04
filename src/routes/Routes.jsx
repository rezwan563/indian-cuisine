import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layout/Main/Main";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import LoginLayout from "../layout/Authentication/LoginLayout";
import RegisterLayout from "../layout/Authentication/RegisterLayout";
import ChefRecipe from "../pages/ChefRecipe/ChefRecipe/ChefRecipe";
import ChefRecipeLayout from "../layout/ChefRecipeLayout/ChefRecipeLayout";
import PrivateRoute from "../provider/PrivateRoute/PrivateRoute";
import UserProfile from "../pages/UserProfile/UserProfile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'chef_recipe/:id',
                element: <PrivateRoute><ChefRecipeLayout></ChefRecipeLayout></PrivateRoute>,
                loader: ({params}) => fetch(`https://assignment-10-indian-cuisine-server-rezwan563.vercel.app/chefs/${params.id}`)
            },
            {
                path: 'about_us',
                element: <About></About>
            },
            {
                path: 'user_profile',
                element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
            },
            {
                path: 'blog',
                element: <Blog></Blog>,
            },
            {
                path: 'login',
                element: <LoginLayout></LoginLayout>,

            },
            {
                path: 'register',
                element: <RegisterLayout></RegisterLayout>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    }
    
])

export default router