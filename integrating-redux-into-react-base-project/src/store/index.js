import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
	let { type } = action;
	if (type === 'increment') {
		return { counter: state.counter + 1 };
	};

	if (type === 'decrement') {
		return { counter: state.counter - 1 };
	};

	return state;
};

let store = createStore(counterReducer);

export default store;
