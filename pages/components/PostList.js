import React from 'react';
import Post from './Post';

//Example of a stateless component

// PostsList component receives 'posts' as a prop and maps through them to render individual Post components
const PostsList = ({ posts }) => {
	const postItems = posts.map((post, index) => (
		<Post key={index} post={post} /> // We use the index as the key (not ideal, but sufficient for this app)
	));

	return <ul className='col-md-4 list-group'>{postItems}</ul>;
};

export default PostsList;