// Import React and Component
import React, { useState, useEffect, fragment } from "react";
import { ActivityIndicator, View, StyleSheet, Image, Text } from "react-native";

class HomeScreen extends  React.Component {

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    // const data = await this.performTimeConsumingTask();
  }

  render() {
    return (
      <View style={styles.viewStyles}>
        <Text style={styles.textStyles}>HOME SCREEN</Text>
      </View>
    );
  }
}
export default HomeScreen

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
