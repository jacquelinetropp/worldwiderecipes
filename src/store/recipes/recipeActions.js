import * as actions from './recipeTypes';
import {doc, where, query, collection, onSnapshot, getFirestore} from 'firebase/firestore';


export const createRecipe = (data) => async (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;

    dispatch({type: actions.CREATE_RECIPE_START});

    try {

        dispatch({type: actions.CREATE_RECIPE_SUCCESS})
    } catch(e) {
        dispatch({type: actions.CREATE_RECIPE_FAIL, payload: e})
    }
}

export const getRecipes = () => async (dispatch, getState) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;

    dispatch({type: actions.GET_RECIPE_START})
    try {
        // const unsub = onSnapshot(collection(firestore, "recipes"), doc => {
        //     console.log(unsub)
        // })
        const recipeList = query(collection(firestore, "recipes"), where(userId, "==", "userId"));
        // dispatch({type: actions.GET_RECIPE_SUCCESS, payload: unsub})
    }catch(e) {
        dispatch({type: actions.GET_RECIPE_FAIL, payload: e})
        console.log(e);
    }
}