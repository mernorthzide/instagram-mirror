import React, { Component } from 'react';
import '../styles/PostAvatar.css';

class PostAvatar extends Component {
	render() {
		const { name, sub, avatar } = this.props;

		return (
			<div className="post-avatar d-flex align-items-center">
				<img
					src={'https://placeimg.com/75/75/' + avatar}
					className="rounded-circle"
				/>
				<div className="title d-flex flex-column">
					<div>{name}</div>
					<div>{sub}</div>
				</div>
			</div>
		);
	}
}

export default PostAvatar;
