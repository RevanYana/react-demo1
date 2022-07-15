const Toolbar = () => {
  return (
    <div className="d-flex flex-column flex-column-fluid">
      <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
        {/*begin::Toolbar container*/}
        <div id="kt_app_toolbar_container" className="app-container container-fluid d-flex flex-stack">
          {/*begin::Page title*/}
          <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
            {/*begin::Title*/}
            <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">Default</h1>
            {/*end::Title*/}
            {/*begin::Breadcrumb*/}
            <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
              {/*begin::Item*/}
              <li className="breadcrumb-item text-muted">
                <a href="../../demo1/dist/index.html" className="text-muted text-hover-primary">
                  Home
                </a>
              </li>
              {/*end::Item*/}
              {/*begin::Item*/}
              <li className="breadcrumb-item">
                <span className="bullet bg-gray-400 w-5px h-2px" />
              </li>
              {/*end::Item*/}
              {/*begin::Item*/}
              <li className="breadcrumb-item text-muted">Dashboards</li>
              {/*end::Item*/}
            </ul>
            {/*end::Breadcrumb*/}
          </div>
          {/*end::Page title*/}
          {/*begin::Actions*/}
          <div className="d-flex align-items-center gap-2 gap-lg-3">
            {/*begin::Secondary button*/}
            <a href="#" className="btn btn-sm fw-bold bg-body btn-color-gray-700 btn-active-color-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_create_app">
              Rollover
            </a>
            {/*end::Secondary button*/}
            {/*begin::Primary button*/}
            <a href="#" className="btn btn-sm fw-bold btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_new_target">
              Add Target
            </a>
            {/*end::Primary button*/}
          </div>
          {/*end::Actions*/}
        </div>
        {/*end::Toolbar container*/}
      </div>
    </div>
  );
};

export default Toolbar;
