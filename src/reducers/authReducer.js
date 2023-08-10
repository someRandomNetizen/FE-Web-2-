// src/reducers/authReducer.js
import { LOGIN_SUCCESS, LOGOUT, FIND } from '../actions/authActions';

const initialState = {
  isAuthenticated: false,
  user: null,
  find: false,
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
    default:
      return state;
  }
};

export default authReducer;
