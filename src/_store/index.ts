import { createStore, compose } from "redux";
import * as actions from "./_bugs";

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(actions.crudReducer, composeEnhancers());

export { actions };
export default store;
