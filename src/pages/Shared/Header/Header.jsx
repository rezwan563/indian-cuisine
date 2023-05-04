import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { AuthContext } from "../../../provider/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import ActiveRoute from "../ActiveRoute/ActiveRoute";
import LazyLoad from "react-lazy-load";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [hover, setHover] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("class") ? localStorage.getItem("class") : "light"
  );

  useEffect(() => {
    localStorage.setItem("class", theme);
    const localTheme = localStorage.getItem("class", theme);
    document.querySelector("html").setAttribute("class", localTheme);
  }, [theme]);

  const handleLogout = () => {
    logOut().then(() => toast.success("Logout successful"));
  };
  return (
    <nav className="text-center md:flex md:justify-between md:items-center mb-8 md:w-3/4 md:mx-auto md:pt-4">
      <div className="pt-8 md:py-0">
        <div>
          <ActiveRoute to="/">Home</ActiveRoute>
          <ActiveRoute to="/about_us">About</ActiveRoute>
          <ActiveRoute to="/blog">Blog</ActiveRoute>
        </div>
      </div>
      <div className="py-8 md:py-0">
        <Link to="/" className="text-amber-500 text-3xl font-bold">
          Indian Cuisine
        </Link>
      </div>
      <div className="md:flex items-start md:gap-2">
        <div className="flex justify-center">
         {
          user &&  <Link to={`${user && "/user_profile"}`}>
          <LazyLoad height="full">
             
              <img
                className="w-12 h-12 rounded-full border-green-400 border-4"
                src={user ? user.photoURL : "/avatar_img.jpg"}
                alt=""
                title={user?.displayName}
              />
            
          </LazyLoad>
        </Link>
         }
        </div>
        {user ? (
          <div>
            <button
              onClick={handleLogout}
              className="bg-amber-500 p-2 dark:text-white  border"
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <Link to="/login">
              <button className="bg-amber-500 p-2 dark:text-white border">
                Login
              </button>
            </Link>
          </div>
        )}

        <label className="swap swap-rotate p-4 md:p-0">
          <input
            checked={theme === 'light' ? false : true}
            onChange={(e) =>
              e.target.checked ? setTheme("dark") : setTheme("light")
            }
            type="checkbox"
          />

          <svg
            className="swap-on fill-current w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          <svg
            className="swap-off fill-current w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
    </nav>
  );
};

export default Header;
