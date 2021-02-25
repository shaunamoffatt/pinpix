import React from "react";
import { View, Text } from "react-native";
import { styles } from "../../assets/styles/styles";

const ActivityScreen = ({ navigation, route }) => {
  return (
    <View style={styles.containerWhite}>
      <Text style={styles.largeTextDark}>Blog Screen</Text>
       <Text style={styles.mediumTextDark}>Here- there could be a place members (given access) could upload Blogs. Normal Users could view them</Text>
    </View>
  );
};

export default ActivityScreen;
