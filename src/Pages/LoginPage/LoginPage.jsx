import React from "react";
import { useState } from "react";
import "./LoginPage.css"

export const LoginPage = () => {
	const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
	const handleSubmit = (e) => {
        e.preventDefault();
       
        if (username === "yourUsername" && password === "yourPassword") {
            localStorage.setItem("loggedIn", "true"); 
            window.location.href = "/todoList"; 
        } else {
            alert("Wrong username or password");
        }
    }
	return(
	
	<>
	<div className="enter-box">
		<h2>Welcome back</h2>
		<h3>

			Please enter your data
		</h3>
		<form className = "login-form"onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                    <button type="submit">Login</button>
                    <h3>Do not have account?</h3>
                    <button type="">Sign Up</button>
                </form>
	</div>
	
	</>
	)
	

};