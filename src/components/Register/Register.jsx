import { updateProfile } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { FaGoogle, FaGithubAlt, FaLinkedin } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';
import './Register.css';

const Register = () => {

    const [error, setError] = useState('');

    const {createUser} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photo.value;
        const password = form.password.value;
        // console.log(name, email, photo, password);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            // console.log(user);
            Swal.fire(
                'Good job!',
                'User Created Successfully!',
                'success'
              )
              updateInformation(user, name, photoURL);
              navigate('/');
              form.reset();
              setError('');
        })
        .catch(error => {
            console.log(error);
            setError(error.message);
        })

    }
    const updateInformation = (user, name, photoURL) => {
        updateProfile(user, {
            displayName: name, photoURL: photoURL
        })
        .then()
        .catch(error => console.log(error))
    }

    return (
        <div className="mx-10 my-10 bg-purple-100 rounded-3xl p-5 register-bg">
            <div className="hero-content flex-col justify-evenly items-center lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src="https://i.ibb.co/zVDpmsp/12953630-Data-security-27-removebg-preview.png" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-3xl bg-purple-300">
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
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
                                <input type="text" placeholder="password" name='password' className="input input-bordered text-white" />
                            </div>
                            <p className='text-red-600 text-center'>{error}</p>
                            <div className="form-control mt-5">
                                <button className="btn btn-primary">Sign up</button>
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