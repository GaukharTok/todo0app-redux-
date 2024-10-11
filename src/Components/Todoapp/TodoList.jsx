
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoCard } from "../TodoCard/TodoCard";
import { deleteTodo } from "../../redux/slices/todoItemsSlice";
import { useState } from "react";
import "./todoList.css";
export const TodoList = () => {
	const [searchQuery, setSearchQuery] = useState(""); 
	const todos = useSelector((state) => state.todoItems.todoItems);
	const filter = useSelector((state) => state.todoItems.filter)
	const dispatch = useDispatch()
	console.log(todos);
	const handleDelete = (id)=>{
		dispatch(deleteTodo(id))
	}
	const filteredTodos = todos.filter (todo=>{
		const matchFilter = 
		filter ==='all'||
(filter ==="completed" && todo.completed) ||
(filter ==="pending" && !todo.completed)

	const matchSearch=  todo.todo.toLowerCase().includes (searchQuery.toLowerCase())

	return matchFilter && matchSearch;
})
	return (
		<div className="todo-list">
			<input
				type="text"
				placeholder="Search todos..."
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)} // Update the search query
			/>
			{filteredTodos.map((todo, index) => {
				return (
					<TodoCard
						key={todo.id}
						todo={todo.todo}
						completed={todo.completed}
						userId={todo.userId}
						onDelete = {()=> handleDelete(todo.id)}
					/>
				);
			})}
		</div>
	);
};
