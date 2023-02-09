import { ActionMap } from "../../_utils/interfaces";

const signUp = (store: any) => (next: Function) => (action: ActionMap<any>) => {
	const { firstName, lastName, username, email, status } = action.payload;

	// users[newId] = {
	// 	id: newId,
	// 	...action.payload,
	// 	username:
	// 		username ??
	// 		(email?.split("@")[0] ||
	// 			`${firstName}.${lastName}.${[1, 2, 3]
	// 				.map((num) => num * getRandomInt(0, 100))
	// 				.join("")}`),
	// 	status: status ?? "inactive",
	// };
};
