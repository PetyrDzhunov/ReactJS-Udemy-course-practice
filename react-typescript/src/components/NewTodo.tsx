import React, { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import styles from './NewTodo.module.css';


const NewTodo: React.FC = () => {
	const todosCtx = useContext(TodosContext);

	const textInputElement = useRef<HTMLInputElement>(null);
	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		const enteredText = textInputElement.current!.value;

		if (enteredText.trim().length === 0) {
			return;
		};

		todosCtx.addTodo(enteredText);
	};
	return <form onSubmit={submitHandler} className={styles.form}>
		<label htmlFor="text">Todo text</label>
		<input type="text" id='text' ref={textInputElement} />
		<button>Add Todo</button>
	</form >
};

export default NewTodo;