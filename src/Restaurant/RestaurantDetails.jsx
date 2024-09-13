import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MenuCard from './MenuCard';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantById, getRestaurantsCategory } from '../State/Restaurant/Restaurant_Action';
import { getMenuItemsByRestaurantId } from '../State/Menu/Menu_Action';


const FoodType=[{label:"All", value:"all"},
                {label: "Veg", value: "vegetarian"},
                {label: "Non-Veg", value:"non-vegetarian"},
                {label: "Seasonal", value:"seasonal"}]

const Menu=[1,1,1,1,1,1,1,1,1,1]



const RestaurantDetails = () => {
    const navigate= useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem('jwt');
    const {auth, restaurant, menu} = useSelector(store=>store);
    const[selectedCategory, setSelectedCategory] = useState("");
    const [foodType, setFoodType]= useState("all");

    const {id, city} = useParams();

    const {restaurantId} = useParams();

    useEffect(() => {
        dispatch(getRestaurantById({jwt, restaurantId : id}))
        dispatch(getRestaurantsCategory({jwt, restaurantId : id}))
    },[])

    useEffect(() => {
        dispatch(getMenuItemsByRestaurantId({jwt, restaurantId : id, vegetarian: foodType==="vegetarian", nonveg: foodType==="non-vegetarian", seasonal: foodType==="seasonal", foodCategory: selectedCategory}))
    },[selectedCategory, foodType])


    const handleFilter=(e)=>{
        setFoodType(e.target.value)
        console.log(e.target.value,e.target.name)
    }  

    const handleFilterCategory=(e,value)=>{
        setSelectedCategory(value)
        console.log(e.target.value,e.target.name, value)
    }  
    return (
        <div className='px:5 lg:px-20'>
            <section>
                <h3 className='mt-10 text-semibold py-2'>Home/India/Restaurant Name/3</h3>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <img
                                className='w-full h-[40vh] object-cover'
                                src= {restaurant.usersRestaurant?.images[0]} />
                        </Grid>

                        <Grid item xs={12} lg={6}>
                            <img
                                className='w-full h-[40vh] object-cover'
                                src={restaurant.usersRestaurant?.images[1]} />
                        </Grid>

                        <Grid item xs={12} lg={6}>
                            <img
                                className='w-full h-[40vh] object-cover'
                                src={restaurant.usersRestaurant?.images[2]} />
                        </Grid>
                    </Grid>
                </div>
                <div className='pt-3 pb-5'>
                    <h1 className='text-4xl font-semibold'>
                        {restaurant.usersRestaurant?.restaurant_name}
                    </h1>
                    <p className='text-gray-500 flex items-center gap-3 pb-3'>
                        <span>
                            {restaurant.usersRestaurant?.description}
                        </span>
                    </p>
                    <p className='text-gray-500 flex items-center gap-3 pb-3'>
                        <LocationOnIcon />
                        <span>
                            {restaurant.usersRestaurant?.restaurant_address?.city}
                        </span>
                    </p>
                    <p className='text-gray-500 flex items-center gap-3 pb-3'>
                        <CalendarTodayIcon />
                        <span>
                            {restaurant.usersRestaurant?.openingHours}
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
                                 <RadioGroup onChange={handleFilterCategory} name='foodCategory' value={selectedCategory}>
                                    {restaurant.categories.map((item)=> <FormControlLabel value={item.name} control={<Radio/>} label={item.name} />)}
                                </RadioGroup>
                            </FormControl>
                           
                        </div>
                    </div>
                </div>

                <div className='space-y-5 lg:w-[80%] filter lg:pl-10'>
                        {menu.menuItems.map((item)=><MenuCard item={item}/>)}
                </div>

            </section>
        </div>
    );
};

export default RestaurantDetails;