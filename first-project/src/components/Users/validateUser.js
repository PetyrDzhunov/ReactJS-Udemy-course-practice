

const validateUser = (username, age) => {
	if (username.trim().length === 0) {
		return `Username should not be an empty field`;
	};

	if (+age < 1 || age.trim() == '') {
		return `The age you entered should be greater than 0 (>0)`;
	};

	return true;
};

export default {
	validateUser
};