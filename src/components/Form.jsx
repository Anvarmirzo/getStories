import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStories } from '../redux/actions/stories';

export function Form() {
	const [userName, setUserName] = useState('');
	const dispatch = useDispatch();

	const { isLoaded, stories } = useSelector(
		({ storiesReducer }) => storiesReducer,
	);

	const formSubmitHandler = (e) => {
		e.preventDefault();
		dispatch(fetchStories(userName));
	};

	const inputChangeHandler = (e) => {
		setUserName(e.target.value);
	};
	return (
		<form className='form' onSubmit={(e) => formSubmitHandler(e)}>
			<span className='input__wrapper'>
				<input
					className='input'
					type='text'
					value={userName}
					onChange={(e) => inputChangeHandler(e)}
					placeholder='Insert username'
				/>
			</span>
			<button disabled={!isLoaded} className='form__btn'>
				Submit
			</button>
			{Object.keys(stories).length ? (
				<div className='success'>
					<p className='success__title'>Даты последних сторисов:</p>
					<ol className='success__list'>
						{stories.reels_media[0].items.map((item) => {
							let date = new Date(item.taken_at * 1000);
							return <li key={date}>{date.toLocaleDateString()}</li>;
						})}
					</ol>
				</div>
			) : null}
		</form>
	);
}
