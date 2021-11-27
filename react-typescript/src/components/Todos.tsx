import React, { useContext } from 'react';
import styles from './Todos.module.css'
import TodoItem from './TodoItem';
import { TodosContext } from '../store/todos-context';



const Todos: React.FC = () => {
	const todosCtx = useContext(TodosContext);

	return (
		<ul className={styles.todos}>
			{todosCtx.items.map((item) => (
				<TodoItem onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} key={item.id} text={item.text} />
			))}
		</ul>
	);
};

export default Todos;