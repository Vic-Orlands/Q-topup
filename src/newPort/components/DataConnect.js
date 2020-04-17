import React, { Component } from 'react';
import Nav from './Nav';
import Home from './Home';
import LandingPage from './LandingPage';
import Footer from './Footer';

class DataConnect extends Component {
	render() {
		return (
			<body style={{background: 'lightgrey'}}>
				<Nav />
                <Home />
                <LandingPage />
				<Footer />
			</body>
		);
	}
}
export default DataConnect;
