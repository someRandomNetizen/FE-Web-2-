// src/reducers/authReducer.js
import { LOGIN_SUCCESS, LOGOUT, FIND, FIND5, FIND10, IS_DRIVER, USER_ID, DRIVER_ID, REC_SHIPMENT } from '../actions/authActions';

const initialState = {
  isAuthenticated: false,
  user: null,
  find: false,
  find5: false,
  find10: false,
  isDriver: false,
  userID: false,
  driverID: false,
  recShipment: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case FIND:
      return {
        ...state,
        find: true,
      };
    case FIND5:
      return {
        ...state,
        find5: true,
      };
    case FIND10:
      return {
        ...state,
        find10: true,
      };
    case IS_DRIVER:
      return {
        ...state,
        isDriver: true,
      };
    case USER_ID:
      return {
        ...state,
        userID: action.payload,
      };
    case DRIVER_ID:
      console.log("cookie")
      console.log(action.payload)
      return {
        ...state,
        driverID: action.payload,
      };
    case REC_SHIPMENT:
      return {
        ...state,
        recShipment: true,
      };
    default:
      return state;
  }
};

export default authReducer;
