import React, { Component } from 'react';

import '../styles/StoryItem.css';

class StoryItem extends Component {
	render() {
		return (
			<div className="story-item d-flex">
				<img
					src="https://placeimg.com/75/75/any"
					alt=""
					className="rounded-circle"
				/>
				<div className="title d-flex flex-column">
					<div>Jessica</div>
					<div>1 HOUR AGO</div>
				</div>
			</div>
		);
	}
}

export default StoryItem;
