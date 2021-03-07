import AsyncStorage from "@react-native-community/async-storage";
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

getData = async () => {
  try {
    const value = await AsyncStorage.getItem("@storage_Key");
    if (value !== null) {
      // value previously stored
    }
  } catch (e) {
    // error reading value
  }
};
