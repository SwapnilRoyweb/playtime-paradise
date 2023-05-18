import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="bg-purple-100 my-5 rounded-xl mx-10 banner-bg">
            <div className="hero-content flex-col items-center justify-between mx-10 lg:flex-row-reverse">
                <img src="https://i.ibb.co/C9CxhwW/16793766-144-Z-2106-w033-n003-15-B-p15-15-removebg-preview.png" className="max-w-sm bg-purple-200 rounded-lg shadow-2xl shadow-purple-400" />
                <div className=''>
                    <h1 className="text-5xl font-bold leading-tight">Find Your Best <br /> <span className='text-purple-600'>Toys</span> for your <br />Children!</h1>
                    <p className="py-6">We deliver best of fantastic, hand-piched, age appropriate toys <br /> books and puzzles, straight to your door.</p>
                    <button className="btn btn-primary">Get Started <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    </button>
                    <button className="btn btn-ghost btn-active ml-3">How to order</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;