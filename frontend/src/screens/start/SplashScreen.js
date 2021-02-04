// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, { useState, useEffect, fragment } from "react";
import { ActivityIndicator, View, StyleSheet, Image, Text } from "react-native";
import { styles } from "../../assets/styles/styles";
class SplashScreen extends React.Component {

  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve("result");
      }, 100)
    );
  };

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (
      <View style={styles.viewStyles}>
        <Text style={styles.textStyles}>Blitz Reading</Text>
      </View>
    );
  }
}

export default SplashScreen;

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange"
  },
  textStyles: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold"
  }
};
