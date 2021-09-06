import { SET_LOADED, SET_STORIES } from '../types';

const initialState = { stories: [], isLoaded: true };

export const storiesReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_STORIES:
			return {
				...state,
				stories: action.payload,
				isLoaded: true,
			};
		case SET_LOADED:
			return {
				...state,
				isLoaded: action.payload,
			};

		default:
			return state;
	}
};
