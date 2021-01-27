import React, { useState, useReducer } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
//fancy inputs
import { Hoshi } from "react-native-textinput-effects";
import { styles } from "../styles";

//TODO find better place for api URLS
let apiUrl = "http://localhost:3000/";
let authenticatePath = "authenticate";
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const STORAGE_TOKEN = "auth_token";
class LoginScreen extends React.Component {
  async storeToken(auth_token) {
    try {
      await AsyncStorage.setItem(STORAGE_TOKEN, JSON.stringify(auth_token));
      alert("Token successfully saved");
    } catch (error) {
      console.log("Failed to save auth_token", error);
    }
  }

  async getToken(user) {
    try {
      let userData = await AsyncStorage.getItem(STORAGE_TOKEN);
      let data = JSON.parse(userData);
      console.log(data);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }

  login() {
    alert(this.state.email);
    fetch(`${apiUrl}/${authenticatePath}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        this.storeToken(JSON.stringify(response.auth_token));
        alert("auth_token : " + response.auth_token);
        this.props.navigation.navigate("Home");
      })
      .catch((error) => {
        alert("fails");
        console.error(error);
      });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.largeText}>Welcome back!</Text>
          <Hoshi
            label={"Email"}
            // this is used as active border color
            borderColor={"#d81159"}
            width={"75%"}
            // this is used to set backgroundColor of label mask.
            // please pass the backgroundColor of your TextInput container.
            backgroundColor={"#FFF"}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
          />
          <Hoshi
            label={"Password"}
            // this is used as active border color
            borderColor={"#d81159"}
            width={"75%"}
            // this is used to set backgroundColor of label mask.
            // please pass the backgroundColor of your TextInput container.
            backgroundColor={"#FFF"}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
          />
          <TouchableOpacity
            style={styles.buttonPink}
            onPress={() => this.login()}
          >
            <Text style={styles.colorWhite}>Login</Text>
          </TouchableOpacity>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    );
  }
}
export default LoginScreen;
