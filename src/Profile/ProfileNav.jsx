import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Divider, Drawer, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EventIcon from "@mui/icons-material/Event";
import { useDispatch } from "react-redux";

const menu = [
  { title: "Orders", icon: <ShoppingBagIcon /> },
  { title: "Favorites", icon: <FavoriteIcon /> },
  { title: "Address", icon: <HomeIcon /> },
  { title: "Payments", icon: <AccountBalanceWalletIcon /> },
  { title: "Notification", icon: <NotificationsIcon /> },
  { title: "Events", icon: <EventIcon /> },
  { title: "Logout", icon: <LogoutIcon /> },
];

export const ProfileNav = ({ handleClose, open }) => {
    const isSmallScreen = useMediaQuery("(max-width:1080px)");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
  const handleNavigate = (item) => {
    if(item.title==="Logout")
    {
      dispatch({type:"LOGOUT"});
      navigate("/");
    }
    navigate(`/my-profile/${item.title.toLowerCase()}`);
    if (item.title === "Logout") {
      navigate("/");
    }
  };
  
    return (
        <React.Fragment>
          <Drawer
            sx={{ zIndex: -1, position:"sticky"}}
            anchor={"left"}
            open={open}
            onClose={handleClose}
            variant={isSmallScreen ? "temporary" : "permanent"}
            // variant="persistent"
          >
            <div className="w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-center text-xl space-y-8 pt-16">
              {menu.map((item, i) => (
                <>
                  <div
                    onClick={() => handleNavigate(item)}
                    className="px-5 flex items-center space-x-5 cursor-pointer"
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </div>
                  {i !== menu.length - 1 && <Divider />}
                </>
              ))}
            </div>
          </Drawer>
        </React.Fragment>
      );
    };
    
    export default ProfileNav;
    