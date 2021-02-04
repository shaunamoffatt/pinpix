import createDataContext from "./createDataContext";
import { AuthReducer, initialState } from "../store/reducers/auth_reducers";
import { AsyncStorage } from "react-native";

//TODO find better place for api URLS
let apiUrl = "http://localhost:3000/";
let authenticatePath = "authenticate";
let usersPath = "users";
//TODO find a better place for this too
import AsyncStorageItems from "../constants/AsyncStorageItems";

const storeToken = async () => {
  try {
    await AsyncStorage.setItem(
      AsyncStorageItems.AUTH_TOKEN,
      JSON.stringify(auth_token)
    );
    alert("Token successfully saved");
  } catch (error) {
    console.log("Failed to save auth_token", error);
  }
};

const removeToken = async () => {
  try {
    await AsyncStorage.setItem(AsyncStorageItems.AUTH_TOKEN, null);
    alert("Token successfully removed");
  } catch (error) {
    console.log("Failed to remove auth_token", error);
  }
};

const getToken = async () => {
  try {
    let userData = await AsyncStorage.getItem(AsyncStorageItems.AUTH_TOKEN);
    let data = JSON.parse(userData);
    console.log(data);
  } catch (error) {
    console.log("Something went wrong", error);
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

const register = (dispatch) => {
  return ({ email, password, password_confirmation }) => {
    console.log("register");
    // If password not entered
    if (password == "") alert("Please enter Password");
    else if (password_confirmation == "")
      // If confirm password not entered
      alert("Please enter confirm password");

    if (password_confirmation == password) {
      alert("Passwords match");
      fetch(`${apiUrl}/${usersPath}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          alert(response.auth_token);
          //this.props.navigation.navigate("Home");
        })
        .catch((error) => {
          alert("fails");
          console.error(error);
        });
    } else {
      password_error: "Passwords not the same";
      console.log(password_error);
    }
  };
};

const login = (dispatch) => {
  return ({ email, password }) => {
    // Do some API Request here
    console.log("LOGIN");
    alert(email);
    fetch(`${apiUrl}/${authenticatePath}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        storeToken(JSON.stringify(response.auth_token));
        alert("auth_token : " + response.auth_token);
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: {
            token: response.auth_token,
            email,
          },
        });
      })
      .catch((error) => {
        alert("fails");
        console.error(error);
        dispatch({
          type: "LOGIN_FAILURE",
        });
      });
  };
};

const signout = (dispatch) => {
  return () => {
    alert("Trying to sign out");
    dispatch({ type: "LOGOUT" });
  };
};

export const { Provider, Context } = createDataContext(
  AuthReducer,
  { login, register, signout },
  initialState
);
