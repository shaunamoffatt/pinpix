import React, { useState, useContext, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "../screens/start/SplashScreen";

import BottomTabNavigator from "./BottomTabNavigator";

import AuthStackNavigator from "./AuthStackNavigator";

import { Context as AuthContext } from "../context/AuthContext";

const RootStack = createStackNavigator();

//https://reactnavigation.org/docs/auth-flow/
const RootNavigator = ({}) => {
  const { state } = useContext(AuthContext);

  if (state.isLoading) {
    // We haven't finished checking for the token yet
    return <SplashScreen />;
  }

  return (
    <RootStack.Navigator>
      {state.auth_token === null ? (
        // If not logged in, the user will be shown this route
        <RootStack.Screen
          name="Auth"
          component={AuthStackNavigator}
          options={{ headerShown: false }}
        />
      ) : (
        // When logged in, the user will be shown this route
        <RootStack.Screen
          name="pinpix"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
      )}
    </RootStack.Navigator>
  );
};

export default RootNavigator;
