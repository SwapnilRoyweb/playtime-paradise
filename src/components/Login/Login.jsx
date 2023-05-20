import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { FaGoogle, FaGithubAlt, FaLinkedin } from 'react-icons/fa';

const Login = () => {
    return (
        <div className="mx-10 my-10 bg-purple-100 rounded-3xl p-5 login-bg">
            <div className="hero-content flex-col justify-evenly items-center lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src="https://i.ibb.co/zVDpmsp/12953630-Data-security-27-removebg-preview.png" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-3xl bg-purple-300">
                    <div className="card-body">
                        <form>
                            <h1 className="text-5xl font-bold text-black text-center mb-5">Login now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered text-white" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Password</span>
                                </label>
                                <input type="text" placeholder="password" name='password' className="input input-bordered text-white" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-black">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-3">
                                <button className="btn btn-primary">Login</button>
                                <div className='text-center mt-3'>
                                    <p>or Login with </p>
                                    <div className='flex gap-3 justify-center mt-3'>
                                        <button className='btn btn-circle'><FaGoogle className='h-6 w-6 text-blue-500' /></button>
                                        <button className='btn btn-circle'><FaGithubAlt className='h-6 w-6' /></button>
                                        <button className='btn btn-circle'><FaLinkedin className='h-6 w-6 text-blue-600' /></button>
                                    </div>
                                </div>
                                <p className='text-center mt-3 text-black'>Not have an Account? Please <Link to='/register' className='text-red-600'>Sign Up</Link> </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;