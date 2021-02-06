import React, { useEffect } from "react";
import createDataContext from "./createDataContext";
import { AuthReducer, initialState } from "../store/reducers/auth_reducers";
import { AsyncStorage } from "react-native";

import pinpixApi from "../api/pinpixApi";
//TODO find better place for api URLS
let apiUrl = "http://localhost:3000/";
let authenticatePath = "authenticate";
let usersPath = "users";
//TODO find a better place for this too
import AsyncStorageItems from "../constants/AsyncStorageItems";
import * as SecureStore from "expo-secure-store";

const retrieveToken = (dispatch) => async ({}) => {
  try {
    let token = await SecureStore.getItemAsync(AsyncStorageItems.AUTH_TOKEN);
    console.log("Token" + token);
    dispatch({ type: "RETRIEVE_TOKEN", auth_token: token });
  } catch (error) {
    console.log(
      "Something went wrong retrieving authtoken from storage",
      error
    );
  }
};

const setItem = async (name, data) => {
  try {
    await AsyncStorage.setItem(name, JSON.stringify(data));
    console.log("data stored");
  } catch (error) {
    // Error saving data
    console.log("AsyncStorage save error: " + error.message);
  }
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
      //Saves states and dispatches loginsuccess
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: response.data.auth_token,
      });
    } catch (error) {
      console.log(error.message);
      dispatch({
        type: "LOGIN_FAILURE",
      });
    }
  } else {
    ///password_error: "Passwords not the same";
    console.log(password_error);
  }
};

const login = (dispatch) => async ({ email, password }) => {
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
    //Saves states and dispatches loginsuccess
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: response.data.auth_token,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: "LOGIN_FAILURE",
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
      dispatch({ type: "LOGOUT" });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const { Provider, Context } = createDataContext(
  AuthReducer,
  { login, register, signout, retrieveToken },
  initialState
);
