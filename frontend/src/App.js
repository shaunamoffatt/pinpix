import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./navigation/RootNavigator";
import { Provider as AuthProvider } from "./context/AuthContext";
import { Provider as PaperProvider } from "react-native-paper";
import { registerRootComponent } from "expo"; // import it explicitly

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
    <PaperProvider>
      <AuthProvider>
        <NavigationContainer>
          <MainStackNavigator />
        </NavigationContainer>
      </AuthProvider>
    </PaperProvider>
  );
};

export default registerRootComponent(App); // this is how I register the App component
