import React, { useState } from "react";


import validator from "./validateUser";

import Card from "../UI/Card";
import Button from "../UI/Button";

import style from './AddUser.module.css';

const AddUser = (props) => {
	const [enteredUsername, setEnteredUsername] = useState('');
	const [enteredAge, setEnteredAge] = useState('');

	const addUserHandler = (e) => {
		e.preventDefault();
		validator.validateUser(enteredUsername, enteredAge);
		props.onAddUser(enteredUsername, enteredAge);
		setEnteredUsername('');
		setEnteredAge('');
	};

	const usernameChangeHandler = (e) => {
		setEnteredUsername(e.target.value);
	};

	const ageChangeHandler = (e) => {
		setEnteredAge(e.target.value);
	};


	return (
		<Card className={style.input}>
			<form onSubmit={addUserHandler}>
				<label htmlFor="username">Username</label>
				<input value={enteredUsername} onChange={usernameChangeHandler} id="username" type="text" />
				<label htmlFor="age">Age (Years)</label>
				<input value={enteredAge} onChange={ageChangeHandler} id="age" type="number" />
				<Button type="submit">Add User</Button>
			</form>
		</Card>
	);
};

export default AddUser;