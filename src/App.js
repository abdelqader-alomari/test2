import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import Header from './components/Header'
import Universities from './components/Universities'
import FavUnis from './components/FavUnis'
import 'bootstrap/dist/css/bootstrap.min.css'
import Profile from './components/Profile'
import Logout from './components/Logout'
class App extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;

    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Universities />
            </Route>
            <Route exact path="/favUni">
              {isAuthenticated && (
                <>
                  <Logout />
                  <FavUnis />
                </>
              )}
            </Route>
            <Route exact path="/Profile">
              <Profile />
            </Route>
          </Switch>
          {/* <Footer /> */}
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
