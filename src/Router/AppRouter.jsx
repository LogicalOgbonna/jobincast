import { createBrowserHistory } from 'history';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AuthPage from '../Pages/Auth/AuthPage';
import BlogPage from '../Pages/Blogs/BlogPage';
import BlogsPage from '../Pages/Blogs/BlogsPage';
import CompaniesPage from '../Pages/Companies/CompaniesPage';
import CompanyPage from '../Pages/Companies/CompanyPage';
import ContactUsPage from '../Pages/ContactUs/ContactUsPage';
import HomePage from '../Pages/Home/HomePage';
import EmployerJobsPage from '../Pages/Jobs/EmployerJobsPage';
import JobPage from '../Pages/Jobs/JobPage';
import JobsPage from '../Pages/Jobs/JobsPage';
import PrivacyPage from '../Pages/Privacy/PrivacyPage';
import ProfilePage from '../Pages/Profile/ProfilePage';
import Resume from '../Pages/Resume/Resume';
import ResumePage from '../Pages/Resume/ResumePage';
import SearchPage from '../Pages/Search/SearchPage';
import TermsAndConditionPage from '../Pages/TermsAndCondition/TermsAndConditionPage';
import { setUserFromLocalStorage } from '../store/auth/actions';


const browserHistory = createBrowserHistory();

const AppRouter = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setUserFromLocalStorage())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const user = useSelector(({ authSlice: { user } }) => user)
    const authority = user?.roles[0]?.authority
    return (
        <Router history={browserHistory}>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/jobs" component={JobsPage} />
                <Route exact path="/job/:id" component={JobPage} />
                <Route exact path="/resume" component={ResumePage} />
                <Route exact path="/resume/:id" component={Resume} />
                <Route exact path="/companies" component={CompaniesPage} />
                <Route exact path="/company/:id" component={CompanyPage} />
                <Route exact path="/contact-us" component={ContactUsPage} />
                <Route exact path="/terms" component={TermsAndConditionPage} />
                <Route exact path="/privacy" component={PrivacyPage} />
                <Route exact path="/search" component={SearchPage} />
                <Route exact path="/auth" component={AuthPage} />

                <Route exact path="/blogs" component={BlogsPage} />
                <Route exact path="/blog/:id" component={BlogPage} />
                {localStorage.getItem("jobincast::user:token") && <Route exact path="/profile" component={ProfilePage} />}
                {authority === "EMPLOYER" && <Route exact path="/employer/jobs" component={EmployerJobsPage} />}
            </Switch>
        </Router>
    )
};


export default AppRouter;