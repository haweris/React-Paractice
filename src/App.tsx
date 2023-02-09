import React from "react";
import "./App.css";

import configureStore from "./_store/_config";
import { bugAdded, bugUpdated, bugRemoved } from "./_store/_bugs";

import { getRandomInt } from "./_utils/helperFunctions";
import { Bug } from "./_utils/interfaces";

function App() {
	const store = configureStore();
	const { getState } = store;

	let { bugs } = getState().entities;

	const getBugsIntKeys = (): number[] =>
		Object.keys(bugs).map((key) => parseInt(key));

	let bugIds = getBugsIntKeys();
	const getRandomBugId = (): number => bugIds[getRandomInt(0, bugIds.length)];
	const getRandomBug = (): Bug => bugs[getRandomBugId()];

	const unsubscribe = store.subscribe(() => {
		bugs = getState().entities.bugs;
		bugIds = getBugsIntKeys();
	});

	return (
		<div className="App">
			<header className="App-header">
				<button
					type="button"
					onClick={() => {
						store.dispatch(bugAdded({ description: "Bug" + bugIds.length }));
					}}
				>
					Add
				</button>
				<button
					type="button"
					onClick={() => {
						store.dispatch(
							bugUpdated({
								...getRandomBug(),
								description: `Bug${getRandomBugId()}`,
							})
						);
					}}
				>
					Update Description
				</button>
				<button
					type="button"
					onClick={() => {
						store.dispatch(bugRemoved({ id: getRandomBug()?.id || 0 }));
					}}
				>
					remove
				</button>
			</header>
		</div>
	);
}

export default App;
