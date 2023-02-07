import React from "react";
import store, { actions } from "./_store";
import { getRandomInt } from "./_utils/helperFunctions";
import "./App.css";

function App() {
	const bugsList = store.getState() || [];
	const { bugAdded, bugUpdated, bugRemoved } = actions;
	const randomBugIndex = (): number => getRandomInt(0, bugsList.length);

	return (
		<div className="App">
			<header className="App-header">
				<button
					type="button"
					onClick={() => {
						store.dispatch(bugAdded("Bug" + bugsList.length));
					}}
				>
					Add
				</button>
				<button
					type="button"
					onClick={() => {
						const randomBug = bugsList[randomBugIndex()];
						store.dispatch(
							bugUpdated(randomBug, {
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
						const randomBug = bugsList[randomBugIndex()];
						store.dispatch(
							bugUpdated(randomBug, {
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
						const randomBug = bugsList[randomBugIndex()];
						store.dispatch(bugRemoved(randomBug?.id || 0));
					}}
				>
					remove
				</button>
			</header>
		</div>
	);
}

export default App;
