import React from "react";
import { View, Text } from "react-native";
import { styles } from "../../assets/styles/styles";
const ActivityScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.largeText}>ActivityScreen</Text>
    </View>
  );
};

export default ActivityScreen;
