import React, { Component } from 'react';
import {
	TabContent,
	TabPane,
	Nav,
	NavItem,
	NavLink,
	Card,
	Button,
	CardTitle,
	CardText,
	Row,
	Col,
	Modal
} from 'reactstrap';
import classnames from 'classnames';
import ExplorePhoto from '../components/ExplorePhoto';
import Post from '../components/Post';
import '../styles/Profile.css';

class Profile extends Component {
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
			<div className="profile row">
				<div className="row">
					<div className="my-avatar col-4">
						<img
							src={'https://placeimg.com/500/500/any'}
							className="rounded-circle w-75"
						/>
					</div>
					<div className="col-8 ">
						<div className="d-flex align-items-center h-100">
							<div className="d-flex flex-column">
								<div className="d-flex align-items-center">
									<h2>Robert.d</h2>
									<button
										type="button"
										className="btn btn-light ml-3 d-none d-md-block"
									>
										Edit Profile
									</button>
									<i className="fa fa-cog ml2" />
								</div>
								<div className="mt-2 d-none d-md-flex">
									<p className="mr-4">73 posts</p>
									<p className="mr-4">315 followers</p>
									<p>170 following</p>
								</div>
								<div className="mt-1 d-none d-md-flex">
									<p>My name is Robert, I love natural</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div>
						<div className="d-flex mt-md-5">
							<div>POSTS</div>
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
			</div>
		);
	}
}

export default Profile;
