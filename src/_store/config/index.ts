import { configureStore } from "@reduxjs/toolkit";
import reducer from "../_bugs";

export default () => {
	return configureStore({ reducer });
};
