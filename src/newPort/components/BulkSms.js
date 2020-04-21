import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';
import '../styles/BulkSms.css';

const BulkSms = () => {
	return (
		<section className="smsBody">
			<Nav />

			<div className="smsImgBackground">
				<h2> MY DASHBOARD/ BULK SMS </h2>
			</div>

			<section className="sms-message-body">
				<form>
					<h2> Send bulk message </h2>
					<label for="phonenumber"> Add bulk numbers </label>
					<input type="phonenumber" name="number" required />

					<label for="message"> Write message </label>
					<input type="message" name="message" required />

					<button className="airtimeBtn">Click to Send</button>{' '}
				</form>

				<div className="sms-action">
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
export default BulkSms;
