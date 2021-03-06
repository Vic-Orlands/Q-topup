import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';
import '../styles/Deposit.css';

const Deposit = () => {
	return (
		<section className="deposit">
			<Nav />

			<div className="airtimeImgBackground">
				<h2> MY DASHBOARD/ DEPOSIT </h2>
			</div>

			<section className="deposit-recharge-body">
				<form>
					<h2> Deposit Money</h2>
					<label for="number"> Amount to Deposit</label>
					<input type="number" name="number" />
					
                    <label for="pay"> Choose how to pay </label>
					<select name="pay" className="select">
						<option>-Select-</option>
						<option value="saab">Saab</option>
						<option value="fiat">Fiat</option>
						<option value="audi">Audi</option>
					</select>
                    
					<button className="airtimeBtn">Click to Proceed</button>{' '}
				</form>

				<div className="deposit-action">
					<h5> Quick Actions </h5>

					<ul>
						<li> Buy Airtime </li>
						<li> Buy Databundle </li>
						<li> CableTV Subscription </li>
						<li> Electricity Payment </li>
						<li> Deposit Money </li>
						<li> Transfer Money </li>
						<li> Developer's API </li>
					</ul>
				</div>
			</section>
		</section>
	);
};
export default Deposit;
