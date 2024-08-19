import { Card, Chip, IconButton } from '@mui/material';
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites } from '../State/Authentication/Action';
import { isPresentInFavorites } from '../Components/config/logic';

export const RestaurantCard = ({item}) => {
    const navigate= useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem('jwt');
    const {auth} = useSelector(store=>store);

    const handleAddtoFavourite = () => { 
        dispatch(addToFavorites({restaurantId:item.restaurantId,jwt}));
    }

    const handleNavigateToRestaurant = () => {
        if(item.open)
        {
            navigate(`/restaurant/${item.restaurant_address.city}/${item.restaurant_name}/${item.restaurantId}`)
        }
    }   

    return (
       <Card className ='m-5 w-[18rem]'>

            <div className={`${true?'cursor-pointer' : "cursor-not-allowed"} relative`}>
                <img className='w-full h-[10rem] rounded-t-md object-cover'
                src={item.images[0]}/>
                <Chip size ="small" 
                className= 'absolute top-2 left-2'
                color={item.open?"success":"error"}
                label={item.open?"open":'closed'}/>
            </div>
        <div className='p-4 textPart lg:flex w-full justify-between'>
            <div className='space-y-1'>
                <p onClick={handleNavigateToRestaurant} className='font-semibold text-lg cursor-pointer'>{item.restaurant_name}</p>
                <p className='text-gray-500 text-sm'>
                    {item.description}  
                </p>
        </div>
        <div>
                <IconButton onClick={handleAddtoFavourite}>
                    {isPresentInFavorites(auth.favorites, item) ? <FavoriteIcon sx={{color: "red"}}/> : <FavoriteBorderIcon/>}
                </IconButton>
        </div>
        </div>
       </Card>
        
    
    )
}

export default RestaurantCard;