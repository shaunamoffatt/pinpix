import React from "react";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import { styles } from "../assets/styles/styles";
import Colors from "../constants/Colors";

const Spinner = ({ size }) => {
  return (
    <View >
      <ActivityIndicator
        size={size || "large"}
        color={Colors.pink}
        animating={true}
      />
    </View>
  );
};

export { Spinner };
