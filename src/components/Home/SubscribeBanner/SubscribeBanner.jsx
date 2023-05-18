import React from 'react';
import './SubscribeBanner.css';

const SubscribeBanner = () => {
    return (
        <div className="bg-cyan-200 mx-10 rounded-xl p-3 my-10 colorful-bg">
            <div className="hero-content flex-col gap-10 lg:flex-row items-center justify-evenly mx-24">
                <img src="https://i.ibb.co/QM2d6Jb/nyusha-svoboda-z-D-7l-HVk-OYE-unsplash-removebg-preview.png" className="max-w-sm rounded-lg shadow-2xl shadow-black" />
                <div>
                    <h1 className="text-5xl font-bold">Subscribe <span className='text-purple-700'>Playtime-Paradise!</span></h1>
                    <p className="py-6">We deliver best of fantastic, hand-piched age appropriate <br /> toys books and puzzles, straight to your door.</p>
                    <div className="form-control">
                        <div className="input-group">
                            <input type="email" placeholder="Enter your Email" className="input input-bordered bg-white" />
                            <button className="btn btn-primary">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscribeBanner;