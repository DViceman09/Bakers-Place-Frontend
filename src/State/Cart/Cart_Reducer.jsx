import { LOGOUT } from "../Authentication/ActionType";
import { ADD_ITEM_TO_CART_SUCCESS, CLEARE_CART_SUCCESS, FIND_CART_FAILURE, FIND_CART_REQUEST, FIND_CART_SUCCESS, GET_ALL_CART_ITEMS_REQUEST, REMOVE_CARTITEM_FAILURE, REMOVE_CARTITEM_REQUEST, REMOVE_CARTITEM_SUCCESS, UPDATE_CARTITEM_FAILURE, UPDATE_CARTITEM_REQUEST, UPDATE_CARTITEM_SUCCESS } from "./Cart_ActionTypes";




const initialState = {
  cart: null,
  cartItems: [],
  loading: false,
  error: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_CART_REQUEST:
    case GET_ALL_CART_ITEMS_REQUEST:
    case UPDATE_CARTITEM_REQUEST:
    case REMOVE_CARTITEM_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FIND_CART_SUCCESS:
    case CLEARE_CART_SUCCESS:
      console.log("Cart", action.payload.item);
      return {
        ...state,
        loading: false,
        cart: action.payload,
        cartItems: action.payload.item,
      };
    case ADD_ITEM_TO_CART_SUCCESS:
      console.log("cartItems",state.cartItems)
      return {
        ...state,
        loading: false,
        cartItems: [...state.cartItems, action.payload],
      };
    case UPDATE_CARTITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case REMOVE_CARTITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: state.cartItems.filter((item) =>
          item.id !== action.payload
        ),
      };
    case FIND_CART_FAILURE:
    case UPDATE_CARTITEM_FAILURE:
    case REMOVE_CARTITEM_FAILURE:
      // case GET_ALL_CART_ITEMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

      case LOGOUT:
      localStorage.removeItem("jwt");
      return { ...state, cartItems:[],cart:null, success: "logout success" };
    default:
      return state;
  }
};

export default cartReducer;
