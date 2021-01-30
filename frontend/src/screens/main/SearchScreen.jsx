import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles";
const SearchScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.largeText}>Search Screen</Text>
    </View>
  );
};

export default SearchScreen;
