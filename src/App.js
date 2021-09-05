import axios from 'axios';
import { useState } from 'react';

function App() {
	const URL = 'https://instagram40.p.rapidapi.com';
	const headers = {
		'x-rapidapi-host': 'instagram40.p.rapidapi.com',
		'x-rapidapi-key': 'a906d9718fmshf24956fbdbd7605p1d855cjsnf409f03e54de',
	};

	const [userName, setUserName] = useState('');

	const formSubmitHandler = (e) => {
		e.preventDefault();
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
			})
			.catch(function (error) {
				console.error(error);
			});
	};

	const inputChangeHandler = (e) => {
		setUserName(e.target.value);
	};

	return (
		<div className='App'>
			<form onSubmit={(e) => formSubmitHandler(e)}>
				<input
					type='text'
					value={userName}
					onChange={(e) => inputChangeHandler(e)}
				/>
				<button>Check</button>
			</form>
		</div>
	);
}

export default App;
