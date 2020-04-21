import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';
import '../styles/Login.css';

class Login extends Component {
	render() {
		return (
			<section className="registerContainer loginContainer">
				<Nav />
				<hr />

				<fieldset className="registerField">
					<center>
						<h2> Login </h2> 
					</center>
					<form>
						<label for="username">Username</label>
						<input type="text" id="username" name="username" required />

						<label for="password">Password</label>
						<input type="text" id="password" name="password" required />
						<NavLink to="/udash">
							<input type="submit" value="Login" />
						</NavLink>
					</form>
				</fieldset>
			</section>
		);
	}
}
export default Login;
