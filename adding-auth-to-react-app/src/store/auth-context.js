import React, { useState } from 'react';


const AuthContext = React.createContext({
	token: '',
	isLoggedIn: false,
	login: (token) => { },
	logout: () => { },
});

const calculateRemainingTime = (expirationTime) => {
	const currentTime = new Date().getTime();
	const adjExpirationTime = new Date(expirationTime).getTime();

	const remainingDuration = adjExpirationTime - currentTime;

	return remainingDuration;
};

export const AuthContextProvider = (props) => {
	const initialToken = localStorage.getItem('token');
	const [token, setToken] = useState(initialToken);
	const userIsLoggedIn = !!token; // converts truthy/falsy value to true/false boolean value;

	const logoutHandler = () => {
		setToken(null)
		localStorage.removeItem('token');
	};

	const loginHandler = (token, expirationTime) => {
		setToken(token);
		localStorage.setItem('token', token);
		const remainingTime = calculateRemainingTime(expirationTime);
		console.log(remainingTime);
		setTimeout(logoutHandler, 3000);

	};


	const contextValue = {
		token,
		isLoggedIn: userIsLoggedIn,
		login: loginHandler,
		logout: logoutHandler
	};

	return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
};

export default AuthContext;

