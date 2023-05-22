import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';

const Addtoy = () => {

    const { user } = useContext(AuthContext);

    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;
        const toyName = form.name.value;
        const toyPicture = form.photo.value;
        const sellerName = user?.displayName;
        const sellerEmail = user?.email;
        const subCategory = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const toy = {
            toyName: toyName,
            toyPicture: toyPicture,
            sellerName: sellerName,
            sellerEmail: sellerEmail,
            subCategory: subCategory,
            price: price,
            rating: rating,
            quantity: quantity,
            description: description
        }
        // console.log(toy);
        fetch('https://playtime-paradise-new.vercel.app/toys',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire(
                    'Good Job!',
                    'Toy Added Successfully',
                    'success'
                )
                form.reset();
            }
        })
    }

    return (
        <div className='my-10 mx-10 bg-purple-100 rounded-3xl p-5'>
            <h1 className='text-center text-5xl font-bold bg-purple-300 p-3 rounded-full border border-red-500'>Add <span className='text-purple-600'>Toy</span></h1>
            <form onSubmit={handleAddToy} className='flex flex-col items-center'>
                <div className='flex flex-wrap gap-10 justify-evenly my-10'>
                    <div className="form-control">
                        <label className="input-group">
                            <span className='text-white'>Toy Name</span>
                            <input type="text" placeholder="Toy name" name='name' className="input input-bordered w-96 text-white" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group">
                            <span className='text-white'>Toy Picture</span>
                            <input type="text" placeholder="Toy picture URL" name='photo' className="input input-bordered w-96 text-white" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group">
                            <span className='text-white'>Seller Name</span>
                            <input type="text" placeholder="Seller name" name='sellerName' defaultValue={user?.displayName} className="input input-bordered w-96 text-white" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group">
                            <span className='text-white'>Seller Email</span>
                            <input type="text" placeholder="Seller email" name='email' defaultValue={user?.email} className="input input-bordered w-96 text-white" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group">
                            <span className='text-white'>Sub-Category</span>
                            <input type="text" placeholder="Sub-Category" name='category' className="input input-bordered w-96 text-white" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group">
                            <span className='text-white'>Toy Price</span>
                            <input type="text" placeholder="Price" name='price' className="input input-bordered w-96 text-white" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group">
                            <span className='text-white'>Toy Ratings</span>
                            <input type="text" placeholder="ratings" name='rating' className="input input-bordered w-96 text-white" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group">
                            <span className='text-white'>Available Qty</span>
                            <input type="text" placeholder="Available Quantity" name='quantity' className="input input-bordered w-96 text-white" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group">
                            <span className='text-white'>Detail Description</span>
                            <input type="text" placeholder="Description" name='description' className="input input-bordered w-96 text-white" />
                        </label>
                    </div>
                </div>
                <button className='btn btn-primary'>Add This Toy</button>
            </form>
        </div>
    );
};

export default Addtoy;