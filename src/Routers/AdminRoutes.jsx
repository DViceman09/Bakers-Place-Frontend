import React from 'react';
import { Route, Routes } from 'react-router-dom';


import Admin from '../Admin/Admin';
import CreateRestaurantForm from '../Admin/AdminComponent/CreateRestaurantForm';
import { useSelector } from 'react-redux';

export const AdminRoutes = () => {
    const { restaurant } = useSelector(store => store);
    return (
        <div>
            <Routes>
                <Route path="/*" element={
            !restaurant.usersRestaurant?<CreateRestaurantForm/> : <Admin />
          } />
            </Routes>
        </div>
    );
};

export default AdminRoutes;