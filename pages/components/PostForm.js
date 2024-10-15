import React, { useState } from 'react';

function PostForm(props) {
	// State to manage the form input values
	const [user, setUser] = useState('');
	const [text, setText] = useState('');

	// Function to handle the click event and add a new post
	const handleClick = () => {
		const post = { user, text }; // Create a new post object with user and text
		props.addPost(post); // Call the addPost function passed via props
		setUser(''); // Clear the user input after submission
		setText(''); // Clear the text input after submission
	};

	return (
		<form className='post-form'>
			<h3>Add a New Post</h3>

			<div className='form-group'>
				{/* Input field for the post text */}
				<input
					type='text'
					className='form-control'
					placeholder='Post Text'
					value={text} // Bind the input value to the state
					onChange={(event) => setText(event.target.value)} // Update state on change
				/>

				<br />

				{/* Input field for the user's name */}
				<input
					type='text'
					className='form-control'
					placeholder='Your Name'
					value={user} // Bind the input value to the state
					onChange={(event) => setUser(event.target.value)} // Update state on change
				/>
			</div>

			{/* Button to submit the form */}
			<button
				onClick={handleClick}
				type='button'
				className='btn btn-primary add-post'
			>
				Post
			</button>
		</form>
	);
}

export default PostForm;