import React from 'react';

const SiteInfo = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center justify-center gap-10 my-10'>
            <div className="stats shadow bg-purple-300 text-black">
                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title text-black">Total Products</div>
                    <div className="stat-value text-primary">25.6K</div>
                    <div className="stat-desc text-black">21% more than last month</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title text-black">Page Views</div>
                    <div className="stat-value text-secondary">2.6M</div>
                    <div className="stat-desc text-black">21% more than last month</div>
                </div>
            </div>
            <div className='flex items-center justify-center bg-purple-300 rounded-full px-5 border border-purple-800 shadow-2xl'>
                <img src="https://i.ibb.co/hsMfBj2/1170130-ORVZE20-removebg-preview.png" alt="" className='rounded-full w-44' />
                <div>
                    <h1 className='text-2xl font-bold'>Our Team</h1>
                    <p>Toyshop deliver best of fantastic books and <br /> puzzles straight to your door.</p>
                </div>
            </div>
        </div>
    );
};

export default SiteInfo;