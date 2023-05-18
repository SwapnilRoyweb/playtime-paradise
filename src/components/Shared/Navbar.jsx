import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link>All Toys</Link></li>
        <li><Link>My Toys</Link></li>
        <li><Link>Add A Toy</Link></li>
        <li><Link>Blog</Link></li>
    </>
    
    const user = {};

    return (
        <div className="navbar text-black flex justify-between items-center h-10">
            <Link to='/'>
                <img src="https://i.ibb.co/hsMfBj2/1170130-ORVZE20-removebg-preview.png" alt="" className='w-16 h-16' />
                <h1 className='text-3xl font-bold'>Playtime<span className='text-purple-600'>-Paradise</span></h1>
            </Link>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="dropdown-end flex items-center">
                {user ? <button className='btn btn-primary'>Login</button> : <div className="avatar">
                    <div className="w-16 h-16 rounded-full">
                        <img src="https://i.ibb.co/frS7xwZ/1170130-ORVZE20.jpg" title='Name' />
                    </div>
                </div>}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-purple-50 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;