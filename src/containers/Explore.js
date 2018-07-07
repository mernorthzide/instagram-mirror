import React, { Component } from 'react';
import { Modal } from 'reactstrap';
import DiscoverPeople from '../components/DiscoverPeople';
import ExplorePhoto from '../components/ExplorePhoto';
import Post from '../components/Post';

class Explore extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false
		};

		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}

	render() {
		const post = {
			name: 'Robert.d',
			avatar: 'any',
			image: 'people',
			like: 32,
			view: 100
		};

		return (
			<div className="d-flex flex-column mb-5">
				<div className="d-none d-md-flex flex-column">
					<div className="d-flex w-100 justify-content-between">
						<div>Discover People</div>
						<div>See All</div>
					</div>
					<div className="row mt-3">
						{['nature', 'people', 'tech'].map((x, i) => (
							<div key={i} className="col-4">
								<DiscoverPeople image={x} />
							</div>
						))}
					</div>
				</div>
				<div>
					<div className="d-flex mt-md-5">
						<div>Explore</div>
					</div>
					<div className="row">
						{['animals', 'arch', 'nature', 'people', 'tech'].map((x, i) => (
							<div key={i} className="col-4 mt-3" onClick={this.toggle}>
								<ExplorePhoto image={x} />
							</div>
						))}
					</div>
				</div>
				<Modal
					isOpen={this.state.modal}
					toggle={this.toggle}
					className={this.props.className}
				>
					<Post {...post} />
				</Modal>
			</div>
		);
	}
}

export default Explore;
