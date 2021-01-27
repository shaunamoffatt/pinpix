import createDataContext from "./createDataContext";
import { AuthReducer, initialState } from "../store/reducers/auth_reducers";

//TODO find better place for api URLS
let apiUrl = "http://localhost:3000/";
let authenticatePath = "authenticate";
//TODO find a better place for this too
const STORAGE_TOKEN = "auth_token";

const storeToken = async () => {
  try {
    await AsyncStorage.setItem(STORAGE_TOKEN, JSON.stringify(auth_token));
    alert("Token successfully saved");
  } catch (error) {
    console.log("Failed to save auth_token", error);
  }
};

const getToken = async () => {
  try {
    let userData = await AsyncStorage.getItem(STORAGE_TOKEN);
    let data = JSON.parse(userData);
    console.log(data);
  } catch (error) {
    console.log("Something went wrong", error);
  }
};

const register = (dispatch) => {
  return ({ email, password }) => {
    console.log("register");
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
    dispatch({ type: "signout" });
  };
};

export const { Provider, Context } = createDataContext(
  AuthReducer,
  { login, register, signout },
  initialState
);
