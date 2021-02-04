import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import logo from "../../assets/logo.png";

import { styles } from "../styles";

const StartScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={(styles.contentContainer )}>
        <Image source={logo} style={styles.image} />
        <TouchableOpacity
          style={styles.buttonPink}
          onPress={() => {
            props.navigation.navigate("Login");
          }}
        >
          <Text style={styles.colorWhite}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonWhite}
          onPress={() => {
            props.navigation.navigate("Register");
          }}
        >
          <Text style={styles.colorPink}>No Account yet?! Sign up!</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </View>
  );
};

export default StartScreen;
