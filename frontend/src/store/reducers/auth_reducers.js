import * as ACTION_TYPES from "../actions/action_types";
import AsyncStorageItems from "../../constants/AsyncStorageItems"
// Code adapted from "Building react hooks front end app" tutorial 
//https://www.freecodecamp.org/news/build-a-react-hooks-front-end-app-with-routing-and-authentication/
export const initialState = {
  isLoading: true,
  auth_token: null,
  userId: null,
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        auth_token: action.auth_token,
        userId: action.id,
        isLoading: false,
      };
    case ACTION_TYPES.LOGIN_FAILURE:
      return {
        ...state,
        auth_token: null,
        isLoading: false,
      };
    case ACTION_TYPES.RETRIEVE_TOKEN:
      return {
        ...state,
        auth_token: action.auth_token,
        userId: action.id,
        isLoading: false,
      };
    case ACTION_TYPES.LOGOUT:
      return {
        ...state,
        auth_token: null,
        userId: null,
        isLoading: false,
      };
    default:
      return state;
  }
};
