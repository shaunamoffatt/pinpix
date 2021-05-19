import React, { useEffect } from "react";
import createDataContext from "./createDataContext";
import { PostReducer, initialState } from "../store/reducers/post_reducers";
import { AsyncStorage } from "react-native";

import * as ACTION_TYPES from "../store/actions/action_types";

import pinpixApi from "../api/pinpixApi";
//TODO find better place for api URLS
let postPath = "post";

//TODO find a better place for this too
import AsyncStorageItems from "../constants/AsyncStorageItems";
import * as SecureStore from "expo-secure-store";

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: ACTION_TYPES.CLEAR_ERROR_MESSAGE });
};

{/** TODO fix up dispatches in createPost, add tag etc */}
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
    let user_id = await SecureStore.getItemAsync(AsyncStorageItems.USER_ID);
  //TODO: remove ..just for debug
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
    // Post the image to the pinpixAPi who pushes the image to aws S3
    const response = await pinpixApi.post(postPath, formData, options);
    // TODO: change this .. just for demo purposes
    getPosts();
    dispatch({
      type: ACTION_TYPES.POST_CREATE_SUCCESS,
    });

  } catch (error) {
    console.log(error.response);
    alert("Error, Message Not submitted");
         dispatch({
      type: ACTION_TYPES.POST_CREATE_FAILURE,
      errorMessage: "Failed to create post"
    });
  }
};

const getPosts = (dispatch) => async () => {
  alert("GETTING POSTS IMAGES");
  //try to get images
  try {
    let token = await SecureStore.getItemAsync(AsyncStorageItems.AUTH_TOKEN);
    let user_id = await SecureStore.getItemAsync(AsyncStorageItems.USER_ID);
 
    const options = {
      headers: {
        Authorization: token,
        acl: "public-read",
      },
    };

    console.log(postPath);
    // TODO: send back only some .. for now get all the photos
    const response = await pinpixApi.get(postPath, options);
    var data = response.data;
    let imageArray = [];
    // loop through and add the url from the image
    for (var i = 0; i < data.length; i++) {
      var object = data[i].image;
      for (var property in object) {
        if (object[property] != null) {
          imageArray.push(object[property]);
        }
      }
    }
    dispatch({
      type: ACTION_TYPES.POSTS_FETCH_ALL_SUCCESS,
      images: imageArray,
    });
  } catch (error) {
    console.log(error.response);
    dispatch({ type: ACTION_TYPES.POSTS_FETCH_ALL_ERROR });
  }
};

export const { Provider, Context } = createDataContext(
  PostReducer,
  { createPost, getPosts },
  initialState
);
