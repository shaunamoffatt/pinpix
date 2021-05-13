import React from "react";
import { View, Text } from "react-native";
import { styles } from "../../assets/styles/styles";
const SearchScreen = ({ navigation, route }) => {
  return (
     <View style={styles.containerWhite}>
      <Text style={styles.largeTextDark}> Search</Text>
      <Text style={styles.mediumTextDark}> Here is where the user could seach for posts by location </Text>
    </View>
  );
};

export default SearchScreen;
