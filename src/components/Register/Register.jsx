import React from 'react';
import { FaGoogle, FaGithubAlt, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className="mx-10 my-10 bg-purple-100 rounded-3xl p-5 register-bg">
            <div className="hero-content flex-col justify-evenly items-center lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src="https://i.ibb.co/zVDpmsp/12953630-Data-security-27-removebg-preview.png" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-3xl bg-purple-300">
                    <div className="card-body">
                        <form>
                            <h1 className="text-5xl font-bold text-black text-center mb-5">Sign Up now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" name='name' className="input input-bordered text-white" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered text-white" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered text-white" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered text-white" />
                            </div>
                            <div className="form-control mt-5">
                                <button className="btn btn-primary">Sign up</button>
                                <div className='text-center mt-3'>
                                    <p>or Sign up with </p>
                                    <div className='flex gap-3 justify-center mt-3'>
                                        <button className='btn btn-circle'><FaGoogle className='h-6 w-6 text-blue-500' /></button>
                                        <button className='btn btn-circle'><FaGithubAlt className='h-6 w-6' /></button>
                                        <button className='btn btn-circle'><FaLinkedin className='h-6 w-6 text-blue-600' /></button>
                                    </div>
                                </div>
                                <p className='text-center mt-3 text-black'>Already have an Account? Please <Link to='/login' className='text-red-600'>Sign In</Link> </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;