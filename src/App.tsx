import React from "react";
import "./App.css";

import configureStore from "./_store/config";
import { bugAdded, bugUpdated, bugRemoved } from "./_store/_bugs";

import { getRandomInt } from "./_utils/helperFunctions";
import { Bug } from "./_utils/interfaces";

function App() {
	const store = configureStore();
  const { getState } = store;

	let bugsList = getState();
	const unsubscribe = store.subscribe(() => {
		bugsList = getState();
  });

	const randomBugIndex = (): number => getRandomInt(0, bugsList.length);

	return (
		<div className="App">
			<header className="App-header">
				<button
					type="button"
					onClick={() => {
						store.dispatch(bugAdded({ description: "Bug" + bugsList.length }));
					}}
				>
					Add
				</button>
				<button
					type="button"
					onClick={() => {
						const randomBug: Bug = bugsList[randomBugIndex()];
						store.dispatch(
							bugUpdated({
								...randomBug,
								description: `Bug${randomBugIndex()}`,
							})
						);
					}}
				>
					Update Description
				</button>
				<button
					type="button"
					onClick={() => {
						const randomBug: Bug = bugsList[randomBugIndex()];
						store.dispatch(
							bugUpdated({
								...randomBug,
								resolved: !randomBug.resolved,
							})
						);
					}}
				>
					Update Resolved
				</button>
				<button
					type="button"
					onClick={() => {
						const randomBug: Bug = bugsList[randomBugIndex()];
						store.dispatch(bugRemoved({ id: randomBug?.id || 0 }));
					}}
				>
					remove
				</button>
			</header>
		</div>
	);
}

export default App;
