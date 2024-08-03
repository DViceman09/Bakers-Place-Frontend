import React from "react";
import ProfileNav from "./ProfileNav";
import { Divider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Orders from "./Orders";
import UsersAddresses from "./UsersAddresses";
import Favorites from "./Favorites";
import UserProfile from "./UserProfile";
import CustomerEvents from "./CustomerEvents";
import Notifications from "./Notifications";


export const Profile = () => {
    return (
      <div className="lg:flex justify-between">
        <div className="sticky h-[80vh] lg:w-[20%]">
          <ProfileNav/>
        </div>
        <div className="lg:w-[80%]">
        <Routes>
        <Route path="/" element={<UserProfile/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/address" element={<UsersAddresses/>} />
          <Route path="/favorites" element={<Favorites/>} />
          <Route path="/payments" element={<Orders/>} />
          <Route path="/events" element={<CustomerEvents/>} />
          <Route path="/notification" element={<Notifications/>} />
        </Routes>
        </div>
        </div>
    );
};

export default ProfileNav;