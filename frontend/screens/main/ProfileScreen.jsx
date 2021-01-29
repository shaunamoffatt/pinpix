import React from "react";
import { View, Text } from "react-native";

import { styles } from "../styles";
const ProfileScreen = ({ navigation, route }) => {
  return (
      <View style={styles.container}>
        <Text style={styles.largeText}>Profile Screen</Text>
    </View>
  );
};

export default ProfileScreen;