import React, { useState, useContext } from "react";

import { Context as AuthContext } from "../../context/AuthContext";
import AuthForm from "../../components/AuthForm";

const LoginScreen = (props) => {
  const { state, login } = useContext(AuthContext);

  return (
    <AuthForm
      headerText="Welcome back!"
      passwordConfirm={false}
      buttonText="Login"
      onSubmit={login}
      errorMessageText={state.errorMessage}
    />
  );
};
export default LoginScreen;
