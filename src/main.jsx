import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { store } from "./store.js";
import { Provider } from "react-redux";
import "./index.css";
import { Navigate } from "react-router-dom";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TodoList } from "./Components/Todoapp/TodoList.jsx";
import { LoginPage } from "./Pages/LoginPage/LoginPage.jsx";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "todoList",
                element: <TodoList />,
            },
        ],
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "*", 
        element: <Navigate to={localStorage.getItem("loggedIn") === "true" ? "/todoList" : "/login"} />,
    },
]);
createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
);