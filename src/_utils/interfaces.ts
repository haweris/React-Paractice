interface Bug {
  id?: number;
	description?: string;
	resolved?: boolean;
}

interface BugAction {
  type: string;
	payload: Bug;
}

export type { Bug, BugAction };
