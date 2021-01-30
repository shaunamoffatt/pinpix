import * as ACTION_TYPES from "../actions/action_types";

export const initialState = {
  isLoading: true,
  userToken: null,
  userId: null,
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        userToken: action.token,
        userId: action.id,
        isLoading: false,
      };
    case ACTION_TYPES.LOGIN_FAILURE:
      return {
        ...state,
        userToken: null,
        isLoading: false,
      };
    case ACTION_TYPES.RETRIEVE_TOKEN:
      return {
        ...state,
        userToken: action.token,
        userId: action.id,
        isLoading: false,
      };
    case ACTION_TYPES.LOGOUT:
      return {
        ...state,
        userToken: null,
        userId: null,
        isLoading: false,
      };
    default:
      return state;
  }
};
