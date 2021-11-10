import * as actions from "./userTypes";

const initialState = {
  error: null,
  loading: false,
  orders: {
    loading: false,
    error: null,
    items: []
  },
  user: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.AUTH_START:
      return {
        ...state,
        loading: true,
      };
    case actions.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        user: payload
      };
    case actions.AUTH_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
