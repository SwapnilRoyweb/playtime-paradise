import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
// import Modal from "react-modal";

const MyToysRow = ({ myToy, handleDelete }) => {

    const { sellerName, subCategory, price, rating, quantity, description, toyPicture, toyName, _id } = myToy;

    

    return (
        <tr>
            <td>{toyName}</td>
            <td><img src={toyPicture} alt="" className='w-20 h-20' /></td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td><Link to={`/updateToy/${_id}`}><button className='btn btn-primary'>Update</button></Link></td>
            <td><Link><button className='btn btn-error' onClick={() => handleDelete(_id)}>Delete</button></Link></td>
        </tr>
    );
};

export default MyToysRow;