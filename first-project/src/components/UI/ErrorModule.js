import React from "react";
import ReactDOM from 'react-dom';

import styles from './ErrorModule.module.css';
import Card from "./Card";
import Button from "./Button";

const BackDrop = (props) => {
	return <div className={styles.backdrop} onClick={props.onConfirm}></div>
};

const ModalOverlay = (props) => {
	return (
		<Card className={styles.modal}>
			<header className={styles.header}>
				<h2>{props.title}</h2>
			</header>
			<div className={styles.content}>
				<p>{props.message}</p>
			</div>
			<footer className={styles.actions}>
				<Button onClick={props.onConfirm} >Okay</Button>
			</footer>
		</Card>
	);
};

const ErrorModal = (props) => {
	return (
		<>
			{ReactDOM.createPortal(
				<BackDrop onConfirm={props.onCofirm} />,
				document.getElementById('backdrop-root')
			)};

			{ReactDOM.createPortal(
				<ModalOverlay
					title={props.title}
					message={props.message}
					onConfirm={props.onConfirm}
				/>,
				document.getElementById('overlay-root')
			)};
		</>
	)
};

export default ErrorModal;
