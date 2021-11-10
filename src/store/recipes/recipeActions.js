import * as actions from './recipeTypes';

export const createRecipe = (data) => async (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;

    dispatch({type: actions.CREATE_RECIPE_START});

    try {
        const newRecipe = {
            title: data.title,
            author: data.author,
            ingredients: [...data.ingredients],
            amount: [...data.amount],
            size: [...data.size],
            userId: userId
        }
        await firestore.collection("recipes").add(newRecipe);
        dispatch({type: actions.CREATE_RECIPE_SUCCESS})
    } catch(e) {
        dispatch({type: actions.CREATE_RECIPE_FAIL, payload: e})
        console.log(e);
    }
}

export const getRecipes = () => async (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;

    dispatch({type: actions.GET_RECIPE_START})
    try {
        // const unsub = onSnapshot(collection(firestore, "recipes"), doc => {
        //     console.log(unsub)
        // })
        // const recipeList = query(collection(firestore, "recipes"), where(userId, "==", "userId"));
        // dispatch({type: actions.GET_RECIPE_SUCCESS, payload: unsub})
    }catch(e) {
        dispatch({type: actions.GET_RECIPE_FAIL, payload: e})
        console.log(e);
    }
}