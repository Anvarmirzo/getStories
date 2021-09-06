import axios from 'axios';
import { headers, URL } from '../../helpers/API';
import { SET_LOADED, SET_STORIES } from '../types';

export const fetchStories = (userName) => (dispatch) => {
	dispatch({
		type: SET_LOADED,
		payload: false,
	});
	axios
		.get(`${URL}/account-info`, {
			params: { username: userName },
			headers,
		})
		.then(function (response) {
			return response.data.id;
		})
		.then((id) =>
			axios.get(`${URL}/stories`, {
				params: { userid: id },
				headers,
			}),
		)
		.then(({ data }) => {
			dispatch(setStories(data));
		})
		.catch(function (error) {
			console.error(error);
		});
};

export const setStories = (items) => ({
	type: SET_STORIES,
	payload: items,
});
