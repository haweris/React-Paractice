interface EntitiesMap<T> {
	[key: number]: T;
}

interface SliceData<T>
{
  name: string,
  initialState: T
}

interface Bug {
	id?: number;
	description?: string;
	resolved?: boolean;
}

type BugMap = EntitiesMap<Bug>;

interface Project {
	id?: number;
	description?: string;
	status?: "pending" | "started" | "completed" | "delivered" | "ended";
}

type ProjectMap = EntitiesMap<Project>;

export type { SliceData, Bug, BugMap, Project, ProjectMap };
