import React from 'react';

const GalleryDecoration = ({toy}) => {
    
    // console.log(toy);

    return (
        <div className='bg-purple-300 py-10 px-5 rounded-3xl flex items-center justify-center border-y-4 border-red-500 blur-sm shadow-xl shadow-red-200 hover:blur-none'>
            <img src={toy.toyPicture} alt="" className='hover:scale-125' />
        </div>
    );
};

export default GalleryDecoration;