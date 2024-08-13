import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {thunk} from "redux-thunk";
import Reducer from "./Reducer";
import restaurantReducer from "../Restaurant/Restaurant_Reducer";
import menuItemReducer from "../Menu/Menu_Reducer";


const rootReducer=combineReducers({

    auth:Reducer,
    restaurant : restaurantReducer,
    menu:menuItemReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))