import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {thunk} from "redux-thunk";
import Reducer from "./Reducer";
import restaurantReducer from "../Restaurant/Restaurant_Reducer";


const rootReducer=combineReducers({

    auth:Reducer,
    restaurant : restaurantReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))