import React from "react";
import style from './User.module.css';

const User = (props) => {
	return (
		<li className={style.li}>{props.name} ({props.age}years old)</li>
	)
};

export default User;