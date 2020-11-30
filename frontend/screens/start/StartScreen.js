import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import logo from "../../assets/logo.png";

 import { styles } from '../styles'

class StartScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.image} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.colorWhite}>Go to Sign In!</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonWhitePinkBorder}>
          <Text style={styles.colorPink}>No Account yet?! Sign up!</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
  }
}

export default StartScreen;


