import React, { useState, useContext } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Context as AuthContext } from "../../context/AuthContext";
import AuthForm from "../../components/AuthForm";
import { NavigationEvents } from "react-navigation";
const LoginScreen = (props) => {
  const { state, login, clearErrorMessage } = useContext(AuthContext);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        clearErrorMessage();
      };
    }, [])
  );

  return (
    <AuthForm
      headerText="Welcome back!"
      passwordConfirm={false}
      buttonText="Login"
      onSubmit={login}
      errorMessageText={state.errorMessage}
      buttonLoadDisplay={state.callingApi}
    >
    </AuthForm>
  );
};
export default LoginScreen;
