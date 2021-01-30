import React from "react";
import { View, Text, Animated } from "react-native";
import { styles } from "../styles";
import { useFadeIn } from "../../hooks/fadeIn";
const CreatePinScreen = ({ navigation, route }) => {
  return (
    <Animated.View>
    <View style={styles.container}>
      <Text style={styles.largeText}>Create Pin Screen</Text>
    </View>
    </Animated.View>
  );
};

export default CreatePinScreen;
