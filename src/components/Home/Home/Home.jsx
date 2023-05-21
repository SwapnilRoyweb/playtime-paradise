import React from 'react';
import AllToys from '../../AllToys/AllToys';
import Banner from '../Banner/Banner';
import CategoryToys from '../CategoryToys/CategoryToys';
import Gallery from '../Gallery/Gallery';
import SiteInfo from '../SiteInfo/SiteInfo';
import SubscribeBanner from '../SubscribeBanner/SubscribeBanner';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Gallery></Gallery>
          <CategoryToys></CategoryToys>
          <SiteInfo></SiteInfo>
          <SubscribeBanner></SubscribeBanner>
        </div>
    );
};

export default Home;