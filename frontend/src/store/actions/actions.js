import * as ACTION_TYPES from "./action_types";

export const SUCCESS = {
  type: ACTION_TYPES.SUCCESS,
};

export const FAILURE = {
  type: ACTION_TYPES.FAILURE,
};

export const success = () => {
  return {
    type: ACTION_TYPES.SUCCESS,
  };
};

export const failure = () => {
  return {
    type: ACTION_TYPES.FAILURE,
  };
};

export const retrieve_token = () => {
  return {
    type: ACTION_TYPES.RETRIEVE_TOKEN,
  };
};

export const login_success = () => {
  return {
    type: ACTION_TYPES.LOGIN_SUCCESS,
  };
};

export const login_failure = () => {
  return {
    type: ACTION_TYPES.LOGIN_FAILURE,
  };
};

export const logout = () => {
  return {
    type: ACTION_TYPES.LOGOUT,
  };
};

export const register_successs = profile => {
  return {
    type: ACTION_TYPES.REGISTER_SUCCESS,
  };
};

export const user_input_change = text => {
  return {
    type: ACTION_TYPES.USER_INPUT_CHANGE,
    payload: text,
  };
};

export const user_input_submit = text => {
  return {
    type: ACTION_TYPES.USER_INPUT_SUBMIT,
    payload: text,
  };
};
