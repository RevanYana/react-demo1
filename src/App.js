import ActivitiesDrawer from "./components/Drawers/ActivitiesDrawer";
import ChatDrawer from "./components/Drawers/ChatDrawer";
import DemosDrawer from "./components/Drawers/DemosDrawer";
import HelpDrawer from "./components/Drawers/HelpDrawer";
import Main from "./components/layouts/Main/Main";
import Scrolltop from "./components/layouts/Scrolltop";
import Sidebar from "./components/layouts/Sidebar/Sidebar";
import Toolbar from "./components/layouts/Toolbar";
import Topbar from "./components/layouts/Topbar/Topbar";
import Modals from "./components/Modals/Modals";

const App = () => {
  return (
    <div>
      {/*begin::App*/}
      <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
        {/*begin::Page*/}
        <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
          <Topbar />
          {/*begin::Wrapper*/}
          <div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
            <Sidebar />
            <Main />
          </div>
          {/*End::Wraper*/}
        </div>
        {/*End::Page*/}
      </div>
      {/*End::App*/}
      <ActivitiesDrawer />
      <ChatDrawer />
      <DemosDrawer />
      <HelpDrawer />
      <Toolbar />
      <Scrolltop />
      <Modals />
    </div>
  );
};

export default App;
