import React from 'react';
import Cart from '../Cart/Cart';
import RestaurantDetails from '../Restaurant/RestaurantDetails';
import Home from '../Home/Home';
import { Route, Routes } from 'react-router-dom';
import { Profile } from '../Profile/Profile';
import Navbar from '../Components/Navbar/Navbar';
import Auth from '../Components/Auth/Auth';
import PaymentSuccess from '../PaymentSuccess/PaymentSuccess';
import PaymentFail from '../PaymentFail/PaymentFail';

const CustomerRoutes = () => {
    return (
            <div className='relative'>
            <Navbar/>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/account/:register' element={<Home/>}/>
            <Route exact path='/restaurant/:city/:title/:id' element={<RestaurantDetails/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/my-profile/*' element={<Profile/>}/>
            <Route path='/payment/success/:id' element={<PaymentSuccess/>}/>
            <Route path='/payment/fail/:id' element={<PaymentFail/>}/>
        </Routes>
        <Auth/>
        </div>
    );
};

export default CustomerRoutes;