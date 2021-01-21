import React from "react";
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
import Constants from 'expo-constants';
const { manifest } = Constants;

const SERVER_URL = (() => {
  // TODO - put a "prod" api server somewhere

  // Android / IOS - no CORS issue.
  if (!!manifest.debuggerHost) {
    return "http://" + manifest.debuggerHost.split(`:`).shift().concat(`:3000/`);
  } 
  // Expo Web client, making use of webpack.config.js for devServer proxy.
  else {
    return "./";
  }
})();

const setItem = async (name, data) => {
  try {
    await AsyncStorage.setItem(name, JSON.stringify(data));
    console.log("data stored");
  } catch (error) {
    // Error saving data
    console.log("AsyncStorage save error: " + error.message);
  }
};

let apiUrl = "http://localhost:3000/users";
let usersPath = "users";

class RegisterScreen extends React.Component {
  state = {
    email: "",
    emailError: "",
    password: "",
    password_confirmation: "",
    password_error: "",
  };

  register()
   {
     
    // If password not entered
    if (this.state.password == "") alert("Please enter Password");
    else if (this.state.password_confirmation == "")
      // If confirm password not entered
      alert("Please enter confirm password");

    if (this.state.password_confirmation == this.state.password) {
      fetch(apiUrl, {
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
        .then(response => response.json())
        .then(response => {
          alert(response.auth_token);
          this.props.navigation.navigate("Home");
        })
        .catch(error => {
          alert("fails");
          console.error(error);
        });
    } else {
      password_error: "Passwords not the same";
      console.log(password_error);
    }
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.largeText}>Create a new Account!</Text>
          <Hoshi
            label={"Email"}
            // this is used as active border color
            borderColor={"#d81159"}
            // this is used to set backgroundColor of label mask.
            // please pass the backgroundColor of your TextInput container.
            backgroundColor={"#FFF"}
            // onChangeText={this.passwordChanged.bind(this)}
            onChangeText={value => this.setState({ email: value })}
          />
          <Hoshi
            label={"Password"}
            // this is used as active border color
            borderColor={"#d81159"}
            // this is used to set backgroundColor of label mask.
            // please pass the backgroundColor of your TextInput container.
            backgroundColor={"#FFF"}
            // onChangeText={this.passwordChanged.bind(this)}
            onChangeText={value => this.setState({ password: value })}
            secureTextEntry
          />
          <Hoshi
            label={"Confirm Password"}
            // this is used as active border color
            borderColor={"#d81159"}
            // this is used to set backgroundColor of label mask.
            // please pass the backgroundColor of your TextInput container.
            backgroundColor={"#FFF"}
            // onChangeText={this.passwordChanged.bind(this)}
            onChangeText={value =>
              this.setState({ password_confirmation: value })}
            secureTextEntry
          />
          <TouchableOpacity
            style={styles.buttonPink}
            onPress={() => this.register()}
          >
            <Text style={styles.colorWhite}>Register</Text>
          </TouchableOpacity>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    );
  }
}
export default RegisterScreen;
