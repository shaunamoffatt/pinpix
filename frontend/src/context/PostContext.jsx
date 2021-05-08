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
    return (token = await SecureStore.getItemAsync(
      AsyncStorageItems.AUTH_TOKEN
    ));
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
  //try to create post
  try {
    let token = await SecureStore.getItemAsync(AsyncStorageItems.AUTH_TOKEN);
    let user_id = await SecureStore.getItemAsync(AsyncStorageItems.ID);

    alert("Starting to Post for user_id " + user_id);

    const options = {
      headers: {
        Authorization: token,
        acl: "public-read",
      },
    };

    // ImagePicker saves the taken photo to disk and returns a local URI to it
    let localUri = image.uri;
    let filename = localUri.split("/").pop();

    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("body", body);
    formData.append("user_id", user_id);
    formData.append("image", { uri: localUri, name: filename, type });

    const response = await pinpixApi.post(postPath, formData, options);
  } catch (error) {
    console.log(error.response);
    alert("Error,Message Not submitted");
  }
};

export const { Provider, Context } = createDataContext(
  AuthReducer,
  { createPost },
  initialState
);
