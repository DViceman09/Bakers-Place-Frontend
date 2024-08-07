import React from 'react';
import './Home.css';
import Carousel from './Carousel';
import RestaurantCard from '../Restaurant/RestaurantCard';

const restaurant = [1,1,1,1,1,1,1,1]

const Home = () => {
    return (
        <div className='pb-10'>
           <section className='banner -z-50 relative flex flex-col justify-center items-center'>
                <div className='w-[50vw] z-10 text-center'>
                    <p className='text-2xl lg:text-6xl font-bold z-10 py-5'>Anne's Bakery</p>
                    <p className='z-10 text-gray-300 text-xl lg:text-4xl'>Taste the difference</p>
                </div>
                <div className='cover absolute top-0 left-0 right-0'>

                </div>
                <div className='fadeout'>

                </div>
           </section>
           <section className='p-10 lg:py-10 lg:px-10'>
                <p className='text-2xl font-semibold text-center py-10 pb-10'>Top Cuisines</p>
                <Carousel/>
           </section>
           <section className='px-5 lg:px-20 pt-8'>
                <h1 className='text-2xl font-semibold text-center py-3 pb-8'>Order From Our Handpick Favourites</h1>
                <div className='flex flex-wrap items-center justify-around gap-2'>
                    {
                        restaurant.map((item) => <RestaurantCard/>)
                    }
                    
                </div>
           </section>
        </div>
    );
};

export default Home;