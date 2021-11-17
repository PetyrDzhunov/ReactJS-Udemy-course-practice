import React from "react";

import style from './UsersList.module.css';
import User from "./User";
import styles from './User.module.css';
import Card from "../UI/Card";



const UsersList = ({ users }) => {
	let content;
	if (users.length === 0) {
		content = <p className={styles.li}>No users are yet registered!</p>;
	} else {
		content = users.map((user) => {
			return <User>{user.name}({user.age} years old) </User>
		});
	}
	return (
		<Card className={style.users}>
			<ul>
				{content}
			</ul>
		</Card>
	)


};

export default UsersList