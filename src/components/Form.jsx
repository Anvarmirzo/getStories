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
		if (e.target[0].value) {
			dispatch(fetchStories(userName));
		} else {
			alert('Fill in the field');
		}
	};

	const inputChangeHandler = (e) => {
		setUserName(e.target.value.replace(/\s+/gi, ''));
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
					{stories.reels_media[0] ? (
						<ol className='success__list'>
							{stories.reels_media[0]?.items.map((item) => {
								let date = new Date(item.taken_at * 1000);
								return <li key={date}>{date.toLocaleDateString()}</li>;
							})}
						</ol>
					) : (
						<p className=''>У текущего пользователя нет сторисов</p>
					)}
				</div>
			) : null}
		</form>
	);
}
