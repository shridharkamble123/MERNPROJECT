import {
  USER_DETAILS_FAILURE,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_LIST_FAILURE,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constants/userLoginConstants";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { isLoading: true };

    case USER_LOGIN_SUCCESS:
      return { isLoading: false, userInfo: action.payload };

    case USER_LOGIN_FAILURE:
      return { isLoading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { isLoading: true };

    case USER_REGISTER_SUCCESS:
      return { isLoading: false, userInfo: action.payload };

    case USER_REGISTER_FAILURE:
      return { isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export const userDetailReducer = (state = { user: { } }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state,isLoading: true };

    case USER_DETAILS_SUCCESS:
      return { isLoading: false, user: action.payload };

    case USER_DETAILS_FAILURE:
      return { isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export const userListReducer = (state =  {users:[]} , action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { isLoading: true };

    case USER_LIST_SUCCESS:
      return { isLoading: false, users: action.payload };

    case USER_LIST_FAILURE:
      return { isLoading: false, error: action.payload };
    default:
      return state;
  }
};
