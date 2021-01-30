import AsyncStorage from "@react-native-community/async-storage";

storeData = async () => {
  try {
    await AsyncStorage.setItem("@storage_Key", "stored value");
  } catch (e) {
    // saving error
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
