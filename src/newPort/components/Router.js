import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DataConnect from './DataConnect';
import Register from './Register';
import Login from './Login';
import UserDash from './UserDash';

const Router = () => {
	return (
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/" component={DataConnect} exact="true" />
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
					<Route path="/udash" component={UserDash} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};
export default Router;
