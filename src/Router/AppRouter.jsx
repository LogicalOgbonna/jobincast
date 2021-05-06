import HomePage from "../Pages/Home/HomePage";
import JobsPage from "../Pages/Jobs/JobsPage";
import JobPage from "../Pages/Jobs/JobPage";
import ResumePage from "../Pages/Resume/ResumePage";
import Resume from "../Pages/Resume/Resume";
import CompaniesPage from "../Pages/Companies/CompaniesPage";
import CompanyPage from "../Pages/Companies/CompanyPage";
import ContaceUsPage from "../Pages/ContaceUs/ContaceUsPage";
import TermsAndConditionPage from "../Pages/TermsAndCondition/TermsAndConditionPage";
import PrivacyPage from "../Pages/Privacy/PrivacyPage";
import SearchPage from "../Pages/Search/SearchPage";

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
            <Route exact path="/job/:id" component={JobPage} />
            <Route exact path="/resume" component={ResumePage} />
            <Route exact path="/resume/:id" component={Resume} />
            <Route exact path="/companies" component={CompaniesPage} />
            <Route exact path="/company/:id" component={CompanyPage} />
            <Route exact path="/contact-us" component={ContaceUsPage} />
            <Route exact path="/terms" component={TermsAndConditionPage} />
            <Route exact path="/privacy" component={PrivacyPage} />
            <Route exact path="/search" component={SearchPage} />
        </Switch>
    </Router>
);


export default AppRouter;