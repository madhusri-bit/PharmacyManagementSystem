import { combineReducers } from "redux";
import medicineReducer from "./medicineReducer";
import userReducer from "./userReducer"; // Import the user reducer

const rootReducer = combineReducers({
  medicine: medicineReducer,
  user: userReducer, // Add the user reducer
});

export default rootReducer;
