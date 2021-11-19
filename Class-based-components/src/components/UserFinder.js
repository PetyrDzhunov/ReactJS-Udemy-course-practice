import { Component } from 'react';
import { Fragment, useState, useEffect } from 'react';

import classes from './UserFinder.module.css';
import Users from './Users';

const DUMMY_USERS = [
	{ id: 'u1', name: "Peter" },
	{ id: 'u2', name: "Katya" },
	{ id: 'u3', name: "Stelian" },
	{ id: 'u4', name: "Tsvetan" }
];

class UserFinder extends Component {
	constructor() {
		super();
		this.state = {
			filteredUsers: [],
			searchTerm: ''
		};
	};

	componentDidMount() {
		this.setState({ filteredUsers: DUMMY_USERS });
	};

	componentDidUpdate(prevProps, prevState) {
		if (prevState.searchTerm !== this.state.searchTerm) {
			this.setState({
				filteredUsers: DUMMY_USERS.filter((user) =>
					user.name.includes(this.state.searchTerm)
				),
			});
		};
	};

	searchChangeHandler(event) {
		this.setState({ searchTerm: event.target.value });
	};


	render() {
		return (
			<Fragment>
				<div className={classes.finder}>
					<input type='search' onChange={this.searchChangeHandler.bind(this)} />
				</div>
				<Users users={this.state.filteredUsers} />
			</Fragment>
		);
	};

};




export default UserFinder;