import {useEffect} from 'react';
import {
    HashRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import NewTrip from '../NewTrip/NewTrip';
import EditTrip from '../EditTrip/EditTrip';
import History from '../History/History';
import Charts from '../Charts/Charts';
import Page404 from '../Page404/Page404';
import './App.css';

function App() {
    const dispatch=useDispatch();

    const user = useSelector((store) => store.user);

    useEffect(() => {
        dispatch({type: 'FETCH_USER'});
    }, [dispatch]);

    return (
        <Router>
            <div className="App">
                <div id="header">
                    <Nav />
                </div>
                <div id="main-content">
                    <Switch>
                        {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
                        <Redirect exact from="/" to="/home" />
                        {/* Visiting localhost:3000/about will show the about page. */}
                        <Route
                            // shows About Page at all times (logged in or not)
                            exact
                            path="/about"
                        >
                            <AboutPage />
                        </Route>
                        {/* For protected routes, the view could show one of several things on the same route.
                            Visiting localhost:3000/user will show the UserPage if the user is logged in.
                            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
                            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
                        <ProtectedRoute
                            // logged in shows NewTrip else shows LoginPage
                            exact
                            path="/newtrip"
                        >
                            <NewTrip />
                        </ProtectedRoute>
                        <ProtectedRoute
                            // logged in shows EditTrip else shows LoginPage
                            exact
                            path="/edittrip/:id"
                        >
                            <EditTrip />
                        </ProtectedRoute>
                        <ProtectedRoute
                            // logged in shows Calculate else shows LoginPage
                            exact
                            path="/history"
                        >
                            <History />
                        </ProtectedRoute>
                        <ProtectedRoute
                            // logged in shows UserPage else shows LoginPage
                            exact
                            path="/user"
                        >
                            <UserPage />
                        </ProtectedRoute>
                        <ProtectedRoute
                            // logged in shows Calculate else shows LoginPage
                            exact
                            path="/charts"
                        >
                            <Charts />
                        </ProtectedRoute>
                        <Route exact path="/login">
                            {user.id? (
                                // If the user is already logged in,
                                // redirect to the /user page
                                <Redirect to="/user" />
                            ):(
                                // Otherwise, show the login page
                                    <LoginPage />
                            )}
                        </Route>
                        <Route exact path="/registration">
                            {user.id? (
                                // If the user is already logged in,
                                // redirect them to the /user page
                                <Redirect to="/user" />
                            ):(
                                // Otherwise, show the registration page
                                <RegisterPage />
                            )}
                        </Route>
                        <Route exact path="/home">
                            {user.id? (
                                // If the user is already logged in,
                                // redirect them to the /user page
                                <Redirect to="/user" />
                            ):(
                                // Otherwise, show the Landing page
                                <LandingPage />
                            )}
                        </Route>
                        {/* If none of the other routes matched, we will show a 404. */}
                        <Route>
                            <Page404 />
                        </Route>
                    </Switch>
                </div>
                <div id="footer">
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App;
