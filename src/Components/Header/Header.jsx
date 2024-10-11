
import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { useDispatch } from "react-redux";
import {setFilter} from "../../redux/slices/todoItemsSlice"

export const Header = () => {
    const dispatch = useDispatch();

    const handleFilterChange = (filter) => {
		const isLoggedIn = localStorage.getItem("loggedIn")==="true";
		if (!isLoggedIn){
			alert ("You need to sign  in")
		}else {
			dispatch(setFilter(filter))
		}
       
    };

    const handleLogout = () => {
        localStorage.removeItem("loggedIn");
        window.location.href = "/login";
    };

    return (
        <div className="header">
            <ul>
                <div className="header-app">
                    <NavLink to="/todoList" onClick={() => handleFilterChange("all")}>All todos</NavLink>
                    <NavLink to="/todoList" onClick={() => handleFilterChange("completed")}>Completed todos</NavLink>
                    <NavLink to="/todoList" onClick={() => handleFilterChange("pending")}>Pending todos</NavLink>
                </div>
            </ul>
            <div className="login-btn">
                <NavLink to="/login">Login</NavLink>
                <NavLink  onClick={handleLogout} to="/login">Logout</NavLink>
				
            </div>
        </div>
    );
};