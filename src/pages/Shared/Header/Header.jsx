import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { AuthContext } from "../../../provider/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import ActiveRoute from "../ActiveRoute/ActiveRoute";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [hover, setHover] = useState(false);

  const handleLogout = () => {
    logOut().then(() => toast.success("Logout successful"));
  };
  return (
    <nav className="text-center md:flex md:justify-between md:items-center mb-8 md:w-3/4 md:mx-auto md:mt-4">
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
          <img
            className="w-12 h-12 rounded-full border-green-400 border-4"
            src={user ? user.photoURL : "/avatar_img.jpg"}
            alt=""
            title={user?.displayName}
          />
        </div>
        {user ? (
          <div>
            <button onClick={handleLogout} className="bg-amber-500 p-2  border">
              Logout
            </button>
          </div>
        ) : (
          <div>
            <Link to="/login">
              <button className="bg-amber-500 p-2 border">Login</button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
