import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import AllToysRow from './AllToysRow';

const AllToys = () => {

    useTitle('All Toys');

    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('https://playtime-paradise-new.vercel.app/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    // console.log(toys);

    const handleSearch = () => {
       

    }

    return (
        <div className='my-10 mx-10'>
                <h1 className='text-center text-5xl mb-10 bg-purple-300 p-3 rounded-full font-bold block'>All Toys</h1>
            <div className='flex items-center flex-col mb-10'>
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" name='search' id='search' placeholder="Search…" className="input input-bordered text-white"/>
                        <button className="btn btn-square" onClick={handleSearch}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full text-white">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Toy Name</th>
                            <th>Seller Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Qty</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <AllToysRow key={toy._id} toy={toy}></AllToysRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;