import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LayoutsMain from "../components/layouts/Main";
import KelasPenilaianDosen from "../pages/kelas/penilaianDosen";
import KelasShow from "../pages/kelas/Show";
import Krs from "../pages/krs/Krs";
import KsCreate from "../pages/ks/Create";
import Pembayaran from "../pages/pembayaran/Pembayaran";
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

        {/* KRS */}
        <Route path="/krs">
          <LayoutsMain>
            <Krs />
          </LayoutsMain>
        </Route>
        {/* End KRS */}

        {/* Pembayaran */}
        <Route path="/pembayaran">
          <LayoutsMain>
            <Pembayaran />
          </LayoutsMain>
        </Route>
        {/* End Pembayaran */}

        {/* Kelas */}
        <Route path="/kelas-show/:id">
          <LayoutsMain>
            <KelasShow />
          </LayoutsMain>
        </Route>
        {/* End Kelas */}

        {/* Ks */}
        <Route path="/ks-create">
          <LayoutsMain>
            <KsCreate />
          </LayoutsMain>
        </Route>
        {/* End Ks */}

        {/* Penilaian Dosen */}
        <Route path="/kelas-penilaian-dosen/:kelas_id">
          <LayoutsMain>
            <KelasPenilaianDosen />
          </LayoutsMain>
        </Route>
        {/* End Penilaian Dosen */}
      </Switch>
    </Router>
  );
};

export default Routes;
