import React, { Component } from 'react';

import PostAvatar from './PostAvatar';

import '../styles/Post.css';

class Post extends Component {
	render() {
		const { name, avatar, image, like, view } = this.props;
		return (
			<div className="card post">
				<ul className="list-group list-group-flush">
					{/* Title */}
					<li className="list-group-item">
						<PostAvatar name={name} avatar={avatar} />
					</li>
					{/* Image */}
					<li className="list-group-item img-container">
						<img src={'https://placeimg.com/640/480/' + image} alt="" />
					</li>
					{/* Action */}
					<li className="list-group-item detail-container">
						{/* Action */}
						<div className="row action">
							<div className="item">
								<i className="fa fa-heart-o" />
							</div>
							<div className="item">
								<i className="fa fa-comment-o" />
							</div>
							<div className="item">
								<i className="fa fa-bookmark-o" />
							</div>
						</div>
						{/* comment */}
						<div className="row detail">
							<div className="bold">{like} likes</div>
							<div className="view-all">View all {view} comments</div>
							<div>
								<span className="bold">{name}</span> Wow!
							</div>
							<div>
								<span className="bold">Jessica</span> WTF!
							</div>
							<div className="time">6 HOURS AGO</div>
							<hr />
							<input
								type="text"
								className="form-control comment-input"
								placeholder="Add a comment..."
							/>
						</div>
					</li>
				</ul>
			</div>
		);
	}
}

export default Post;
