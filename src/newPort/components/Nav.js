import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import '../styles/Nav.css';
class Nav extends Component {
	// navContainer = document.querySelector('.navContainer');

	// state = {
	// 	navContainer: false,
	// 	toggle: false
	// };

	// change = (e) => {
	// 	e.preventDefault();
	// 	this.setState({
	// 		navContainer: !this.state.navContainer,
	// 		toggle: !this.state.toggle
	// 	});
	// };

	render() {
		return (
			<nav>
				<div className="firstNav">
					<ul>
						<li> Contact us </li>
						<NavLink to="/register" className="navlink">
							{' '}
							<li>Register </li>
						</NavLink>{' '}
						<NavLink to="/login" className="navlink">
							<li> Login </li>
						</NavLink>
					</ul>
				</div>

				<div className="secondNav">
					<h1>
						{' '}
						<span>Q-</span>topup
					</h1>

					<ul>
						<NavLink to="/" className="navlink">
							<li>home</li>
						</NavLink>
						<li>Buy airtime</li>
						<li>buy databundle</li>
						<li>deposit money</li>
						<li>transfer money</li>


						<li className="dropdown">
							<span>
							more options <IoIosArrowDown />{' '}
							</span>

							<div className="dropdownContent">
								<li> CableTV Subscription </li>
								<hr />
								<li> Electricity Payment </li>
								<hr />
								<li> Developer's API </li>
							</div>
						</li>


					</ul>
				</div>

				{/* --------------------------------------------------------below is the toggle menu bar on small screens---------------------------------------- */}
				{/* 
				<div className="barContainer" onClick={this.change}>
					<div className="bar1" />
					<div className="bar2" />
					<div className="bar3" />
				</div> */}
			</nav>
		);
	}
}
export default Nav;
