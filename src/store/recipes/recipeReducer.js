import * as actions from "./recipeTypes";

const initialState = {
  error: null,
  loading: false,
  recipes: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.GET_RECIPE_START:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_RECIPE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        recipes: payload,
      };
    case actions.GET_RECIPE_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case actions.CREATE_RECIPE_START:
      return {
        ...state,
        loading: true,
      };
    case actions.CREATE_RECIPE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
      };
    case actions.CREATE_RECIPE_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
