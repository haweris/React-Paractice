import { createSlice } from "@reduxjs/toolkit";
import { SliceData, Tag, TagMap } from "../../_utils/interfaces";
import { autoIncNumber } from "../../_utils/helperFunctions";

const count = autoIncNumber();
const sliceInfo: SliceData<TagMap> = {
	name: "tags",
	initialState: {},
};

const slice = createSlice({
	...sliceInfo,
	reducers: {
		TagAdded: (tags, action) => {
			const newId = count.increment();
			const { title }: Tag = action.payload;

			tags[newId] = {
				id: newId,
				title,
			};
		},
		TagUpdated: (tags, action) => {
			const { id, title }: Tag = action.payload;

			if (id) {
				const oldTag = tags[id];
				if (oldTag) {
					tags[id] = {
						...oldTag,
						title,
					};
				}
			}
		},
		TagRemoved: (tags, action) => {
			const { id } = action.payload;

			delete tags[id];
		},
	},
});

export const { TagAdded, TagUpdated, TagRemoved } = slice.actions;
export default slice.reducer;
