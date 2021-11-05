import * as actions from "./userTypes";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc, getFirestore } from "firebase/firestore"; 

export const signUp =
  (data) =>
  async (dispatch, getState ) => {
    const firestore = getFirestore();
    dispatch({ type: actions.AUTH_START });
    try {
      // const res = await firebase
      //   .auth()
      //   .createUserWithEmailAndPassword(data.email, data.password);

      const auth = getAuth();
      const res = createUserWithEmailAndPassword(auth, data.email, data.password);
      const uid = getState().firebase.auth.uid;

      await setDoc(doc(firestore, "users", uid), {
        firstName: data.firstName,
        lastName: data.lastName,
      })

      // await firestore.collection("users").doc(res.user.uid).set({
      //   firstName: data.firstName,
      //   lastName: data.lastName,
      // });

      dispatch({ type: actions.AUTH_SUCCESS });
    } catch (err) {
      dispatch({ type: actions.AUTH_FAIL, payload: err.message });
    }
    dispatch({ type: actions.AUTH_END });
  };

export const signOut =
  () =>
  async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      await firebase.auth().signOut();
    } catch (err) {}
  };

export const signIn =
  (data) =>
  async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    dispatch({ type: actions.AUTH_START });
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password);
      dispatch({ type: actions.AUTH_SUCCESS });
    } catch (err) {
      dispatch({ type: actions.AUTH_FAIL, payload: err.message });
    }
    dispatch({ type: actions.AUTH_END });
  };

