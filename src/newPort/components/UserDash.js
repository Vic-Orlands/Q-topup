import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import Nav from './Nav';
import '../styles/UserDash.css';

const UserDash = () => {
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	});

	return (
		<section className="dashBody">
			<Nav />
			{loading ? (
				<div className="gifLoad">
					<img src={require('../assets/load1.gif')} alt="Loading..." />
					<h1> Loading, please be patient </h1>
				</div>
			) : (
				<div>
					<div className="dashImgBackground">
						<h2> MY DASHBOARD </h2>
					</div>

					<section className="dash-user-body">
						<h2>
							{' '}
							Innocent Chimezie{' '}
							<NavLink to="/" className="dashLink">
								<span> (Log Out) </span>
							</NavLink>
						</h2>

						<div className="wallet">
							<div>
								<p> Wallet </p>
								<h4> ₦0.00 </h4>
								<NavLink to="/deposit">
									<a> Deposit Money </a>
								</NavLink>
							</div>

							<div>
								<p className="sms"> SMS </p>
								<h4> Bulk SMS </h4>
								<NavLink to="/sms">
									<a> Send bulk messages</a>
								</NavLink>
							</div>

							<div>
								<p className="transact"> Transactions </p>
								<h4> History </h4>
								<a> Check transaction history </a>
							</div>

							<div>
								<p style={{ width: 88 }}> Transactions </p>
								<h4> Buy Airtime </h4>
								<NavLink to="/airtime">
									<a> Buy Now </a>
								</NavLink>
							</div>

							<div>
								<p style={{ width: 88 }}> Transactions </p>
								<h4> Buy Data Bundle </h4>
								<NavLink to="/data">
									<a> Buy Now </a>
								</NavLink>
							</div>

							<div>
								<p style={{ width: 88 }}> Transactions </p>
								<h4> Cable Subscription </h4>
								<a> Check transaction history </a>
							</div>
						</div>
					</section>

					<section className="chk">
						<div className="chkBal">
							<p> To check your data balance </p>
							<p>
								MTN <IoIosArrowForward className="chkFont" />
								<IoIosArrowForward /> *406*4#(SME)
							</p>
							<p>
								MTN <IoIosArrowForward className="chkFont" />
								<IoIosArrowForward /> *131*4#(direct)
							</p>
							<p>
								ETISALAT <IoIosArrowForward className="chkFont" />
								<IoIosArrowForward /> *228#
							</p>
							<p>
								GLO <IoIosArrowForward className="chkFont" />
								<IoIosArrowForward /> *127*0#
							</p>
							<p>
								Airtel <IoIosArrowForward className="chkFont" />
								<IoIosArrowForward /> *140#
							</p>
						</div>
					</section>
				</div>
			)}
		</section>
	);
};
export default UserDash;
