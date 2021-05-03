import HomePage from "../Pages/Home/HomePage";
import JobsPage from "../Pages/Jobs/JobsPage";
import ResumePage from "../Pages/Resume/ResumePage";
import CompaniesPage from "../Pages/Companies/CompaniesPage";
import ContaceUsPage from "../Pages/ContaceUs/ContaceUsPage";
import TermsAndConditionPage from "../Pages/TermsAndCondition/TermsAndConditionPage";
import PrivacyPage from "../Pages/Privacy/PrivacyPage";

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
            <Route exact path="/jobs" component={JobsPage} />
            <Route exact path="/resume" component={ResumePage} />
            <Route exact path="/companies" component={CompaniesPage} />
            <Route exact path="/contact-us" component={ContaceUsPage} />
            <Route exact path="/terms" component={TermsAndConditionPage} />
            <Route exact path="/privacy" component={PrivacyPage} />
        </Switch>
    </Router>
);


export default AppRouter;