import React from 'react';

function PostForm() {
  
	const handleClick = () => {
		console.log('click!');
	};

	return (
		<form className='post-form'>
			<h3>Add a New Post</h3>

			<div className='form-group'>
				<input
					type='text'
					id='post-text'
					className='form-control'
					placeholder='Post Text'
				/>

				<br />

				<input
					type='text'
					id='post-user'
					className='form-control'
					placeholder='Your Name'
				/>
			</div>

			<button
				onClick={handleClick}
				type='button'
				className='btn btn-primary'
			>
				Post
			</button>
		</form>
	);
}

export default PostForm;