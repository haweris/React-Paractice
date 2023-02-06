const createStore = (reducer: Function) => {
	let state: any;
	const listeners: Array<Function> = [];

	const getState = (): any => state;
	const dispatch = (action = {}) => {
		state = reducer(state, action);

		listeners.forEach((listener: Function) => listener());
	};
	const subscribe = (listener: Function) => {
		listeners.push(listener);
	};

	return {
		getState,
		dispatch,
		subscribe,
	};
};

export { createStore };
