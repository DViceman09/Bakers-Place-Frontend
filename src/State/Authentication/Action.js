import {
    ADD_TO_FAVORITES_FAILURE,
    ADD_TO_FAVORITES_REQUEST,
    ADD_TO_FAVORITES_SUCCESS,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
  } from "./ActionType";
 import { api, API_URL } from "../../Components/config/api";
  import axios from "axios";
  
  export const registerUser = (reqData) => async (dispatch) => {
    console.log("register request data", reqData.userData)
    dispatch({ type: REGISTER_REQUEST });
    try {
      const {data} = await axios.post(`${API_URL}/auth/signup`, reqData.userData);
      if(data.jwt){
          localStorage.setItem("jwt",data.jwt)
        }
      if(data.role==="ROLE_RESTAURANT_OWNER"){
        reqData.navigate("/admin/restaurant")
      }
      else{
        reqData.navigate("/")
      }
      dispatch({ type: REGISTER_SUCCESS, payload: data.jwt});
      console.log("Registration success", data)
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
    dispatch({ type: LOGIN_REQUEST });
    try {
      const { data } = await axios.post(`${API_URL}/auth/signin`, reqData.data);
      if(data.jwt) localStorage.setItem("jwt",data.jwt)
      if(data.role==="ROLE_RESTAURANT_OWNER"){
        reqData.navigate("/admin/restaurant")
      }
      else{
        reqData.navigate("/")
      }
      
      dispatch({ type: LOGIN_SUCCESS, payload: data.jwt });
      console.log("Login success ",data)
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
   
  export const getUser = (jwt) => {
    return async (dispatch) => {
      dispatch({ type: GET_USER_REQUEST });
      try {
        const {data} = await api.get(`/api/users/profile`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        })
        dispatch({ type: GET_USER_SUCCESS, payload: data});
        console.log("User Profile", data)
      } catch (error) {
        const errorMessage = error.message;
      }
    }
  }
  
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

  export const logout = () => {
    return async (dispatch) => {
      dispatch({ type: LOGOUT });
      try {
        localStorage.clear();
        dispatch({ type: LOGOUT});
        console.log("Logout success")
      } catch (error) {
        console.log("error",error)
      }
    };
  };
  
  //   dispatch({type:REQUEST_RESET_PASSWORD_REQUEST});
  //   try {
  //     const {data} = await axios.post(`${API_URL}/auth/reset-password-request?email=${email}`,{});
      
  //     console.log("reset password -: ", data);
     
  //     dispatch({type:REQUEST_RESET_PASSWORD_SUCCESS,payload:data});
  //   } catch (error) {
  //     console.log("error ",error)
  //     dispatch({type:REQUEST_RESET_PASSWORD_FAILURE,payload:error.message});
  //   }
  // };
  
  // export const resetPassword = (reqData) => async (dispatch) => {
  //   dispatch({type:REQUEST_RESET_PASSWORD_REQUEST});
  //   try {
  //     const {data} = await axios.post(`${API_URL}/auth/reset-password`,reqData.data);
      
  //     console.log("reset password -: ", data);
  
  //     reqData.navigate("/password-change-success")
     
  //     dispatch({type:REQUEST_RESET_PASSWORD_SUCCESS,payload:data});
  //   } catch (error) {
  //     console.log("error ",error)
  //     dispatch({type:REQUEST_RESET_PASSWORD_FAILURE,payload:error.message});
  //   }
  // };
  
  // export const logout = () => {
  //   return async (dispatch) => {
  //     dispatch({ type: LOGOUT });
  //     localStorage.clear();
  //   };
  // };
  
  
  
  