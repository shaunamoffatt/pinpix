import React, { useEffect } from "react";
import createDataContext from "./createDataContext";
import { AuthReducer, initialState } from "../store/reducers/auth_reducers";
import { AsyncStorage } from "react-native";

import * as ACTION_TYPES from "../store/actions/action_types";

import pinpixApi from "../api/pinpixApi";
//TODO find better place for api URLS
let authenticatePath = "authenticate";
let usersPath = "users";
let postPath = "post";
//TODO find a better place for this too
import AsyncStorageItems from "../constants/AsyncStorageItems";
import * as SecureStore from "expo-secure-store";

const retrieveToken = (dispatch) => async ({}) => {
  try {
    return token = await SecureStore.getItemAsync(AsyncStorageItems.AUTH_TOKEN);
    dispatch({ type: ACTION_TYPES.RETRIEVE_TOKEN, auth_token: token });
  } catch (error) {
    try {
      alert("Error Retrieving Token");
      //Remove the auth token on the phone
      SecureStore.deleteItemAsync(AsyncStorageItems.AUTH_TOKEN);
      //Reset states
      dispatch({ type: "LOGOUT" });
    } catch (error) {
      console.log(error);
    }
    console.log(
      "Something went wrong retrieving authtoken from storage",
      error
    );
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: ACTION_TYPES.CLEAR_ERROR_MESSAGE });
};

const createPost = (dispatch) => async ({
  //TODO move this to post_reducer and add auth headers
  title,
  image,
  // tags,
  body,
}) => {
  // If title not entered
  
  //try to create post
  try {
    let token = await SecureStore.getItemAsync(AsyncStorageItems.AUTH_TOKEN);
    alert("Starting to Post" + token);
    const response = await pinpixApi.post(
      postPath,  {
          title,
          image,
          // tag,
          body,
      },
      {
        headers: {
          "Authorization": token,
        },
      }
    );
    console.log("RESPONSE : \n"+ response);
    //Saves states and dispatches loginsuccess
  } catch (error) {
    console.log(error);
  }
};

export const { Provider, Context } = createDataContext(
  AuthReducer,
  { createPost },
  initialState
);
