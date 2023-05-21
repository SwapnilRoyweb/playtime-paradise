import { data } from 'autoprefixer';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BearToys from './BearToys/BearToys';
import DinosaurToys from './DinosaurToys/DinosaurToys';
import MonkeyToys from './MonkeyToys/MonkeyToys';

const CategoryToys = () => {

    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/toys')
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
            <Tabs className='m-10'>
                <TabList className='flex justify-center'>
                    <Tab>Monkey</Tab>
                    <Tab>Dinosaur</Tab>
                    <Tab>Bear</Tab>
                </TabList>


                <TabPanel>
                    <div className='flex mt-5 gap-5 items-center justify-center'>
                        {monkeyToys.map(monkeyToy => <MonkeyToys key={monkeyToy._id} monkeyToy={monkeyToy}></MonkeyToys>)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='flex mt-5 gap-5 items-center justify-center'>
                        {dinosaurToys.map(dinosaurToy => <DinosaurToys key={dinosaurToy._id} dinosaurToy={dinosaurToy}></DinosaurToys>)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='flex mt-5 gap-5 items-center justify-center'>
                        {bearToys.map(bearToy => <BearToys key={bearToy._id} bearToy={bearToy}></BearToys>)}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CategoryToys;