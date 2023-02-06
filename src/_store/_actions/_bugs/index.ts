import { BUG_ADDED, BUG_UPDATED, BUG_REMOVED } from "../_types";
import { Bug, BugAction } from "../../../_utils/interfaces";

export const bugAdded = (description: string): BugAction => ({
	type: BUG_ADDED,
	payload: { description },
});

export const bugUpdated = (currentState: Bug, newState: Bug): BugAction =>
{
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
