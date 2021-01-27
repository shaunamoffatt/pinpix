import React, { useState, useContext } from "react";
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

import { Context as AuthContext } from "../../utils/AuthContext";


const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, login } = useContext(AuthContext);

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
          // this is used to set backgroundColor of label mask.<TouchableOpacity style={styles.buttonPink} onPress={() => login1()}>
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
          onPress={() => {
            login({ email, password });
          }}
        >
          <Text style={styles.colorWhite}>Login</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
};
export default LoginScreen;
