import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
	let { type } = action;
	if (type === 'increment') {
		return { counter: state.counter + 1, showCounter: state.showCounter };
	};

	if (type === 'decrement') {
		return { counter: state.counter - 1, showCounter: state.showCounter };
	};

	if (type === 'increase') {
		return { counter: state.counter + action.amount, showCounter: state.showCounter };
	};

	if (type === 'toggle') {
		return {
			showCounter: !state.showCounter,
			counter: state.counter
		};
	};

	return state;
};

let store = createStore(counterReducer);

export default store;
