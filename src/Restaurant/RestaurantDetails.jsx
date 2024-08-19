import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MenuCard from './MenuCard';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantById, getRestaurantsCategory } from '../State/Restaurant/Restaurant_Action';


const FoodType=[{label:"All", value:"all"},
                {label: "Veg", value: "vegetarian"},
                {label: "Non-Veg", value:"non-vegetarian"},
                {label: "Seasonal", value:"seasonal"}]

const Menu=[1,1,1,1,1,1,1,1,1,1]



const RestaurantDetails = () => {
    const navigate= useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem('jwt');
    const {auth, restaurant} = useSelector(store=>store);

    const {id, city} = useParams();

    useEffect(() => {
        dispatch(getRestaurantById({jwt, restaurantId : id}))
        dispatch(getRestaurantsCategory({jwt, restaurantId : id}))
    },[])

    const [foodType, setFoodType]= useState("all");
    const handleFilter=(e)=>{console.log(e.target.value,e.target.name)}  
    return (
        <div className='px:5 lg:px-20'>
            <section>
                <h3 className='mt-10 text-semibold py-2'>Home/India/Restaurant Name/3</h3>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <img
                                className='w-full h-[40vh] object-cover'
                                src= {restaurant.restaurant?.images[0]} />
                        </Grid>

                        <Grid item xs={12} lg={6}>
                            <img
                                className='w-full h-[40vh] object-cover'
                                src={restaurant.restaurant?.images[1]} />
                        </Grid>

                        <Grid item xs={12} lg={6}>
                            <img
                                className='w-full h-[40vh] object-cover'
                                src={restaurant.restaurant?.images[2]} />
                        </Grid>
                    </Grid>
                </div>
                <div className='pt-3 pb-5'>
                    <h1 className='text-4xl font-semibold'>
                        {restaurant.restaurant?.restaurant_name}
                    </h1>
                    <p className='text-gray-500 flex items-center gap-3 pb-3'>
                        <span>
                            {restaurant.restaurant?.description}
                        </span>
                    </p>
                    <p className='text-gray-500 flex items-center gap-3 pb-3'>
                        <LocationOnIcon />
                        <span>
                            {restaurant.restaurant?.restaurant_address?.city}
                        </span>
                    </p>
                    <p className='text-gray-500 flex items-center gap-3 pb-3'>
                        <CalendarTodayIcon />
                        <span>
                            {restaurant.restaurant?.openingHours}
                        </span>
                    </p>
                </div>
            </section>
            <Divider />
            <section className='pt-[2rem] lg:flex relative'>
                <div className='space-y-10 lg:w-[20%] filter'>

                    <div className='box shadow-md space-y-5 lg:sticky top-28'>
                        <div>
                            <Typography variant='h5' sx={{paddingBottom:"1rem"}}>
                                Food type
                            </Typography>
                            <FormControl className='py-10 space-y-5' component={"fieldset"}>
                                 <RadioGroup onChange={handleFilter} name='food_type' value={foodType}>
                                    {FoodType.map((item)=> <FormControlLabel value={item.value} control={<Radio/>} label={item.label} />)}
                                </RadioGroup>
                            </FormControl>
                           
                        </div>
                        <Divider/>
                        <div>
                            <Typography variant='h5' sx={{paddingBottom:"1rem"}}>
                                Food category
                            </Typography>
                            <FormControl className='py-10 space-y-5' component={"fieldset"}>
                                 <RadioGroup onChange={handleFilter} name='food_type' value={foodType}>
                                    {restaurant.categories.map((item)=> <FormControlLabel value={item} control={<Radio/>} label={item.name} />)}
                                </RadioGroup>
                            </FormControl>
                           
                        </div>
                    </div>
                </div>

                <div className='space-y-5 lg:w-[80%] filter lg:pl-10'>
                        {Menu.map((item)=><MenuCard/>)}
                </div>

            </section>
        </div>
    );
};

export default RestaurantDetails;