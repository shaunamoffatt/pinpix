import * as ACTION_TYPES from "../actions/action_types";

// Code adapted from "Building react hooks front end app" tutorial
//https://www.freecodecamp.org/news/build-a-react-hooks-front-end-app-with-routing-and-authentication/
export const initialState = {
  isLoading: true,
  callingApi: false,
  auth_token: null,
  errorMessage: "",
  user_id: null,
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CLEAR_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: "",
      };
    case ACTION_TYPES.API_CALL:
      return {
        ...state,
        callingApi: true,
      };
    case ACTION_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        auth_token: action.auth_token,
        user_id: action.user_id,
        isLoading: false,
        callingApi: false,
        errorMessage: "",
      };
    case ACTION_TYPES.LOGIN_FAILURE:
      return {
        ...state,
        auth_token: null,
        isLoading: false,
        callingApi: false,
        errorMessage: action.errorMessage,
      };
    case ACTION_TYPES.RETRIEVE_TOKEN:
      return {
        ...state,
        isLoading: false,
        callingApi: false,
      };
    case ACTION_TYPES.LOGOUT:
      return {
        ...state,
        isLoading: true,
        callingApi: false,
        auth_token: null,
        userId: null,
      };
    default:
      return state;
  }
};
