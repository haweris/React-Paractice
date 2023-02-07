import { createStore, compose } from "redux";
import reducer from "../_bugs";

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const configureStore = () =>
{
  const store = createStore(reducer, composeEnhancers());
  return store
};

export default configureStore;
