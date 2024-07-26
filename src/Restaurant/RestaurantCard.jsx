import { Card, Chip, IconButton } from '@mui/material';
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const RestaurantCard = () => {
    return (
       <Card className ='m-5 w-[18rem]'>

            <div className={`${true?'cursor-pointer' : "cursor-not-allowed"} relative`}>
                <img className='w-full h-[10rem] rounded-t-md object-cover'
                src='https://cdn.pixabay.com/photo/2016/11/29/10/09/bakery-1868925_1280.jpg'/>
                <Chip size ="small" 
                className= 'absolute top-2 left-2'
                color={true?"success":"error"}
                label={true?"open":'closed'}/>
            </div>
        <div className='p-4 textPart lg:flex w-full justify-between'>
            <div className='space-y-1'>
                <p className='font-semibold text-lg'>Iyengar's Bakery </p>
                <p className='text-gray-500 text-sm'>
                    Craving it all ?    
                </p>
        </div>
        <div>
                <IconButton>
                    {true ? <FavoriteIcon sx={{color: "red"}}/> : <FavoriteBorderIcon/>}
                </IconButton>
        </div>
        </div>
       </Card>
        
    
    )
}

export default RestaurantCard;