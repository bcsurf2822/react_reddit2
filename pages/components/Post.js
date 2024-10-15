import React from 'react';

// Post component to display individual post details
const Post = ({ post }) => (
	<li>
		<span>
			{post.user} - {post.text}{' '}
			{/* Display the user's name and post text */}
		</span>
	</li>
);

export default Post;