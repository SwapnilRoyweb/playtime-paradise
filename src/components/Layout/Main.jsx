import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Loader from '../Shared/Loader/Loader';
import Navbar from '../Shared/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Loader></Loader>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;