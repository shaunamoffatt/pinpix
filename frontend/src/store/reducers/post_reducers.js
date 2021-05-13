import * as ACTION_TYPES from "../actions/action_types";
import AsyncStorageItems from "../../constants/AsyncStorageItems";
import * as SecureStore from "expo-secure-store";

// Code adapted from "Building react hooks front end app" tutorial
//https://www.freecodecamp.org/news/build-a-react-hooks-front-end-app-with-routing-and-authentication/
export const initialState = {
  auth_token: null,
  title: "",
  tags: [],
  image: null,
  hasPosted: false,
  images: [],
  errorMessage: "",
};

export const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.POST_CREATE_SUCCESS:
      return {
        ...state,
        hasPosted: true,
      };
    case ACTION_TYPES.API_CALL:
      return {
        ...state,
        callingApi: true,
      };
    case ACTION_TYPES.POST_CREATE_FAILURE:
      return {
        ...state,
        errorMessage: action.errorMessage,
        hasPosted: false,
      };
    case ACTION_TYPES.POST_FETCH_SUCCESS:
      return {
        ...state,
      };
    case ACTION_TYPES.POSTS_FETCH_ALL_SUCCESS:
      console.log("*********************************");
      console.log("THIS IS THE ACTION");
      console.log(action.images);
      return {
        ...state,
        images: action.images,
        hasPosted: false,
      };
    case ACTION_TYPES.POSTS_FETCH_ALL_ERROR:
      return {
        ...state,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};
