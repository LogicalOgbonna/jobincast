import HomePage from "../Pages/Home/HomePage";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Redirect,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

const browserHistory = createBrowserHistory();

const AppRouter = () => (
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/" component={HomePage} />
        </Switch>
    </Router>
);


export default AppRouter;