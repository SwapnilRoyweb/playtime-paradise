import React from 'react';
import useTitle from '../../hooks/useTitle';

const ErrorPage = () => {

    useTitle('Error')

    return (
        <div className='flex items-center justify-center'>
            <img src="https://i.ibb.co/kcgs3x4/13315300-5203299.jpg" alt="" className='h-screen' />
        </div>
    );
};

export default ErrorPage;