import { StatusBar } from "expo-status-bar";
import React from "react";

import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import logo from "../../assets/hometreewhite.png";
import hands from "../../assets/onboarding/hands.png";
import { styles } from "../../assets/styles/styles";
import { Video } from "expo";

const MembersAuthScreen = (props) => {
  return (
    <View style={styles.containerWhite}>
      <View style={styles.contentContainer}>
        <Text style={styles.largeTextDark}>Member- ships</Text>
        <Text style={styles.mediumTextDark}>*Details and imagery on membership meaning etc</Text>
        <TouchableOpacity
          style={styles.buttonPink}
          onPress={() => {
            props.navigation.navigate("Login");
          }}
        >
          <Text style={styles.colorWhite}>Login to Members Account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonPink}
          onPress={() => {
            props.navigation.navigate("Register");
          }}
        >
          <Text style={styles.colorWhite}>Register as Member</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </View>
  );
};

export default MembersAuthScreen;
