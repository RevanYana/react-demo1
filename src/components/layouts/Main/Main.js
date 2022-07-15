import Toolbar from "../Main/Toolbar";
import Content from "./Content";
import Footer from "./Footer";

const Main = () => {
  return (
    // {/* begin::Main */}
    <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
      {/*begin::Toolbar*/}
      <Toolbar />
      {/*end::Toolbar*/}
      {/*begin::Content*/}
      <Content />
      {/*end::Content*/}
      {/*end::Content wrapper*/}
      {/*begin::Footer*/}
      <Footer />
      {/*end::Footer*/}
    </div>
  );
};

export default Main;
