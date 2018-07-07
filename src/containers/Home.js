import React, { Component } from 'react';
import Post from '../components/Post';
import Story from '../components/Story';

class Home extends Component {
	render() {
		const posts = [
			{
				name: 'Robert.d',
				avatar: 'any',
				image: 'people',
				like: 32,
				view: 100
			},
			{
				name: 'John',
				avatar: 'nature',
				image: 'tech',
				like: 20,
				view: 15
			},
			{
				name: 'Bette',
				avatar: 'people',
				image: 'arch',
				like: 50,
				view: 88
			}
		];
		return (
			<div className="row">
				<div className="col-md-8">
					{posts.map((post, i) => <Post key={i} {...post} />)}
				</div>
				<div className="col-md-4 d-none d-md-block">
					<Story />
				</div>
			</div>
		);
	}
}

export default Home;
