import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../../redux/slices/todoItemsSlice"; 
export const EditTodo = ({ todo, onClose }) => {
    const [newTodo, setNewTodo] = useState(todo.todo);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateTodo({ id: todo.id, todo: newTodo })); 
        onClose(); 
    };

    return (
        <div className="edit-todo">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    required
                />
                <button type="submit">Save</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};
