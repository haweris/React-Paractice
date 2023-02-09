import { configureStore, combineReducers } from "@reduxjs/toolkit";
import users from "../_users";
import bugs from "../_bugs";
import projects from "../_projects";
import tags from "../_tags";
import logger from "../../_middleware/logger";

export default () => {
	return configureStore({
		reducer: {
			entities: combineReducers({
				users,
				bugs,
				projects,
				tags,
			}),
		},
		middleware: [logger("console")],
	});
};
