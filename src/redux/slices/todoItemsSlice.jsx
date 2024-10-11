import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    todoItems: [],
    status: "idle",
    error: null,
    filter: "all",
};

export const fetchTodos = createAsyncThunk("todoItems/fetchTodos", async () => {
    const response = await axios("https://dummyjson.com/todos");
    return response.data.todos;
});

export const todoItemsSlice = createSlice({
    name: "todoItems",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todoItems.push(action.payload);
        },
        deleteTodo: (state, action) => {
            state.todoItems = state.todoItems.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const { id, todo } = action.payload;
            const existingTodo = state.todoItems.find((item) => item.id === id);
            if (existingTodo) {
                existingTodo.todo = todo; // Обновляем текст задачи
            }
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.todoItems = action.payload;
                state.status = "succeeded";
            })
            .addCase(fetchTodos.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { addTodo, deleteTodo, updateTodo, setFilter } = todoItemsSlice.actions;

export default todoItemsSlice.reducer;
