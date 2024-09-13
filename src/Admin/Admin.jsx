import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getRestaurantsCategory } from "../State/Restaurant/Restaurant_Action";
import AdminNavbar from "./AdminNavBar";
import AdminSidebar from "./AdminSideBar";
import { Route, Routes } from "react-router-dom";
import RestaurantDashboard from "./Dashboard/RestaurantDashboard";
import RestaurantsOrder from "./Orders/RestaurantsOrder";
import RestaurantsMenu from "./Food/RestaurantsMenu";
import AddMenuForm from "./Food/AddMenuForm";
import CreateRestaurantForm from "./AdminComponent/CreateRestaurantForm";
import Category from "./Category/Category";
import Details from "./Details/Details";
import { fetchRestaurantsOrder } from "../State/Admin/Admin_Order_Action";



const Admin = () => {
  const dispatch = useDispatch();
  const [openSideBar, setOpenSideBar] = useState(false);
  const handleOpenSideBar = () => setOpenSideBar(true);
  const handleCloseSideBar = () => setOpenSideBar(false);
  const {auth, restaurant} = useSelector(store=>store);
  const jwt = localStorage.getItem("jwt");
  useEffect(() => {
    if (restaurant.usersRestaurant) {
      dispatch(
        getRestaurantsCategory({
          jwt: auth.jwt || jwt,
          restaurantId: restaurant.usersRestaurant?.restaurantId,
        })
      );

      // dispatch(
      //   fetchRestaurantsOrder({
      //     restaurantId: restaurant.usersRestaurant?.restaurantId,
      //     jwt: auth.jwt || jwt,
      //   })
      // );
    }
  }, [restaurant.usersRestaurant]
);
  return (
    <div>
      <AdminNavbar handleOpenSideBar={handleOpenSideBar} />
      <div className="lg:flex justify-between">
        <div className="">
          <AdminSidebar handleClose={handleCloseSideBar} open={openSideBar} />
        </div>

        <div className="lg:w-[80vw]">
          <Routes>
            <Route path="/" element={<RestaurantDashboard/>} />
            {/* <Route path="/orders" element={<RestaurantsOrder/>} /> */}
            <Route path="/menu" element={<RestaurantsMenu/>} />
            <Route path="/add-menu" element={<AddMenuForm/>} />
            <Route path="/add-restaurant" element={<CreateRestaurantForm/>} />
            <Route path="/category" element={<Category/>} />
            <Route path="/details" element={<Details/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
