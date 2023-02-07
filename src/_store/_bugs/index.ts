import { createSlice } from "@reduxjs/toolkit";
import { Bug } from "../../_utils/interfaces";
import { autoIncNumber } from "../../_utils/helperFunctions";

const count = autoIncNumber();

// SLICES
const slice = createSlice({
	name: "bugs",
	initialState: Array<Bug>,
	reducers: {
		bugAdded: (bugs, action) => {
			bugs.push({
				id: count.increment(),
				description: action.payload.description,
				resolved: false,
			});
		},
		bugUpdated: (bugs, action) => {
			const { id: updatedBugId, description, resolved }: Bug = action.payload;
			const bugToUpdate = bugs.find(({ id }) => id === updatedBugId);
			if (bugToUpdate) {
				bugToUpdate.description = description;
				bugToUpdate.resolved = resolved;
			}
		},
		bugRemoved: (bugs, action) => {
			const { id: removedBugId } = action.payload;
			const bugToRemove = bugs.find(({ id }) => id === removedBugId);
			if (bugToRemove) bugs.splice(bugs.indexOf(bugToRemove), 1);
		},
	},
});

export const { bugAdded, bugUpdated, bugRemoved } = slice.actions;
export default slice.reducer;
