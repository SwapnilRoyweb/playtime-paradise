import React, { useState } from 'react';
import { useEffect } from 'react';
import GalleryDecoration from './GalleryDecoration';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Gallery = () => {

    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('https://playtime-paradise-new.vercel.app/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    // console.log(toys);



    return (
        <div className='my-10 mx-10 bg-purple-100 p-10 rounded-3xl'>
            <h1 className='text-center text-5xl font-bold bg-purple-300 rounded-full p-3'>Toy Gallery</h1>
            <div className='my-aos-div grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 my-5' data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
            >
                {
                    toys.map(toy => <GalleryDecoration key={toy._id} toy={toy}></GalleryDecoration>)
                }
            </div>
        </div>
    );
};

export default Gallery;