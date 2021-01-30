import React, { useState, useEffect, fragment } from "react";
import { ActivityIndicator, View, StyleSheet, Image, Text } from "react-native";
import { styles } from "../styles";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.largeText}>HOME SCREEN</Text>
      </View>
    );
  }
}
export default HomeScreen;


