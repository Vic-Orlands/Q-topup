import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import '../styles/Footer.css';

const Footer = () => {
	return (
		<footer className="footer" id="footer">
			<h1>
				{' '}
				<span>Q-</span>topup
			</h1>{' '}
			<hr />
			<section className="footerText">
				<div>
					<p>
						We offer instant recharge of Airtime, Databundle, CableTV (DStv, GOtv & Startimes),<br />{' '}
						Electricity Bill Payemnt, Recharge Card Printing and so much more.{' '}
					</p>

					<div>
						<p>
							No 18 Welder line, Opposite College <br />
							First Gate Abata Nsugbe Onitsha Anambra<br /> State Nigeria. <br />
							<b> Branch Office: </b> Awolowo Hall OAU Campus <br /> ILE-IFE Osun State Nigeria.
						</p>

						<p>
							<b>Contact Us: </b>
							Chikezie Peter Maduabuchi <br />
							<b> Email Address: </b>qtransact@gmail.com <br />
							<b>Call: </b>09059271231 for complaint, feedback <br /> or unresolved issues
						</p>
					</div>
				</div>

				<div>
					<ul>
						<NavLink to="/login" className="link">
							<li>
								{' '}
								<IoIosArrowForward /> Buy Airtime{' '}
							</li>
						</NavLink>
						<NavLink to="/login" className="link">
							<li>
								{' '}
								<IoIosArrowForward /> Buy Databundle{' '}
							</li>
						</NavLink>
						<NavLink to="/login" className="link">
							<li>
								{' '}
								<IoIosArrowForward /> CableTV Subscription{' '}
							</li>
						</NavLink>
						<NavLink to="/login" className="link">
							<li>
								{' '}
								<IoIosArrowForward /> Electricity Payment{' '}
							</li>
						</NavLink>
						<NavLink to="/login" className="link">
							<li>
								{' '}
								<IoIosArrowForward /> Deposit Money{' '}
							</li>
						</NavLink>
						<NavLink to="/login" className="link">
							<li>
								{' '}
								<IoIosArrowForward /> Transfer Money{' '}
							</li>
						</NavLink>
						<NavLink to="/login" className="link">
							<li>
								{' '}
								<IoIosArrowForward /> Developer's API{' '}
							</li>
						</NavLink>
					</ul>
				</div>
			</section>
			<section className="footFooter">
				<p>
					{' '}
					&copy;Copyright 2020 | Vic Orlands <span>@vicorlands.netlify.com</span>
				</p>

				<p> Terms of use | Privacy </p>
			</section>
		</footer>
	);
};
export default Footer;
