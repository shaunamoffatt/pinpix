import React, { useState, useContext } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
//fancy inputs
import { Hoshi } from "react-native-textinput-effects";
import { styles } from "../../assets/styles/styles";
import Colors from "../../constants/Colors";
import { Context as AuthContext } from "../../context/AuthContext";

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, login } = useContext(AuthContext);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.largeText}>Welcome back!</Text>
        <Hoshi
          label={"Email"}
          borderColor={Colors.pink}
          width={"75%"}
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
          width={"75%"}
          backgroundColor={"#FFF"}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
        />
        {state.errorMessage ? (
          <Text style={styles.errorMessage}>{state.errorMessage}</Text>
        ) : null}
        <TouchableOpacity
          style={styles.buttonPink}
          onPress={() => {
            login({ email, password });
          }}
        >
          <Text style={styles.colorWhite}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default LoginScreen;
