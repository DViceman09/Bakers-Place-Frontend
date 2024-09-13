import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminRoutes from './AdminRoutes';
import CustomerRoutes from './CustomerRoutes';

const Routers = () => {
    return (
        <div>
            <Routes>
                <Route path="/admin/restaurant/*" element={<AdminRoutes/>}></Route>
                <Route path="/*" element={<CustomerRoutes/>}></Route>
            </Routes>
        </div>
    );
};

export default Routers;