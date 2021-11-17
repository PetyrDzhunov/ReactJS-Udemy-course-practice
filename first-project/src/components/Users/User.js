import React from "react";
import style from './User.module.css';

const User = (props) => {
	console.log(style);
	console.log(props);
	return (
		<li className={style.li}>{props.children}</li>
	)
};

export default User;