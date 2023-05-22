import React from 'react';
import { FaFacebookF, FaWhatsapp, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer items-center p-3 bg-purple-100 text-black rounded-xl ">
            <div className="flex items-center">
                <img src="https://i.ibb.co/n1rkRV9/windmill.png" alt="" className='w-20 h-20' />
                <h1 className='text-3xl font-bold'>Playtime<span className='text-purple-600'>-Paradise</span></h1>
            </div>
                <p>Copyright © 2023/ All rights reserved</p>
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <button className='btn btn-primary'><FaFacebookF className="h-6 w-6" /></button>
            <button className='btn btn-primary'><FaWhatsapp className="h-6 w-6" /></button>
            <button className='btn btn-primary'><FaTwitter className="h-6 w-6" /></button>
            </div>
        </footer>
    );
};

export default Footer;