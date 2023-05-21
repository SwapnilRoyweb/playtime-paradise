import React from 'react';
import { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';

const AllToysRow = ({ toy }) => {

    const { sellerName, subCategory, price, rating, quantity, description, toyPicture, toyName, _id } = toy;

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
        <tr>
            <td>{toyName}</td>
            <td>{sellerName}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td><Link to={`/singleToy/${_id}`}><button className='btn btn-primary' onClick={handleDetails}>Details</button></Link></td>
        </tr>

    );
};

export default AllToysRow;