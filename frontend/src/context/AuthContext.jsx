import React, { useEffect } from "react";
import createDataContext from "./createDataContext";
import { AuthReducer, initialState } from "../store/reducers/auth_reducers";
import { AsyncStorage } from "react-native";

import * as ACTION_TYPES from "../store/actions/action_types";

import pinpixApi from "../api/pinpixApi";
//TODO find better place for api URLS
let authenticatePath = "authenticate";
let getIdPath = "get_user_id";
let usersPath = "users";
//TODO find a better place for this too
import AsyncStorageItems from "../constants/AsyncStorageItems";
import * as SecureStore from "expo-secure-store";

const retrieveToken = (dispatch) => async ({}) => {
  try {
    let token = await SecureStore.getItemAsync(AsyncStorageItems.AUTH_TOKEN);
    dispatch({ type: ACTION_TYPES.RETRIEVE_TOKEN, auth_token: token });
  } catch (error) {
    try {
      alert("Trying to sign out");
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

const register = (dispatch) => async ({
  email,
  password,
  password_confirmation,
}) => {
  // If passwords not entered
  if (password == "") alert("Please enter Password");
  else if (password_confirmation == "")
    // If confirm password not entered
    alert("Please enter confirm password");

  // Create user if passwords match
  if (password_confirmation == password) {
    try {
      const response = await pinpixApi.post(usersPath, {
        email,
        password,
      });
      //Store the auth token on the phone
      SecureStore.setItemAsync(
        AsyncStorageItems.AUTH_TOKEN,
        response.data.auth_token
      );
      //Store the users id
      SecureStore.setItemAsync(AsyncStorageItems.ID, response.data.id);
      //Saves states and dispatches loginsuccess
      dispatch({
        type: ACTION_TYPES.LOGIN_SUCCESS,
        auth_token: response.data.auth_token,
        id: response.data.auth_token,
      });
    } catch (error) {
      dispatch({
        type: ACTION_TYPES.LOGIN_FAILURE,
        errorMessage: "Failed to Register",
      });
    }
  } else {
    password_error = "Passwords not the same";
    dispatch({
      type: ACTION_TYPES.LOGIN_FAILURE,
      errorMessage: "Passwords Not the same",
    });
  }
};

const login = (dispatch) => async ({ email, password }) => {
  dispatch({
    type: ACTION_TYPES.API_CALL,
  });
  // Authenticate user
  try {
    const response = await pinpixApi.post(authenticatePath, {
      email,
      password,
    });
    //Store the auth token on the phone
    SecureStore.setItemAsync(
      AsyncStorageItems.AUTH_TOKEN,
      response.data.auth_token
    );
    //Store the users id
    SecureStore.setItemAsync(AsyncStorageItems.ID, response.data.id);
    //TODO remove
    console.log(response.data);
    //Saves states and dispatches loginsuccess
    dispatch({
      type: ACTION_TYPES.LOGIN_SUCCESS,
      auth_token: response.data.auth_token,
      id: response.data.id,
    });
  } catch (error) {
    dispatch({
      type: ACTION_TYPES.LOGIN_FAILURE,
      errorMessage: error.response.data.error,
    });
  }
};

const getId = (dispatch) => async ({}) => {
  try {
    const response = await pinpixApi.get(authenticatePath, {});
    //Store the auth token on the phone
    SecureStore.setItemAsync(AsyncStorageItems.USER_ID, response.data.user_id);
    console.log(response.data);
    //Saves states and dispatches loginsuccess
    dispatch({
      type: ACTION_TYPES.GET_USER_ID,
      payload: response.data.auth_token,
    });
  } catch (error) {
    dispatch({
      //type: ACTION_TYPES.LOGIN_FAILURE,
      errorMessage: error.response.data.error,
    });
  }
};

const signout = (dispatch) => {
  return () => {
    try {
      alert("Trying to sign out");
      //Remove the auth token on the phone
      SecureStore.deleteItemAsync(AsyncStorageItems.AUTH_TOKEN);
      //Reset states
      dispatch({ type: ACTION_TYPES.LOGOUT });
    } catch (error) {}
  };
};

export const { Provider, Context } = createDataContext(
  AuthReducer,
  { login, register, signout, retrieveToken, clearErrorMessage },
  initialState
);
