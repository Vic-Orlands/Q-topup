import React, { useState } from 'react';
import Modal from 'react-modal';
import Nav from './Nav';
import '../styles/BuyAirtime.css';
import { IoIosClose } from 'react-icons/io';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)'
	}
};

const BuyData = () => {
	let subtitle;
	const [ modalIsOpen, setIsOpen ] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const afterOpenModal = () => {
		subtitle.style.color = '#000';
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<section className="airtimeBody">
			<Nav />

			<div className="airtimeImgBackground">
				<h2> MY DASHBOARD/ BUY DATA </h2>
			</div>

			<section className="airtime-recharge-body">
				<h2> Buy Data </h2>

				<div className="airtime-img-container">
					<div className="airtime-img">
						<img src={require('../assets/mtn.jpg')} alt="mtn" className="img" />
						<div className="middle">
							<div className="text" onClick={openModal}>
								{' '}
								Buy Now{' '}
							</div>
						</div>
					</div>

					<div className="airtime-img">
						<img src={require('../assets/glo-logo.jpg')} alt="glo" className="img" />
						<div className="middle">
							<div className="text" onClick={openModal}>
								{' '}
								Buy Now{' '}
							</div>
						</div>
					</div>

					<div className="airtime-img">
						<img src={require('../assets/Airtel.png')} alt="airtel" className="img" />
						<div className="middle">
							<div className="text" onClick={openModal}>
								{' '}
								Buy Now{' '}
							</div>
						</div>
					</div>

					<div className="airtime-img">
						<img src={require('../assets/etisalat.jpg')} alt="etisalat" className="img" />
						<div className="middle">
							<div className="text" onClick={openModal}>
								{' '}
								Buy Now{' '}
							</div>
						</div>
					</div>
				</div>

				<div className="airtime-action">
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

				<Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} style={customStyles}  className="YouClass" overlayClassName="YouClass">
					<div className="order-modal">
						<h2 ref={(_subtitle) => (subtitle = _subtitle)}> Order Summary </h2>
						<IoIosClose onClick={closeModal} className="close-modal" />
					</div>

					<hr />

					<div className="modal-form">
						<form>
							<hr />
							<p> Network </p>
							<hr />
							<p> % Commission </p>
							<hr />
							<p> Actual Cost </p>
							<hr />

							<p> Discount </p>
							<hr />

							<p> Effective Price </p>
							<hr />
							<div>
								<p> Phone Number </p>
								<input type="text" />
							</div>
							<hr />
							<div>
								<p> Amount </p>
								<input type="text" />
							</div>
							<hr />

							<div className="btn">
								<button className="btn btn-success">Proceed</button>
								<button className="btn btn-danger" onClick={closeModal}>
									Cancel
								</button>
							</div>
						</form>
					</div>
				</Modal>
			</section>
		</section>
	);
};
export default BuyData;
