import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {thunk} from "redux-thunk";
import {Reducer} from "./Reducer";
import {restaurantReducer} from "../Restaurant/Restaurant_Reducer";
import {menuItemReducer} from "../Menu/Menu_Reducer";
import {cartReducer} from "../Cart/Cart_Reducer";
import { orderReducer } from "../Order/Order_Reducer";
import {restaurantsOrderReducer} from "../Admin/Admin_Order_Reducer";



const rootReducer=combineReducers({

    auth:Reducer,
    restaurant:restaurantReducer,
    menu:menuItemReducer,
    cart:cartReducer,
    order:orderReducer,
    restaurantOrder:restaurantsOrderReducer
});

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))