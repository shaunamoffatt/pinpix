import React, { useContext } from "react";

import { Context as AuthContext } from "../../context/AuthContext";
import AuthForm from "../../components/AuthForm";

const RegisterScreen = (props) => {
  const { state, register } = useContext(AuthContext);

  return (
    <AuthForm
      headerText="Create a new account"
      passwordConfirm={true}
      buttonText="Register"
      onSubmit={register}
      errorMessageText={state.errorMessage}
      buttonLoadDisplay={state.callingApi}
    />
  );
};
export default RegisterScreen;
