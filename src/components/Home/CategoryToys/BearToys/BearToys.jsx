import React from 'react';
import { Rating } from '@smastrom/react-rating';
import { Link } from 'react-router-dom';

const BearToys = ({bearToy}) => {

    const { sellerName, subCategory, price, rating, quantity, description, toyPicture, toyName, _id } = bearToy;

    return (
        <div className="card w-96 bg-purple-300 shadow-xl">
            <figure><img src={toyPicture} alt="Shoes" className='bg-yellow-100 h-96' /></figure>
            <div className="card-body">
                <h2 className="card-title">{toyName}</h2>
                <p>{description}</p>
                <p>Price: ${price}</p>
                <p>Ratings: <Rating style={{ maxWidth: 150 }} value={5} onChange={rating} /></p>
                <div className="card-actions justify-end">
                    <Link to={`/singleToy/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default BearToys;