// Adapted of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/
// https://reactjs.org/docs/hooks-effect.html

import React, { useState, useContext, useEffect, useCallback } from "react";
import { View, Image } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { styles } from "../../assets/styles/styles";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../constants/Colors";

import { Context as AuthContext } from "../../context/AuthContext";
const SplashScreen = (props) => {
  const { state, retrieveToken } = useContext(AuthContext);

  useEffect(() => {
    console.log("using useeffect to retrieve Token ");
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      retrieveToken({});
    };
    bootstrapAsync();
  }, []);

  //const callforToken = useCallback(() => {
  //  retrieveToken({});
  //}, [state.isLoading]);

  return (
    <LinearGradient
      colors={[Colors.greenLight, Colors.greenDark]}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0277BD",
      }}
    >
      <ActivityIndicator size="large" color="#fff" animating={true} />
    </LinearGradient>
  );
};

export default SplashScreen;
