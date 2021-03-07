import React from "react";
import { View, Text } from "react-native";
import { styles } from "../../assets/styles/styles";
const SearchScreen = ({ navigation, route }) => {
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.largeTextDark}>User Feed Screen</Text>
      <Text style={styles.mediumTextDark}>Here any user can leave a post with. Admins and Users who own their posts have the ability to delete posts </Text>
    </View>
  );
};

export default SearchScreen;
