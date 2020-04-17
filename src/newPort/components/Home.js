import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
	return (
		<section className="imgSection">
			<section className="imgSectText">
				<h3>
					{' '}
					Welcome to <span>Q-topup</span>{' '}
				</h3>
				<h4> Best enterprise solution to your telecom needs</h4>
				<NavLink to="/login">
					<button>Login</button>
				</NavLink>
				<NavLink to="/register">
					<button>Register</button>
				</NavLink>
			</section>
		</section>
	);
};
export default Home;
