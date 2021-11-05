import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from './rootReducer';
import { getFirebase } from 'react-redux-firebase';


const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose; 

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk.withExtraArgument(getFirebase))))

export default store;
