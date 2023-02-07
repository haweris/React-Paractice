interface Bug {
	id?: number;
	description?: string;
	resolved?: boolean;
}

interface Project {
	id?: number;
	description?: string;
	status?: "pending" | "started" | "completed" | "delivered" | "ended";
}

export type { Bug, Project };
