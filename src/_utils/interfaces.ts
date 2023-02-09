interface EntitiesMap<T> {
	[key: number]: T;
}

interface SliceData<T> {
	name: string;
	initialState: T;
}

interface ActionMap<T> {
	type: string;
	payload: T;
}

type User = {
	id?: number;
	firstName?: string;
	lastName?: string;
	username?: string;
	email?: string;
	password?: string;
	status?: "inactive" | "active";
	projectIds?: string;
	bugIds?: string;
};

type LoginCredentials = {
	username: string;
	password: string;
};

type UserMap = EntitiesMap<User>;

type Bug = {
	id?: number;
	description?: string;
	priority?: "low" | "normal" | "high" | "urgent";
	status?: "pending" | "inProgress" | "completed" | "testing" | "resolved";
	projectId?: number;
	creatorId?: number;
	assigneeId?: number;
};

type BugMap = EntitiesMap<Bug>;

type Project = {
	id?: number;
	name?: string;
	description?: string;
	status?: "pending" | "inProgress" | "completed" | "testing" | "delivered";
	tagIds?: number[];
	bugIds: number[];
	assigneeIds?: number[];
};

type ProjectMap = EntitiesMap<Project>;

type Tag = {
	id?: number;
	title?: string;
};

type TagMap = EntitiesMap<Tag>;

export type {
	SliceData,
	ActionMap,
	User,
	LoginCredentials,
	UserMap,
	Bug,
	BugMap,
	Project,
	ProjectMap,
	Tag,
	TagMap,
};
