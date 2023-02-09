import { createSlice } from "@reduxjs/toolkit";
import {
	SliceData,
	ActionMap,
	Project,
	ProjectMap,
} from "../../_utils/interfaces";
import { autoIncNumber } from "../../_utils/helperFunctions";

const count = autoIncNumber();
const sliceInfo: SliceData<ProjectMap> = {
	name: "projects",
	initialState: {},
};

const slice = createSlice({
	...sliceInfo,
	reducers: {
		projectAdded: (projects, action: ActionMap<Project>) => {
			const newId = count.increment();
			const { status, tagIds, bugIds } = action.payload;

			projects[newId] = {
				id: newId,
				...action.payload,
				status: status ?? "pending",
				tagIds: tagIds ?? [],
				bugIds: bugIds ?? [],
			};
		},
		projectUpdated: (projects, action: ActionMap<Project>) => {
			const { id } = action.payload;

			if (id) {
				const oldProject = projects[id];

				if (oldProject) {
					projects[id] = {
						...oldProject,
						...action.payload,
					};
				}
			}
		},
		projectRemoved: (projects, action: ActionMap<Project>) => {
			const { id } = action.payload;

			delete projects[id ?? 0];
		},
	},
});

export const { projectAdded, projectUpdated, projectRemoved } = slice.actions;
export default slice.reducer;
