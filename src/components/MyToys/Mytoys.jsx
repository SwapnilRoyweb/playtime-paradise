import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../Providers/AuthProvider';
import MyToysRow from './MyToysRow';

const Mytoys = () => {

    useTitle('My Toys')

    const { user } = useContext(AuthContext);

    const [myToys, setMyToys] = useState([]);

    useEffect(() => {
        fetch(`https://playtime-paradise-new.vercel.app/myToys?sellerEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [user])

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://playtime-paradise-new.vercel.app/toys/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your toy has been deleted',
                                'success'
                            )
                            const remaining = myToys.filter(myToy => myToy._id !== id);
                            setMyToys(remaining);
                        }
                    })
            }
        })
    }
    // console.log(myToys);
    return (
        <div className='my-10 mx-10'>
            <h1 className='text-center text-5xl mb-5 bg-purple-300 p-3 rounded-full font-bold'>My Toys</h1>
            <div className='flex justify-end gap-5 mb-5'>
                <button className='btn btn-outline btn-primary'>Price up to 300</button>
                <button className='btn btn-outline btn-primary'>Price down to 300</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full text-white">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Toy Name</th>
                            <th>Toy Picture</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Qty</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(myToy => <MyToysRow key={myToy._id} myToy={myToy} handleDelete={handleDelete}></MyToysRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Mytoys;