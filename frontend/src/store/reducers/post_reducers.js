import * as ACTION_TYPES from "../actions/action_types";
import AsyncStorageItems from "../../constants/AsyncStorageItems";
import * as SecureStore from "expo-secure-store";

// Code adapted from "Building react hooks front end app" tutorial
//https://www.freecodecamp.org/news/build-a-react-hooks-front-end-app-with-routing-and-authentication/
export const initialState = {
    title= "",
    tags = [],
    image,
    post,
};

export const PostReducer = (state = initialState, action) => {
  switch (action.type) {
     case ACTION_TYPES.POST_CREATE_SUCCESS:
      return {
        ...state,
        errorMessage: "",
      };
    case ACTION_TYPES.API_CALL:
      return {
        ...state,
        callingApi: true,
      };
    case ACTION_TYPES.POST_CREATE_FAILURE:
      return {
        ...state,
      };
    case ACTION_TYPES.POST_FETCH_SUCCESS:
      return {
        ...state,
      };
    default:
      return state;
  }
};
