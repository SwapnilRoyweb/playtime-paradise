import React, { useEffect, useState } from 'react';
import AllToysRow from './AllToysRow';

const AllToys = () => {

    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('https://playtime-paradise-new.vercel.app/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    // console.log(toys);

    return (
        <div className='my-10 mx-10'>
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