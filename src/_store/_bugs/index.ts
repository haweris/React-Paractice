import { Bug, BugAction } from "../../_utils/interfaces";
import { autoIncNumber } from "../../_utils/helperFunctions";

// ACTION_TYPES
const BUG_ADDED = "bugAdded";
const BUG_UPDATED = "bugUpdated";
const BUG_REMOVED = "bugRemoved";

// ACTIONS
export const bugAdded = (description: string): BugAction => ({
	type: BUG_ADDED,
	payload: { description },
});

export const bugUpdated = (currentState: Bug, newState: Bug): BugAction => {
	const { id, description, resolved } = currentState;
	const { description: newDescription, resolved: newResolved } = newState;

	return {
		type: BUG_UPDATED,
		payload: {
			id,
			description: newDescription ?? description,
			resolved: newResolved ?? resolved,
		},
	};
};

export const bugRemoved = (id: number): BugAction => ({
	type: BUG_REMOVED,
	payload: { id },
});

// REDUCERS
export const crudReducer = (
	state: Array<Bug> = [],
	action: {
		type: string;
		payload: Bug;
	}
): Array<Bug> => {
	switch (action.type) {
		case BUG_ADDED:
			state.push({
				id: autoIncNumber(),
				description: action.payload.description,
				resolved: false,
			});
			break;
		case BUG_UPDATED:
			const { id: updatedBugId, description, resolved }: Bug = action.payload;
			const bugToUpdate = state.find(({ id }) => id === updatedBugId);
			if (bugToUpdate) {
				bugToUpdate.description = description;
				bugToUpdate.resolved = resolved;
			}
			break;
		case BUG_REMOVED:
			const { id: removedBugId } = action.payload;
			const bugToRemove = state.find(({ id }) => id === removedBugId);
			if (bugToRemove) state.splice(state.indexOf(bugToRemove), 1);
	}
	return state;
};
