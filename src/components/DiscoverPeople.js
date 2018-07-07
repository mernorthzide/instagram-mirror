import React, { Component } from 'react';
import '../styles/DiscoverPeople.css';

class DiscoverPeople extends Component {
	render() {
		const { image } = this.props;

		return (
			<div className="discover-people card w-100">
				<div className="profile w-100 h-100 d-flex flex-column justify-content-center">
					<img
						src={'https://placeimg.com/75/75/' + image}
						alt=""
						className="rounded-circle"
					/>
					<div className="title d-flex flex-column">
						<div>{image}</div>
						<button type="button" className="btn btn-primary">
							Follow
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default DiscoverPeople;
