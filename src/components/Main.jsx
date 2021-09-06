import React from 'react';
import { Form } from '.';

export function Main() {
	return (
		<main className='main'>
			<div className='container'>
				<h1 className='main__title'>
					Instagram Photo
					<span className='main__title--active'>Downloader</span>
				</h1>
				<p className='main__subtitle'>
					With thousands of eye-catching photo posts from around the world
					Instagram is sure the best resource for inspiration, creativity, and
					good mood. Using Instagram photo downloader you save Instagram photos
					directly to your smartphone or PC for free. No need for a password or
					URL link to a specific post. Try today.
				</p>
				<Form />
			</div>
		</main>
	);
}
