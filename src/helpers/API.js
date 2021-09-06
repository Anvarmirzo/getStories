import axios from 'axios';

export const URL = 'https://instagram40.p.rapidapi.com';
export const headers = {
	'x-rapidapi-host': 'instagram40.p.rapidapi.com',
	'x-rapidapi-key': 'a906d9718fmshf24956fbdbd7605p1d855cjsnf409f03e54de',
};

export const fetchData = (userName, setLoading) => {
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
		.then(function (response) {
			console.log(response.data);
			setLoading(false);
		})
		.catch(function (error) {
			console.error(error);
		});
};
