import React, { useState } from "react";

import {
  Text,
  View,
  ScrollView,
  KeyBoardAvoidingView,
  TouchableOpacity,
} from "react-native";
//fancy inputs
import { Hoshi } from "react-native-textinput-effects";
import Colors from "../constants/Colors";
import { styles } from "../assets/styles/styles";
import { Spinner } from "./Spinner";

const AuthForm = ({
  headerText,
  passwordConfirm = false,
  buttonText,
  onSubmit,
  errorMessageText,
  buttonLoadDisplay
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const renderButton = () => {
    //TODO: Fix to have spinner when calling
    if (buttonLoadDisplay) {
      return (
        <View style={styles.buttonWhite}>
          <Spinner size="small" />
        </View>
      );
    }
    return (
      <TouchableOpacity
        style={styles.buttonPink}
        onPress={() => {
          passwordConfirm
            ? onSubmit({ email, password, password_confirmation })
            : onSubmit({ email, password });
        }}
      >
        <Text style={styles.colorWhite}>{buttonText}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.containerWhite}>
      <View style={styles.contentContainer}>
        <Text style={styles.largeTextDark}>{headerText}</Text>
        {/* Display Error Messages returned from the API */}
        {errorMessageText ? (
          <Text style={styles.errorMessage}>{errorMessageText}</Text>
        ) : null}
        {/* {callingApi ? <Text>TRUE</Text> : <Text>FALSE</Text>} */}
        <Hoshi
          label={"Email"}
          borderColor={Colors.earthGreen}
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
          borderColor={Colors.earthGreen}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {passwordConfirm ? (
          <Hoshi
            label={"Confirm Password"}
            borderColor={Colors.earthGreen}
            backgroundColor={"#FFF"}
            value={password_confirmation}
            onChangeText={setPasswordConfirmation}
            secureTextEntry
          />
        ) : null}

        {renderButton()}
      </View>
    </ScrollView>
  );
};
export default AuthForm;
