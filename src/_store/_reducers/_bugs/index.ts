import { Bug } from "../../../_utils/interfaces";
import { autoIncNumber } from "../../../_utils/helperFunctions";
import { types } from "../../_actions";

const bugReducer = (
	state: Array<Bug> = [],
	action: {
		type: string;
		payload: Bug;
	}
): Array<Bug> => {
	const { BUG_ADDED, BUG_UPDATED, BUG_REMOVED } = types;
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

export default bugReducer;
