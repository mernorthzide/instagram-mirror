import React, { Component } from 'react';
import '../styles/ExplorePhoto.css';

class ExplorePhoto extends Component {
	render() {
		const { image } = this.props;

		return (
			<div className="explore-photo w-100">
				<img
					className="w-100"
					src={'https://placeimg.com/500/500/' + image}
					alt=""
				/>
			</div>
		);
	}
}

export default ExplorePhoto;
