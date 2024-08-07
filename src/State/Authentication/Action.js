import { api, API_URL } from "../../Components/config/api";
import {
    ADD_TO_FAVORITES_FAILURE,
    ADD_TO_FAVORITES_REQUEST,
    ADD_TO_FAVORITES_SUCCESS,
    GET_USER_FAILURE,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REQUEST_RESET_PASSWORD_FAILURE,
    REQUEST_RESET_PASSWORD_REQUEST,
    REQUEST_RESET_PASSWORD_SUCCESS,
  } from "./ActionType";
  import axios from "axios";
  
  export const registerUser = (reqData) => async (dispatch) => {
    console.log("This is the Registration data ", reqData.userData)
    try {
      dispatch({ type: REGISTER_REQUEST });
      console.log("Step 1:Dispatch type REGISTER_REQUEST complete", reqData.userData)
      const { data } = await api.post(`/auth/signup`, reqData.userData);
      console.log("Step 2: Axios post called and data stored in const", reqData.userData)
      if(data.jwt) localStorage.setItem("jwt",data.jwt)
      if(data.role==="ROLE_RESTAURANT_OWNER"){
        reqData.navigate("/admin/restaurant")
      }
      else{
        reqData.navigate("/")
      }
      console.log("Register Successful with Data ", reqData.userData)
      dispatch({ type: REGISTER_SUCCESS, payload: data.jwt });
    } catch (error) {
      console.log("catch error ------ ",error)
      dispatch({
        type: REGISTER_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const loginUser = (reqData) => async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });
  
      const { data } = await api.post(`/auth/signin`, reqData.data, api);
      if(data.jwt) localStorage.setItem("jwt",data.jwt)
      if(data.role==="ROLE_RESTAURANT_OWNER"){
        reqData.navigate("/admin/restaurant")
      }
      else{
        reqData.navigate("/")
      }
      console.log("Login Successful with Data ", data)
      dispatch({ type: LOGIN_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: LOGIN_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  
  export const getUser = (token) => {
    return async (dispatch) => {
      dispatch({ type: GET_USER_REQUEST });
      try {
        const response = await axios.get(`${API_URL}/api/users/profile`, {
          headers: {
          Authorization: `Bearer ${token}`,
          },
        });
        const user = response.data;
        console.log("User Data", user);
        dispatch({ type: GET_USER_SUCCESS, payload: user });
      } catch (error) {
        const errorMessage = error.message;
        dispatch({ type: GET_USER_FAILURE, payload: errorMessage });
      }
    };
  };
  
  export const addToFavorites = ({restaurantId,jwt}) => {
    return async (dispatch) => {
      dispatch({ type: ADD_TO_FAVORITES_REQUEST });
      try {
        const { data } = await api.put(`api/restaurants/${restaurantId}/add-favorites`,{},{
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
        console.log("Add to favorites ",data)
        dispatch({ type: ADD_TO_FAVORITES_SUCCESS, payload: data });
      } catch (error) {
        console.log("catch error ",error)
        dispatch({
          type: ADD_TO_FAVORITES_FAILURE,
          payload: error.message,
        });
      }
    };
  };
  
  export const resetPasswordRequest = (email) => async (dispatch) => {
    dispatch({type:REQUEST_RESET_PASSWORD_REQUEST});
    try {
      const {data} = await axios.post(`${API_URL}/auth/reset-password-request?email=${email}`,{});
      
      console.log("reset password -: ", data);
     
      dispatch({type:REQUEST_RESET_PASSWORD_SUCCESS,payload:data});
    } catch (error) {
      console.log("error ",error)
      dispatch({type:REQUEST_RESET_PASSWORD_FAILURE,payload:error.message});
    }
  };
  
  export const resetPassword = (reqData) => async (dispatch) => {
    dispatch({type:REQUEST_RESET_PASSWORD_REQUEST});
    try {
      const {data} = await axios.post(`${API_URL}/auth/reset-password`,reqData.data);
      
      console.log("reset password -: ", data);
  
      reqData.navigate("/password-change-success")
     
      dispatch({type:REQUEST_RESET_PASSWORD_SUCCESS,payload:data});
    } catch (error) {
      console.log("error ",error)
      dispatch({type:REQUEST_RESET_PASSWORD_FAILURE,payload:error.message});
    }
  };
  
  export const logout = () => {
    return async (dispatch) => {
      dispatch({ type: LOGOUT });
      localStorage.clear();
    };
  };
  
  
  
  