import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LayoutsMain from "../components/layouts/Main";
import Krs from "../pages/krs/Krs";
import ProfileEdit from "../pages/profile/Edit";
import EditPassword from "../pages/profile/EditPassword";
import Profile from "../pages/profile/Profile";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LayoutsMain>
            <Profile />
          </LayoutsMain>
        </Route>
        <Route path="/profile-edit">
          <LayoutsMain>
            <ProfileEdit />
          </LayoutsMain>
        </Route>
        <Route path="/update-password">
          <LayoutsMain>
            <EditPassword />
          </LayoutsMain>
        </Route>
        <Route path="/krs">
          <LayoutsMain>
            <Krs />
          </LayoutsMain>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;