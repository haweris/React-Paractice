import { createSlice } from "@reduxjs/toolkit";
import { SliceData, Bug, BugMap, ActionMap } from "../../_utils/interfaces";
import { autoIncNumber } from "../../_utils/helperFunctions";

const count = autoIncNumber();
const sliceInfo: SliceData<BugMap> = {
	name: "bugs",
	initialState: {},
};

const slice = createSlice({
	...sliceInfo,
	reducers: {
		bugAdded: (bugs, action: ActionMap<Bug>) => {
			const newId = count.increment();
			const { priority, status } = action.payload;

			bugs[newId] = {
				id: newId,
				...action.payload,
				priority: priority ?? "normal",
				status: status ?? "pending",
			};
		},
		bugUpdated: (bugs, action: ActionMap<Bug>) => {
			const { id } = action.payload;

			if (id) {
				const oldBug = bugs[id];

				if (oldBug) {
					bugs[id] = {
						...oldBug,
						...action.payload,
					};
				}
			}
		},
		bugRemoved: (bugs, action: ActionMap<Bug>) => {
			const { id } = action.payload;

			delete bugs[id ?? 0];
		},
	},
});

export const { bugAdded, bugUpdated, bugRemoved } = slice.actions;
export default slice.reducer;
