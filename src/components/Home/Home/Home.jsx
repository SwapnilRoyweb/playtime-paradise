import React from 'react';
import AllToys from '../../AllToys/AllToys';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import SiteInfo from '../SiteInfo/SiteInfo';
import SubscribeBanner from '../SubscribeBanner/SubscribeBanner';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Gallery></Gallery>
          <SiteInfo></SiteInfo>
          <SubscribeBanner></SubscribeBanner>
        </div>
    );
};

export default Home;