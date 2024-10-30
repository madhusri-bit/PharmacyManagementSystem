import { SET_USER, CLEAR_USER } from "../actions/userActions";

const initialState = {
  name: "",
  email: "",
  phone: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload,
      };
    case CLEAR_USER:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
