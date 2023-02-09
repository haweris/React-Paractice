import { createSlice } from "@reduxjs/toolkit";
import {
	SliceData,
	ActionMap,
	User,
	LoginCredentials,
	UserMap,
} from "../../_utils/interfaces";
import { autoIncNumber, getRandomInt } from "../../_utils/helperFunctions";

const count = autoIncNumber();
const sliceInfo: SliceData<UserMap> = {
	name: "users",
	initialState: {},
};

const slice = createSlice({
	...sliceInfo,
	reducers: {
		userSignUp: (users, action: ActionMap<User>) => {
			const newId = count.increment();
			const { firstName, lastName, username, email, status } = action.payload;

			users[newId] = {
				id: newId,
				...action.payload,
				username:
					username ??
					(email?.split("@")[0] ||
						`${firstName}.${lastName}.${[1, 2, 3]
							.map((num) => num * getRandomInt(0, 100))
							.join("")}`),
				status: status ?? "inactive",
			};
		},
		usersLogIn: (_users, action: ActionMap<LoginCredentials>) => {
			const { username, password } = action.payload;

			if (username && password) {
				// const user: User | undefined = USERS.find(
				// 	(user) =>
				// 		(user.username === username || user.email === username) &&
				// 		user.password === password
				// );
			}
		},
	},
});

export const { userSignUp } = slice.actions;
export default slice.reducer;
