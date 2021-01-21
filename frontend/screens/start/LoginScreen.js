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
  AsyncStorage
} from "react-native";
//fancy inputs
import { withNavigation } from "react-navigation";
import { Hoshi } from "react-native-textinput-effects";
import { styles } from "../styles";

let apiUrl = "http://localhost:3000/";
let authenticatePath = "authenticate";

class LoginScreen extends React.Component {
  state = {
    email: "",
    password: "",
      userdata: {}
  };

  async storeToken(user) {
    try {
       await AsyncStorage.setItem("userData", JSON.stringify(user));
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }
  async getToken(user) {
    try {
      let userData = await AsyncStorage.getItem("userData");
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
      .then(response => response.json())
      .then(response => {
        this.storeToken(JSON.stringify(response.auth_token));
        alert("auth_token : " + response.auth_token);
        this.props.navigation.navigate("Home");
      })
      .catch(error => {
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
            onChangeText={value => this.setState({ email: value })}
          />
          <Hoshi
            label={"Password"}
            // this is used as active border color
            borderColor={"#d81159"}
            width={"75%"}
            // this is used to set backgroundColor of label mask.
            // please pass the backgroundColor of your TextInput container.
            backgroundColor={"#FFF"}
            onChangeText={value => this.setState({ password: value })}
            secureTextEntry
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

export default withNavigation(LoginScreen);
