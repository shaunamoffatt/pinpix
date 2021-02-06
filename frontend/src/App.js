import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./navigation/RootNavigator";
import { Provider as AuthProvider } from "./context/AuthContext";
import { Provider as PaperProvider } from "react-native-paper";
import { registerRootComponent } from "expo"; // import it explicitly

const App = () => {
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
