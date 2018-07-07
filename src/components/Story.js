import React, { Component } from 'react';

import PostAvatar from './PostAvatar';
import StoryItem from './StoryItem';

import '../styles/Story.css';

class Story extends Component {
	render() {
		return (
			<div className="story d-flex flex-column">
				{/* My Profile */}
				<div className="d-flex">
					<PostAvatar name="Robert.d" sub="Robert Downy" avatar="any" />
				</div>
				<hr />
				{/* Stories */}
				<div className="stories">
					<div className="d-flex w-100 justify-content-between">
						<div>Stories</div>
						<div>Watch All</div>
					</div>
					<div className="d-flex flex-column">
						<div className="mt-2">
							<PostAvatar name="Jessica" sub="1 HOUR AGO" avatar="animals" />
						</div>
						<div className="mt-2">
							<PostAvatar name="Mary" sub="2 HOUR AGO" avatar="arch" />
						</div>
						<div className="mt-2">
							<PostAvatar name="John" sub="5 HOUR AGO" avatar="nature" />
						</div>
						<div className="mt-2">
							<PostAvatar name="Bette" sub="10 HOUR AGO" avatar="people" />
						</div>
						<div className="mt-2">
							<PostAvatar name="Deff" sub="1 DAY AGO" avatar="tech" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Story;
