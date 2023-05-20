import React from 'react';
import { useNavigation } from 'react-router-dom';

const Loader = () => {

    const navigation = useNavigation();

    if (navigation.state === 'loading') {
        return <div className="radial-progress items-center">100%</div>
    }
};

export default Loader;