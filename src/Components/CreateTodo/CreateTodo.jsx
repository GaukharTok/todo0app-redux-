import { useDispatch } from "react-redux";
import { useState } from "react";


export const CreateTodo = () => {
    const dispatch = useDispatch();
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo({ id: Date.now(), todo: task, completed: false }));
        setTask("");
    };

    return (
        <div className="create-todo">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Input your task" 
                    value={task}
                    onChange={(e) => setTask(e.target.value)} 
                />
                <button type="submit">Add task</button>
            </form>
        </div>
    );
};
