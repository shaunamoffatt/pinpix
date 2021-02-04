import React from "react";
import { View, Text } from "react-native";
import { styles } from "../../assets/styles/styles";
const AllPinsScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.largeText}>AllPinsScreen</Text>
    </View>
  );
};

export default AllPinsScreen;
