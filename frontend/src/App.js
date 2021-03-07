import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { Provider as AuthProvider } from "./context/AuthContext";
import { Provider as PostProvider } from "./context/PostContext";
import RootNavigator from "./navigation/RootNavigator";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { Colors } from "./constants/Colors";
import { registerRootComponent } from "expo"; // import it explicitly
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#E17E66",
    accent: "#8D9A60",
  },
};
const App = () => {
  return (
    <PaperProvider theme={theme}>
      <AuthProvider>
        <PostProvider>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </PostProvider>
      </AuthProvider>
    </PaperProvider>
  );
};

export default registerRootComponent(App); // this is how I register the App component
