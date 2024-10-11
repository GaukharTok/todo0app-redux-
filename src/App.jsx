import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { CreateTodo } from "./Components/CreateTodo/CreateTodo";
import {Header} from "./Components/Header/Header"
import { Outlet } from "react-router-dom";
import { fetchTodos } from "./redux/slices/todoItemsSlice";
import { useEffect } from "react";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        const isLoggedIn = localStorage.getItem("loggedIn") === "true";
        if (isLoggedIn) {
            dispatch(fetchTodos());
        }
    }, []);
    
    return (
        <>
            <Header />
            {localStorage.getItem("loggedIn") === "true" ? <CreateTodo /> : null}
            <Outlet />
        </>
    );
}

export default App;