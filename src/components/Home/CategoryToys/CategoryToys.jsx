import { data } from 'autoprefixer';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BearToys from './BearToys/BearToys';
import DinosaurToys from './DinosaurToys/DinosaurToys';
import MonkeyToys from './MonkeyToys/MonkeyToys';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const CategoryToys = () => {

    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('https://playtime-paradise-new.vercel.app/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    })
    const monkeyToys = toys.filter(toy => toy.subCategory == 'Monkey');
    // console.log(monkeyToys);
    const dinosaurToys = toys.filter(toy => toy.subCategory == 'Dinosaur');
    // console.log(dinosaurToys);
    const bearToys = toys.filter(toy => toy.subCategory == 'Teddy Bear');
    // console.log(bearToys);

    return (
        <div className='bg-purple-100 m-20 p-5'>
            <h1 className='text-5xl font-bold text-center bg-purple-300 p-3 rounded-full'>Shop By Category</h1>
            <Tabs className='m-10'>
                <TabList className='flex justify-center'>
                    <Tab>Monkey</Tab>
                    <Tab>Dinosaur</Tab>
                    <Tab>Bear</Tab>
                </TabList>


                <TabPanel>
                    <div className='flex flex-col md:flex-row mt-5 gap-5 items-center justify-center' data-aos="fade-down"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center">
                        {monkeyToys.map(monkeyToy => <MonkeyToys key={monkeyToy._id} monkeyToy={monkeyToy}></MonkeyToys>)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='flex flex-col md:flex-row mt-5 gap-5 items-center justify-center' data-aos="fade-down"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center">
                        {dinosaurToys.map(dinosaurToy => <DinosaurToys key={dinosaurToy._id} dinosaurToy={dinosaurToy}></DinosaurToys>)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='flex flex-col md:flex-row mt-5 gap-5 items-center justify-center' data-aos="fade-down"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center">
                        {bearToys.map(bearToy => <BearToys key={bearToy._id} bearToy={bearToy}></BearToys>)}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CategoryToys;