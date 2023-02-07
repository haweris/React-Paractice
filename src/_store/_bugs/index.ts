import { createAction, createReducer } from "@reduxjs/toolkit";
import { Bug } from "../../_utils/interfaces";
import { autoIncNumber } from "../../_utils/helperFunctions";

// ACTIONS
export const bugAdded = createAction<Bug>("bugAdded");
export const bugUpdated = createAction<Bug>("bugUpdated");
export const bugRemoved = createAction<Bug>("bugRemoved");

// REDUCERS
const reducer = createReducer<Bug[]>([], {
	[bugAdded.type]: (bugs, action) => {
		bugs.push({
			id: autoIncNumber(),
			description: action.payload.description,
			resolved: false,
		});
	},
	[bugUpdated.type]: (bugs, action) => {
		const { id: updatedBugId, description, resolved }: Bug = action.payload;
		const bugToUpdate = bugs.find(({ id }) => id === updatedBugId);
		if (bugToUpdate) {
			bugToUpdate.description = description;
			bugToUpdate.resolved = resolved;
		}
	},
	[bugRemoved.type]: (bugs, action) => {
		const { id: removedBugId } = action.payload;
		const bugToRemove = bugs.find(({ id }) => id === removedBugId);
		if (bugToRemove) bugs.splice(bugs.indexOf(bugToRemove), 1);
	},
});

export default reducer;
