import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <nav className='text-center md:flex md:justify-between md:items-center mb-8 md:w-3/4 md:mx-auto md:mt-4'>
            <div className=''>
                <div>
                    <Link className='mr-4' to='/'>Home</Link>
                    <Link className='mr-4' to='/about_us'>About</Link>

                    <Link to='/blog'>Blog</Link>
                </div>

            </div>
            <div>
                <Link to='/' className='text-amber-500 text-3xl font-bold'>Indian Cuisine</Link>
            </div>
            <div className='md:flex '>
                <div className='avatar_img'>
                    <img className='h-10' src="/avatar_img.jpg" alt="" />
                    <span>Abid Rahman</span>
                </div>
                <Link to='/login'><button className='bg-amber-500 p-2 border'>Login</button></Link>
                <button className='bg-amber-500 p-2 border'>Logout</button>
            </div>
        </nav>
    );
};

export default Header;