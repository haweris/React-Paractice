import { ActionMap } from "../../_utils/interfaces";

const logger =
	(param: any) =>
	(_store: any) =>
	(next: Function) =>
	(action: ActionMap<any>) => {
		console.log("Loggind", param);
		next(action);
	};

export default logger;
