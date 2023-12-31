import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';

const Navbar = () => {

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/allToys'>All Toys</Link></li>
        <li><Link to='/myToys'>My Toys</Link></li>
        <li><Link to='/addToy'>Add A Toy</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
    </>

    const { user, Logout } = useContext(AuthContext);

    const handleLogout = () => {
        Logout()
        .then(result => {
            Swal.fire(
                'Logout!',
                'User Logout Successfully!',
                'success'
              )
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="navbar bg-purple-50 text-black flex justify-between items-center h-10">
            <Link to='/'>
                <img src="https://i.ibb.co/n1rkRV9/windmill.png" alt="" className='w-16 h-16' />
                <h1 className='text-3xl font-bold ml-2'>Playtime<span className='text-purple-600'>-Paradise</span></h1>
            </Link>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="dropdown-end flex items-center">
                {user ? <div className="avatar flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full">
                        <img src={user.photoURL} title={user.displayName} />
                    </div>
                    <button className='btn btn-primary' onClick={handleLogout}>Logout</button>
                </div> : <Link to='/login'><button className='btn btn-primary'>Login</button></Link>}
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