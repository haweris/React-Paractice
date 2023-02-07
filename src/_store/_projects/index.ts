import { createSlice } from "@reduxjs/toolkit";
import { Project } from "../../_utils/interfaces";
import { autoIncNumber } from "../../_utils/helperFunctions";

const count = autoIncNumber();
// SLICES
const slice = createSlice({
	name: "projects",
	initialState: Array<Project>,
	reducers: {
		ProjectAdded: (projects, action) => {
			projects.push({
				id: count.increment(),
				description: action.payload.description,
				status: "pending",
			});
		},
		ProjectUpdated: (projects, action) => {
			const { id: updatedProjectId, description, status }: Project = action.payload;
			const ProjectToUpdate = projects.find(({ id }) => id === updatedProjectId);
			if (ProjectToUpdate) {
				ProjectToUpdate.description = description;
				ProjectToUpdate.status = status;
			}
		},
		ProjectRemoved: (projects, action) => {
			const { id: removedProjectId } = action.payload;
			const ProjectToRemove = projects.find(({ id }) => id === removedProjectId);
			if (ProjectToRemove) projects.splice(projects.indexOf(ProjectToRemove), 1);
		},
	},
});

export const { ProjectAdded, ProjectUpdated, ProjectRemoved } = slice.actions;
export default slice.reducer;
