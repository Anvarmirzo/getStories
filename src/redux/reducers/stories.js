import { combineReducers } from 'redux';
import { NOT_FOUND_STORIES, SET_LOADED, SET_STORIES } from '../types';

const initialState = { stories: [], isLoaded: true, notFound: false };

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
		case NOT_FOUND_STORIES:
			return {
				...state,
				notFound: true,
				isLoaded: true,
			};

		default:
			return state;
	}
};

export const rootReducer = combineReducers({ storiesReducer });
