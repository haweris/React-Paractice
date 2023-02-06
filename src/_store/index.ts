import { createStore, compose } from "redux";
import * as reducers from "./_reducers";
import * as actions from "./_actions";

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const { bugReducer } = reducers;
const store = createStore(
	bugReducer,
	composeEnhancers()
);

export { reducers, actions };
export default store;
