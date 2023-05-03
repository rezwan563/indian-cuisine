import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { AuthContext } from "../../../provider/AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut().then(() => toast.success("Logout successful"));
  };
  return (
    <nav className="text-center md:flex md:justify-between md:items-center mb-8 md:w-3/4 md:mx-auto md:mt-4">
      <div className="">
        <div>
          <Link className="mr-4" to="/">
            Home
          </Link>
          <Link className="mr-4" to="/about_us">
            About
          </Link>

          <Link to="/blog">Blog</Link>
        </div>
      </div>
      <div>
        <Link to="/" className="text-amber-500 text-3xl font-bold">
          Indian Cuisine
        </Link>
      </div>
      <div className="md:flex ">
        {user && (
          <div className="">
            <img
              className="h-16 w-16 rounded-full border-green-400 border-4"
              src={user.photoURL}
              alt=""
            />
            <span className="bg-slate-200 pt-2">{user.displayName}</span>
          </div>
        )}
        {user ? (
          <button onClick={handleLogout} className="bg-amber-500 p-2  border">
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="bg-amber-500 p-2 border">Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
