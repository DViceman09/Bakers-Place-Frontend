import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material';
import React, { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MenuCard from './MenuCard';

const categories=["Cookies", "cakes", "breads", "pastries", "muffins", "brownies", "croissants", "donuts", "pies", "tarts", "quiches", "scones", "biscuits", "rolls", "buns", "bagels", "pretzels"]

const FoodType=[{label:"All", value:"all"},
                {label: "Veg", value: "vegetarian"},
                {label: "Non-Veg", value:"non-vegetarian"},
                {label: "Seasonal", value:"seasonal"}]

const Menu=[1,1,1,1,1,1,1,1,1,1]

const RestaurantDetails = () => {
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
                                src='https://cdn.pixabay.com/photo/2016/11/29/10/09/bakery-1868925_640.jpg' />
                        </Grid>

                        <Grid item xs={12} lg={6}>
                            <img
                                className='w-full h-[40vh] object-cover'
                                src='https://cdn.pixabay.com/photo/2016/11/29/10/09/bakery-1868925_640.jpg' />
                        </Grid>

                        <Grid item xs={12} lg={6}>
                            <img
                                className='w-full h-[40vh] object-cover'
                                src='https://cdn.pixabay.com/photo/2016/11/29/10/09/bakery-1868925_640.jpg' />
                        </Grid>
                    </Grid>
                </div>
                <div className='pt-3 pb-5'>
                    <h1 className='text-4xl font-semibold'>
                        Restaurant Name
                    </h1>
                    <p className='text-gray-500 flex items-center gap-3 pb-3'>
                        <span>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Amet ut, quaerat praesentium debitis hic impedit eaque doloribus aperiam in dignissimos, explicabo et id asperiores
                            quidem natus, labore distinctio veniam possimus.
                        </span>
                    </p>
                    <p className='text-gray-500 flex items-center gap-3 pb-3'>
                        <LocationOnIcon />
                        <span>
                            Dhanori, Pune
                        </span>
                    </p>
                    <p className='text-gray-500 flex items-center gap-3 pb-3'>
                        <CalendarTodayIcon />
                        <span>
                            Mon to Sun 9:00am to 11pm
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
                                    {categories.map((item)=> <FormControlLabel value={item} control={<Radio/>} label={item} />)}
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