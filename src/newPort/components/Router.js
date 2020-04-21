import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DataConnect from './DataConnect';
import Register from './Register';
import Login from './Login';
import UserDash from './UserDash';
import BuyAirtime from './BuyAirtime';
import BulkSms from './BulkSms';

const Router = () => {
	return (
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/" component={DataConnect} exact="true" />
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
					<Route path="/udash" component={UserDash} />
					<Route path="/airtime" component={BuyAirtime} />
					<Route path="/sms" component={BulkSms} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};
export default Router;
