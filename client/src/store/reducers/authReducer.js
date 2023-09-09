import actionTypes from "../actions/actionTypes";

const initState = {
  isLogedIn: false,
  token: null,
  msg: "",
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_SUCCESS:
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLogedIn: true,
        msg: '',
        token: action.data,
      };
    case actionTypes.REGISTER_FAIL:
    case actionTypes.LOGIN_FAIL:
      return {
        ...state,
        isLogedIn: false,
        msg: action.data,
        token: null,
      };
      case actionTypes.LOGOUT:
        return {
            ...state,
            isLogedIn: false,
            msg: '',
            token: null,
        }
    default:
      return state;
  }
};

export default authReducer;
