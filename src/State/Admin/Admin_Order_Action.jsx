// actions.js
import axios from "axios";

import { api } from "../../Components/config/api";
import { GET_RESTAURANTS_ORDER_FAILURE, GET_RESTAURANTS_ORDER_REQUEST, GET_RESTAURANTS_ORDER_SUCCESS, UPDATE_ORDER_STATUS_FAILURE, UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCCESS } from "./Admin_Order_ActionTypes";


export const updateOrderStatus = ({orderId,orderStatus,jwt}) => {
  return async (dispatch) => {
    try {
      dispatch({ type: UPDATE_ORDER_STATUS_REQUEST });

      const response = await api.put(
        `/api/admin/orders/${orderId}/${orderStatus}`,{},{
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      const updatedOrder = response.data;

      console.log("udpdated order ", updatedOrder);

      dispatch({
        type: UPDATE_ORDER_STATUS_SUCCESS,
        payload: updatedOrder,
      });
    } catch (error) {
      console.log("catch error ", error);
      dispatch({ type: UPDATE_ORDER_STATUS_FAILURE, error });
    }
  };
};

export const fetchRestaurantsOrder = ({restaurantId,orderStatus,jwt}) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_RESTAURANTS_ORDER_REQUEST });
      console.log("fetchRestaurantsOrder called ", restaurantId, orderStatus, jwt);
      const { data } = await api.get(
        `/api/admin/order/restaurant/${restaurantId}`,{
          params: {orderStatus:orderStatus},
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      
      const orders = data;
      console.log("restaurants order ------ ", orders);
      dispatch({
        type: GET_RESTAURANTS_ORDER_SUCCESS,
        payload: orders,
      });
    } catch (error) {
      console.log("fetchRestaurantsOrder error ", error);
      dispatch({ type: GET_RESTAURANTS_ORDER_FAILURE, error });
    }
  };
};
