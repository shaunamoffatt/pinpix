import React, { useState, useContext } from "react";

import {
  Text,
  View,
  ScrollView,
  KeyBoardAvoidingView,
  TouchableOpacity,
} from "react-native";
//fancy inputs
import { Hoshi } from "react-native-textinput-effects";
import Colors from "../../constants/Colors";
import { styles } from "../../assets/styles/styles";

import { Context as AuthContext } from "../../context/AuthContext";

const RegisterScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const { state, register } = useContext(AuthContext);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.largeText}>Create a new Account!</Text>
        <Hoshi
          label={"Email"}
          borderColor={Colors.pink}
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
          borderColor={Colors.pink}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Hoshi
          label={"Confirm Password"}
          borderColor={Colors.pink}
          backgroundColor={"#FFF"}
          value={password_confirmation}
          onChangeText={setPasswordConfirmation}
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.buttonPink}
          onPress={() => {
            register({ email, password, password_confirmation });
          }}
        >
          <Text style={styles.colorWhite}>Register</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default RegisterScreen;
