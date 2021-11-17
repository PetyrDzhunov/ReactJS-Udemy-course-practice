import React, { useRef, useState } from "react";


import validator from "./validateUser";

import Card from '../UI/Card';
import Button from "../UI/Button";
import ErrorModal from '../UI/ErrorModule';

import style from './AddUser.module.css';

const AddUser = (props) => {
	const nameInputRef = useRef();
	const ageInputRef = useRef();

	const [error, setError] = useState();

	const addUserHandler = (e) => {
		e.preventDefault();
		const enteredName = nameInputRef.current.value;
		const enteredUserAge = ageInputRef.current.value;
		setError({
			title: "Invalid input",
			message: validator.validateUser(enteredName, enteredUserAge)
		});

		if (validator.validateUser(enteredName, enteredUserAge) === true) {
			props.onAddUser(enteredName, enteredUserAge);
			errorHandler();
		};
		nameInputRef.current.value = '';
		ageInputRef.current.value = '';
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<>
			{error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />}
			<Card className={style.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input ref={nameInputRef} id="username" type="text" />
					<label htmlFor="age">Age (Years)</label>
					<input ref={ageInputRef} id="age" type="number" />
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</>
	);
};

export default AddUser;