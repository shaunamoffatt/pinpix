import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import StartNavigator from "./navigation/StartNavigator";
import AuthNavigator from "./navigation/RootNavigator";

const AuthContext = createContext({});

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
