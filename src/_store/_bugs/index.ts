import { createSlice } from "@reduxjs/toolkit";
import { SliceData, Bug, BugMap } from "../../_utils/interfaces";
import { autoIncNumber } from "../../_utils/helperFunctions";

const count = autoIncNumber();
const sliceInfo: SliceData<BugMap> = {
	name: "bugs",
	initialState: {},
};

const slice = createSlice({
	...sliceInfo,
	reducers: {
		bugAdded: (bugs, action) => {
			const newId = count.increment();
			bugs[newId] = {
				id: newId,
				description: action.payload.description,
				resolved: false,
			};
		},
		bugUpdated: (bugs, action) => {
			const { id, description, resolved }: Bug = action.payload;

			if (id) {
				const oldBug = bugs[id];
				if (oldBug) {
					bugs[id] = {
						...oldBug,
						description,
						resolved,
					};
				}
			}
		},
		bugRemoved: (bugs, action) => {
			const { id } = action.payload;

			delete bugs[id];
		},
	},
});

export const { bugAdded, bugUpdated, bugRemoved } = slice.actions;
export default slice.reducer;
