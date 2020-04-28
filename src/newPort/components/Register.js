import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';
import '../styles/Register.css';

class Register extends Component {
	render() {
		return (
			<section className="registerContainer">
				<Nav />
				<hr />

				<fieldset className="registerField">
					<center>
						<h2> Register </h2>
					</center>
					<form>
						<label for="fname">Full Name</label>
						<input type="text" id="fname" name="firstname" required/>

						<label for="email">Email</label>
						<input type="text"  id="email" name="email" required/>
						
						<label for="pnumber">Phone Number</label>
						<input type="text"  id="pnumber" name="phonenumber" required/>

						<label for="username">Username</label>
						<input type="text"  id="username" name="username" required/>

						<label for="password">Password</label>
						<input type="text"  id="password" name="password" required/>

						<label for="cpassword">Confirm Password</label>
						<input type="text"  id="cpassword" name="confirmpassword" required/>

						<NavLink to="/udash">
							<input type="submit" value="Register" />
						</NavLink>
					</form>
					<p>
						Already a member? <NavLink to="/login"><span>Login</span></NavLink>
					</p>
				</fieldset>
			</section>
		);
	}
}
export default Register;
