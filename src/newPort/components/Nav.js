import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import '../styles/Nav.css';
class Nav extends Component {
	navlinks = document.getElementById('nav-links');

	state = {
		navlinks: false
	};

	drop = (e) => {
		e.preventDefault();
		this.setState({
			navlinks: !this.state.navlinks
		});
	};

	render() {
		const { navlinks } = this.state;
		return (
			<nav>
				{/* --------------------------------------------------------below is the hamburger toggle menu bar on small screens---------------------------------------- */}
				<div className="mobileNav">
					<div className="mobileNavBody">
						<h1>
							{' '}
							<span>Q-</span>topup
						</h1>
						<div className="hamburger" onClick={this.drop}>
							<div className="line" />
							<div className="line" />
							<div className="line" />
						</div>
					</div>

					<ul className={'nav-links ' + (navlinks ? 'open' : '')} id="nav-links">
						<NavLink to="/">
							<li>home</li>
						</NavLink>
						<li>Buy airtime</li>
						<li>buy databundle</li>
						<li>deposit money</li>
						<li>transfer money</li>
						<li> CableTV Subscription </li>
						<li> Electricity Payment </li>
						<li> Developer's API </li>
					</ul>
				</div>
				{/* -------------------------------the hamburger body ends here------------------------------ */}

				{/* ----------------------below is the nav bar at full laptop screen------------------------------- */}
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
			</nav>
		);
	}
}
export default Nav;
