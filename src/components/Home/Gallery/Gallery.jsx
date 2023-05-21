import React, { useState } from 'react';
import { useEffect } from 'react';
import GalleryDecoration from './GalleryDecoration';

const Gallery = () => {

    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    // console.log(toys);

    return (
         <div className='my-10 mx-10 bg-purple-100 p-10 rounded-3xl'>
            <h1 className='text-center text-5xl font-bold bg-purple-300 rounded-full p-3'>Toy Gallery</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 my-5'>
                {
                    toys.map(toy => <GalleryDecoration key={toy._id} toy={toy}></GalleryDecoration>)
                }
            </div>
        </div>
    );
};

export default Gallery;