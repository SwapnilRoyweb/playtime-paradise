import React, { useContext } from 'react';
import { useEffect } from 'react';
import { Rating } from '@smastrom/react-rating';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const MonkeyToys = ({ monkeyToy }) => {
    // console.log(monkeyToy);
    const { sellerName, subCategory, price, rating, quantity, description, toyPicture, toyName, _id } = monkeyToy;

    const {user} = useContext(AuthContext);

    const handleDetails = () => {
        if(!user){
            Swal.fire(
                'Sorry!',
                'You have to Login or Sign up First',
                'error'
            )
        }
    }    

    return (
        <div className="card w-96 bg-purple-300 shadow-xl">
            <figure><img src={toyPicture} alt="Shoes" className='bg-yellow-100' /></figure>
            <div className="card-body">
                <h2 className="card-title">{toyName}</h2>
                <p>{description}</p>
                <p>Price: ${price}</p>
                Ratings: <Rating style={{ maxWidth: 150 }} value={5} onChange={rating} />
                <div className="card-actions justify-end">
                    <Link to={`/singleToy/${_id}`}><button className="btn btn-primary" onClick={handleDetails}>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default MonkeyToys;