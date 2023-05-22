import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import useTitle from '../../hooks/useTitle';

const SingleToy = () => {

    const toy = useLoaderData();
    // console.log(toy);
    const { sellerName, sellerEmail, subCategory, price, rating, quantity, description, toyPicture, toyName, _id } = toy;

    useTitle(`${toyName}`)

    return (
        <div className='m-10'>
            <div className="bg-purple-100 rounded-3xl p-5">
                <div className="hero-content flex-col items-center justify-evenly lg:flex-row gap-10">
                    <img src={toyPicture} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='flex gap-5'>
                        <div className='bg-purple-300 p-5 rounded-3xl border-y-4 border-red-500'>
                            <h1 className='text-3xl font-bold'>Toy Details:</h1>
                            <ul className='mt-3 text-black'>
                                <li><strong>Name:</strong> {toyName}</li>
                                <li><strong>Sub-Category:</strong> {subCategory}</li>
                                <li><strong>Price:</strong> ${price}</li>
                                <li><strong>Quantity:</strong> {quantity}</li>
                                <li><strong>Ratings:</strong> <Rating style={{ maxWidth: 150 }} value={5} onChange={rating} /></li>
                                <li><strong>Description:</strong> {description}</li>
                            </ul>
                        </div>
                        <div className='bg-purple-300 p-5 rounded-3xl text-center border-x-4 border-red-500'>
                            <h1 className='text-3xl font-bold'>Seller Details:</h1>
                            <ul className='mt-3 text-black'>
                                <li><strong>Name:</strong> {sellerName}</li>
                                <li><strong>Email:</strong> {sellerEmail}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;