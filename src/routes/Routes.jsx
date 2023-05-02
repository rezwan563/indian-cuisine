import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layout/Main/Main";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import LoginLayout from "../layout/Authentication/LoginLayout";
import RegisterLayout from "../layout/Authentication/RegisterLayout";

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
                path: 'about_us',
                element: <About></About>
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