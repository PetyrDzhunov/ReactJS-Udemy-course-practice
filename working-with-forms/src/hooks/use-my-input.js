import { useState } from 'react';

const useInputMyVersion = (validateValue) => {

	const [value, setValue] = useState('');
	const [isTouched, setIsTouched] = useState(false);

	const valueChangeHandler = (e) => {
		setValue(e.target.value);
	};

	const focusChangeHandler = (e) => {
		setIsTouched(true);
	};

	const valueIsValid = validateValue(value);
	const hasError = !valueIsValid && isTouched

	const reset = () => {
		setValue('');
		setIsTouched(false);
	};
	return {
		value,
		isValid: valueIsValid,
		hasError,
		valueChangeHandler,
		focusChangeHandler,
		reset
	};
};

export default useInputMyVersion;