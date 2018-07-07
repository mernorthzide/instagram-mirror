import React, { Component } from 'react';
import PostAvatar from '../components/PostAvatar';
import { Link } from 'react-router';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import '../styles/Header.css';

class Header extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			popoverOpen: false
		};
	}

	toggle() {
		this.setState({
			popoverOpen: !this.state.popoverOpen
		});
	}

	render() {
		return (
			<nav className="navbar navbar-light fixed-top">
				<div className="container">
					<div className="row w-100 align-items-center justify-content-between">
						<div className="col-6 col-md-3">
							<Link to="/" className="navbar-brand">
								<img
									className="header-logo"
									src={require('../images/instagram-logo.PNG')}
									alt=""
								/>
							</Link>
						</div>
						<div className="d-none d-md-block">
							<input
								className="form-control mr-sm-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
						</div>
						<div className="col-6 col-md-3">
							<div className="row justify-content-around main-menu">
								<Link to="/explore" className="item">
									<i className="fa fa-compass" />
								</Link>
								<div id="Popover1" className="item" onClick={this.toggle}>
									<i className="fa fa-heart-o" />
								</div>
								<Link to="/profile" className="item">
									<i className="fa fa-user-o" />
								</Link>
							</div>
						</div>
						<Popover
							placement="bottom"
							isOpen={this.state.popoverOpen}
							target="Popover1"
							toggle={this.toggle}
						>
							<PopoverBody>
								<div className="d-flex flex-column">
									<div className="mt-2">
										<PostAvatar
											sub="Jessica started following you.8w"
											avatar="animals"
										/>
									</div>
									<div className="mt-2">
										<PostAvatar
											sub="Mary started following you.8w"
											avatar="arch"
										/>
									</div>
									<div className="mt-2">
										<PostAvatar
											sub="John started following you.8w"
											avatar="nature"
										/>
									</div>
									<div className="mt-2">
										<PostAvatar
											sub="Bette started following you.8w"
											avatar="people"
										/>
									</div>
									<div className="mt-2">
										<PostAvatar
											sub="Deff started following you.8w"
											avatar="tech"
										/>
									</div>
								</div>
							</PopoverBody>
						</Popover>
					</div>
				</div>
			</nav>
		);
	}
}

export default Header;
