import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth-slice';
import counterReducer from './counter-slice';

let store = configureStore({
	reducer: {
		counter: counterReducer,
		auth: authReducer
	}
});

export default store;
