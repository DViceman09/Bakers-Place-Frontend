import { Restaurant } from '@mui/icons-material';
import React from 'react';
import RestaurantCard from '../Restaurant/RestaurantCard';

const Favorites = () => {
    return (
        <div>
            <h1 className='py-5 text-xl text-center font-semibold'>My Favorites</h1>
            <div className='flex flex-wrap gap-3 justify-center'>
                {[1,1,1].map((item)=> <RestaurantCard/>)}
            </div>
        </div>
    );
};

export default Favorites;