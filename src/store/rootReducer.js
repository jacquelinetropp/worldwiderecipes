import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import userReducer from "./user/userReducer";

export default combineReducers({
    user: userReducer,
    firebase: firebaseReducer,
    firesore: firestoreReducer
})
