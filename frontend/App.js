import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./navigation/RootNavigator";
import { Provider as AuthProvider } from "./utils/AuthContext";
import Colors from "./constants/Colors";

const App = () => {
  const [isLoading, setIsLoading] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);



  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={Colors.pink} />
      </View>
    );
  }
  return (
    <AuthProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
