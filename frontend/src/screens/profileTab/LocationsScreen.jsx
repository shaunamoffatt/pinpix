import React from "react";
import { View, Text } from "react-native";
import { styles } from "../../assets/styles/styles";
const LocationsScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.largeText}>LocationsScreen</Text>
    </View>
  );
};

export default LocationsScreen;
