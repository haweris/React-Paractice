import { createSlice } from "@reduxjs/toolkit";
import { SliceData, ProjectMap, Project } from "../../_utils/interfaces";
import { autoIncNumber } from "../../_utils/helperFunctions";

const count = autoIncNumber();
const sliceInfo: SliceData<ProjectMap> = {
	name: "projects",
	initialState: {},
};

const slice = createSlice({
	...sliceInfo,
	reducers: {
		ProjectAdded: (projects, action) => {
			const newId = count.increment();
			projects[newId] = {
				id: newId,
				description: action.payload.description,
				status: "pending",
			};
		},
		ProjectUpdated: (projects, action) => {
			const { id, description, status }: Project = action.payload;

			if (id) {
				const oldProject = projects[id];
				if (oldProject) {
					projects[id] = {
						...oldProject,
						description,
						status,
					};
				}
			}
		},
		ProjectRemoved: (projects, action) => {
			const { id } = action.payload;

			delete projects[id];
		},
	},
});

export const { ProjectAdded, ProjectUpdated, ProjectRemoved } = slice.actions;
export default slice.reducer;
