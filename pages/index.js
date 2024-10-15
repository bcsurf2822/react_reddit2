import Head from 'next/head';
import PostForm from './components/PostForm';
import { useState } from 'react';
import PostsList from './components/PostList';

export default function Home() {
	const [posts, setPosts] = useState([]); // State to manage the list of posts


	// Function to add a new post
	const addPost = (post) => {
		setPosts([...posts, post]); // Adds the new post to the existing list of posts
	};

	return (
	<div>
			<main>
				<div className='row'>
					<div className='col-md-6 offset-md-3'>
						<h1>Project Reddit</h1>
					</div>

					<div className='posts'>
						{/* This is where we will render posts later */}
					</div>

							{/* Render the PostsList component and pass the posts as a prop */}
							<PostsList posts={posts} />

					{/* Passing the addPost function as a prop to PostForm */}
					<PostForm addPost={addPost} />
				</div>
			</main>
		</div>
	);
}