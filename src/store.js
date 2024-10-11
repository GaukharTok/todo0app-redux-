
import { configureStore } from "@reduxjs/toolkit";
import todoItemReducer from "./redux/slices/todoItemsSlice";
export const store = configureStore({
	reducer: {
		todoItems: todoItemReducer,
	},
});
