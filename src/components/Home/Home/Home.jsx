import React from 'react';
import Banner from '../Banner/Banner';
import SiteInfo from '../SiteInfo/SiteInfo';
import SubscribeBanner from '../SubscribeBanner/SubscribeBanner';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <SiteInfo></SiteInfo>
          <SubscribeBanner></SubscribeBanner>
        </div>
    );
};

export default Home;