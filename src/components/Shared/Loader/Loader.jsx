import React from 'react';
import { useNavigation } from 'react-router-dom';

const Loader = () => {

    const navigation = useNavigation();

    if (navigation.state === 'loading') {
        return <div className='flex items-center justify-center'><progress className="progress w-56"></progress></div>
    }
};

export default Loader;