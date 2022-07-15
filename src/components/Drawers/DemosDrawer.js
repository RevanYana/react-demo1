const DemosDrawer = () => {
  return (
    <div
      id="kt_engage_demos"
      className="bg-body"
      data-kt-drawer="true"
      data-kt-drawer-name="explore"
      data-kt-drawer-activate="true"
      data-kt-drawer-overlay="true"
      data-kt-drawer-width="{default:'350px', 'lg': '475px'}"
      data-kt-drawer-direction="end"
      data-kt-drawer-toggle="#kt_engage_demos_toggle"
      data-kt-drawer-close="#kt_engage_demos_close"
    >
      {/*begin::Card*/}
      <div className="card shadow-none rounded-0 w-100">
        {/*begin::Header*/}
        <div className="card-header" id="kt_engage_demos_header">
          <h3 className="card-title fw-bold text-gray-700">Demos</h3>
          <div className="card-toolbar">
            <button type="button" className="btn btn-sm btn-icon btn-active-color-primary h-40px w-40px me-n6" id="kt_engage_demos_close">
              {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
              <span className="svg-icon svg-icon-2">
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect opacity="0.5" x={6} y="17.3137" width={16} height={2} rx={1} transform="rotate(-45 6 17.3137)" fill="currentColor" />
                  <rect x="7.41422" y={6} width={16} height={2} rx={1} transform="rotate(45 7.41422 6)" fill="currentColor" />
                </svg>
              </span>
              {/*end::Svg Icon*/}
            </button>
          </div>
        </div>
        {/*end::Header*/}
        {/*begin::Body*/}
        <div className="card-body" id="kt_engage_demos_body">
          {/*begin::Content*/}
          <div
            id="kt_explore_scroll"
            className="scroll-y me-n5 pe-5"
            data-kt-scroll="true"
            data-kt-scroll-height="auto"
            data-kt-scroll-wrappers="#kt_engage_demos_body"
            data-kt-scroll-dependencies="#kt_engage_demos_header"
            data-kt-scroll-offset="5px"
          >
            {/*begin::Wrapper*/}
            <div className="mb-0">
              {/*begin::Heading*/}
              <div className="mb-7">
                <div className="d-flex flex-stack">
                  <h3 className="mb-0">Metronic Licenses</h3>
                  <a href="https://themeforest.net/licenses/standard" className="fw-semibold" target="_blank">
                    License FAQs
                  </a>
                </div>
              </div>
              {/*end::Heading*/}
              {/*begin::License*/}
              <div className="rounded border border-dashed border-gray-300 py-4 px-6 mb-5">
                <div className="d-flex flex-stack">
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center mb-1">
                      <div className="fs-6 fw-semibold text-gray-800 fw-semibold mb-0 me-1">Regular License</div>
                      <i
                        className="text-gray-400 fas fa-exclamation-circle ms-1 fs-7"
                        data-bs-toggle="popover"
                        data-bs-custom-class="popover-inverse"
                        data-bs-trigger="hover"
                        data-bs-placement="top"
                        data-bs-content="Use, by you or one client in a single end product which end users are not charged for"
                      />
                    </div>
                    <div className="fs-7 text-muted">For single end product used by you or one client</div>
                  </div>
                  <div className="text-nowrap">
                    <span className="text-muted fs-7 fw-semibold me-n1">$</span>
                    <span className="text-dark fs-1 fw-bold">39</span>
                  </div>
                </div>
              </div>
              {/*end::License*/}
              {/*begin::License*/}
              <div className="rounded border border-dashed border-gray-300 py-4 px-6 mb-5">
                <div className="d-flex flex-stack">
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center mb-1">
                      <div className="fs-6 fw-semibold text-gray-800 fw-semibold mb-0 me-1">Extended License</div>
                      <i
                        className="text-gray-400 fas fa-exclamation-circle ms-1 fs-7"
                        data-bs-toggle="popover"
                        data-bs-custom-class="popover-inverse"
                        data-bs-trigger="hover"
                        data-bs-placement="top"
                        data-bs-content="Use, by you or one client, in a single end product which end users can be charged for."
                      />
                    </div>
                    <div className="fs-7 text-muted">For single SaaS app with paying users</div>
                  </div>
                  <div className="text-nowrap">
                    <span className="text-muted fs-7 fw-semibold me-n1">$</span>
                    <span className="text-dark fs-1 fw-bold">969</span>
                  </div>
                </div>
              </div>
              {/*end::License*/}
              {/*begin::License*/}
              <div className="rounded border border-dashed border-gray-300 py-4 px-6 mb-5">
                <div className="d-flex flex-stack">
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-center mb-1">
                      <div className="fs-6 fw-semibold text-gray-800 fw-semibold mb-0 me-1">Custom License</div>
                    </div>
                    <div className="fs-7 text-muted">Reach us for custom license offers.</div>
                  </div>
                  <div className="text-nowrap">
                    <a href="https://devs.keenthemes.com" className="btn btn-sm btn-success" target="_blank">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              {/*end::License*/}
              {/*begin::Purchase*/}
              <a href="https://1.envato.market/EA4JP" className="btn btn-primary fw-bold mb-15 w-100">
                Buy Now
              </a>
              {/*end::Purchase*/}
              {/*begin::Demos*/}
              <div className="mb-0">
                <h3 className="fw-bold text-center mb-6">Metronic Demos</h3>
                {/*begin::Row*/}
                <div className="row g-5">
                  {/*begin::Col*/}
                  <div className="col-6">
                    {/*begin::Demo*/}
                    <div className="overlay overflow-hidden position-relative border border-4 border-success rounded">
                      <div className="overlay-wrapper">
                        <img src="assets/media/demos/demo1.png" alt="demo" className="w-100" />
                      </div>
                      <div className="overlay-layer bg-dark bg-opacity-10">
                        <a href="https://preview.keenthemes.com/metronic8/demo1" className="btn btn-sm btn-success shadow">
                          Demo 1
                        </a>
                      </div>
                    </div>
                    {/*end::Demo*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-6">
                    {/*begin::Demo*/}
                    <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                      <div className="overlay-wrapper">
                        <img src="assets/media/demos/demo2.png" alt="demo" className="w-100" />
                      </div>
                      <div className="overlay-layer bg-dark bg-opacity-10">
                        <a href="https://preview.keenthemes.com/metronic8/demo2" className="btn btn-sm btn-success shadow">
                          Demo 2
                        </a>
                      </div>
                    </div>
                    {/*end::Demo*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-6">
                    {/*begin::Demo*/}
                    <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                      <div className="overlay-wrapper">
                        <img src="assets/media/demos/demo3.png" alt="demo" className="w-100" />
                      </div>
                      <div className="overlay-layer bg-dark bg-opacity-10">
                        <a href="https://preview.keenthemes.com/metronic8/demo3" className="btn btn-sm btn-success shadow">
                          Demo 3
                        </a>
                      </div>
                    </div>
                    {/*end::Demo*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-6">
                    {/*begin::Demo*/}
                    <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                      <div className="overlay-wrapper">
                        <img src="assets/media/demos/demo4.png" alt="demo" className="w-100" />
                      </div>
                      <div className="overlay-layer bg-dark bg-opacity-10">
                        <a href="https://preview.keenthemes.com/metronic8/demo4" className="btn btn-sm btn-success shadow">
                          Demo 4
                        </a>
                      </div>
                    </div>
                    {/*end::Demo*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-6">
                    {/*begin::Demo*/}
                    <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                      <div className="overlay-wrapper">
                        <img src="assets/media/demos/demo5.png" alt="demo" className="w-100" />
                      </div>
                      <div className="overlay-layer bg-dark bg-opacity-10">
                        <a href="https://preview.keenthemes.com/metronic8/demo5" className="btn btn-sm btn-success shadow">
                          Demo 5
                        </a>
                      </div>
                    </div>
                    {/*end::Demo*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-6">
                    {/*begin::Demo*/}
                    <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                      <div className="overlay-wrapper">
                        <img src="assets/media/demos/demo6.png" alt="demo" className="w-100" />
                      </div>
                      <div className="overlay-layer bg-dark bg-opacity-10">
                        <a href="https://preview.keenthemes.com/metronic8/demo6" className="btn btn-sm btn-success shadow">
                          Demo 6
                        </a>
                      </div>
                    </div>
                    {/*end::Demo*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-6">
                    {/*begin::Demo*/}
                    <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                      <div className="overlay-wrapper">
                        <img src="assets/media/demos/demo7.png" alt="demo" className="w-100" />
                      </div>
                      <div className="overlay-layer bg-dark bg-opacity-10">
                        <a href="https://preview.keenthemes.com/metronic8/demo7" className="btn btn-sm btn-success shadow">
                          Demo 7
                        </a>
                      </div>
                    </div>
                    {/*end::Demo*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-6">
                    {/*begin::Demo*/}
                    <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                      <div className="overlay-wrapper">
                        <img src="assets/media/demos/demo8.png" alt="demo" className="w-100" />
                      </div>
                      <div className="overlay-layer bg-dark bg-opacity-10">
                        <a href="https://preview.keenthemes.com/metronic8/demo8" className="btn btn-sm btn-success shadow">
                          Demo 8
                        </a>
                      </div>
                    </div>
                    {/*end::Demo*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-6">
                    {/*begin::Demo*/}
                    <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                      <div className="overlay-wrapper">
                        <img src="assets/media/demos/demo9.png" alt="demo" className="w-100" />
                      </div>
                      <div className="overlay-layer bg-dark bg-opacity-10">
                        <a href="https://preview.keenthemes.com/metronic8/demo9" className="btn btn-sm btn-success shadow">
                          Demo 9
                        </a>
                      </div>
                    </div>
                    {/*end::Demo*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-6">
                    {/*begin::Demo*/}
                    <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                      <div className="overlay-wrapper">
                        <img src="assets/media/demos/demo10.png" alt="demo" className="w-100" />
                      </div>
                      <div className="overlay-layer bg-dark bg-opacity-10">
                        <a href="https://preview.keenthemes.com/metronic8/demo10" className="btn btn-sm btn-success shadow">
                          Demo 10
                        </a>
                      </div>
                    </div>
                    {/*end::Demo*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-6">
                    {/*begin::Demo*/}
                    <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                      <div className="overlay-wrapper">
                        <img src="assets/media/demos/demo11.png" alt="demo" className="w-100" />
                      </div>
                      <div className="overlay-layer bg-dark bg-opacity-10">
                        <a href="https://preview.keenthemes.com/metronic8/demo11" className="btn btn-sm btn-success shadow">
                          Demo 11
                        </a>
                      </div>
                    </div>
                    {/*end::Demo*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-6">
                    {/*begin::Demo*/}
                    <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                      <div className="overlay-wrapper">
                        <img src="assets/media/demos/demo12.png" alt="demo" className="w-100" />
                      </div>
                      <div className="overlay-layer bg-dark bg-opacity-10">
                        <a href="https://preview.keenthemes.com/metronic8/demo12" className="btn btn-sm btn-success shadow">
                          Demo 12
                        </a>
                      </div>
                    </div>
                    {/*end::Demo*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-6">
                    {/*begin::Demo*/}
                    <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                      <div className="overlay-wrapper">
                        <img src="assets/media/demos/demo13.png" alt="demo" className="w-100" />
                      </div>
                      <div className="overlay-layer bg-dark bg-opacity-10">
                        <a href="https://preview.keenthemes.com/metronic8/demo13" className="btn btn-sm btn-success shadow">
                          Demo 13
                        </a>
                      </div>
                    </div>
                    {/*end::Demo*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-6">
                    {/*begin::Demo*/}
                    <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                      <div className="overlay-wrapper">
                        <img src="assets/media/demos/demo14.png" alt="demo" className="w-100" />
                      </div>
                      <div className="overlay-layer bg-dark bg-opacity-10">
                        <a href="https://preview.keenthemes.com/metronic8/demo14" className="btn btn-sm btn-success shadow">
                          Demo 14
                        </a>
                      </div>
                    </div>
                    {/*end::Demo*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-6">
                    {/*begin::Demo*/}
                    <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                      <div className="overlay-wrapper">
                        <img src="assets/media/demos/demo15.png" alt="demo" className="w-100" />
                      </div>
                      <div className="overlay-layer bg-dark bg-opacity-10">
                        <a href="https://preview.keenthemes.com/metronic8/demo15" className="btn btn-sm btn-success shadow">
                          Demo 15
                        </a>
                      </div>
                    </div>
                    {/*end::Demo*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-6">
                    {/*begin::Demo*/}
                    <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                      <div className="overlay-wrapper">
                        <img src="assets/media/demos/demo16.png" alt="demo" className="w-100" />
                      </div>
                      <div className="overlay-layer bg-dark bg-opacity-10">
                        <a href="https://preview.keenthemes.com/metronic8/demo16" className="btn btn-sm btn-success shadow">
                          Demo 16
                        </a>
                      </div>
                    </div>
                    {/*end::Demo*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-6">
                    {/*begin::Demo*/}
                    <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                      <div className="overlay-wrapper">
                        <img src="assets/media/demos/demo17.png" alt="demo" className="w-100" />
                      </div>
                      <div className="overlay-layer bg-dark bg-opacity-10">
                        <a href="https://preview.keenthemes.com/metronic8/demo17" className="btn btn-sm btn-success shadow">
                          Demo 17
                        </a>
                      </div>
                    </div>
                    {/*end::Demo*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-6">
                    {/*begin::Demo*/}
                    <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                      <div className="overlay-wrapper">
                        <img src="assets/media/demos/demo18.png" alt="demo" className="w-100" />
                      </div>
                      <div className="overlay-layer bg-dark bg-opacity-10">
                        <a href="https://preview.keenthemes.com/metronic8/demo18" className="btn btn-sm btn-success shadow">
                          Demo 18
                        </a>
                      </div>
                    </div>
                    {/*end::Demo*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-6">
                    {/*begin::Demo*/}
                    <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                      <div className="overlay-wrapper">
                        <img src="assets/media/demos/demo19.png" alt="demo" className="w-100" />
                      </div>
                      <div className="overlay-layer bg-dark bg-opacity-10">
                        <a href="https://preview.keenthemes.com/metronic8/demo19" className="btn btn-sm btn-success shadow">
                          Demo 19
                        </a>
                      </div>
                    </div>
                    {/*end::Demo*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-6">
                    {/*begin::Demo*/}
                    <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                      <div className="overlay-wrapper">
                        <img src="assets/media/demos/demo20.png" alt="demo" className="w-100" />
                      </div>
                      <div className="overlay-layer bg-dark bg-opacity-10">
                        <a href="https://preview.keenthemes.com/metronic8/demo20" className="btn btn-sm btn-success shadow">
                          Demo 20
                        </a>
                      </div>
                    </div>
                    {/*end::Demo*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-6">
                    {/*begin::Demo*/}
                    <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                      <div className="overlay-wrapper">
                        <img src="assets/media/demos/demo21.png" alt="demo" className="w-100" />
                      </div>
                      <div className="overlay-layer bg-dark bg-opacity-10">
                        <a href="https://preview.keenthemes.com/metronic8/demo21" className="btn btn-sm btn-success shadow">
                          Demo 21
                        </a>
                      </div>
                    </div>
                    {/*end::Demo*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-6">
                    {/*begin::Demo*/}
                    <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                      <div className="overlay-wrapper">
                        <img src="assets/media/demos/demo22.png" alt="demo" className="w-100" />
                      </div>
                      <div className="overlay-layer bg-dark bg-opacity-10">
                        <a href="https://preview.keenthemes.com/metronic8/demo22" className="btn btn-sm btn-success shadow">
                          Demo 22
                        </a>
                      </div>
                    </div>
                    {/*end::Demo*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-6">
                    {/*begin::Demo*/}
                    <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                      <div className="overlay-wrapper">
                        <img src="assets/media/demos/demo23.png" alt="demo" className="w-100 opacity-25" />
                      </div>
                      <div className="overlay-layer bg-dark bg-opacity-10">
                        <div className="badge badge-white px-6 py-4 fw-semibold fs-base shadow">Coming soon</div>
                      </div>
                    </div>
                    {/*end::Demo*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-6">
                    {/*begin::Demo*/}
                    <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                      <div className="overlay-wrapper">
                        <img src="assets/media/demos/demo24.png" alt="demo" className="w-100 opacity-25" />
                      </div>
                      <div className="overlay-layer bg-dark bg-opacity-10">
                        <div className="badge badge-white px-6 py-4 fw-semibold fs-base shadow">Coming soon</div>
                      </div>
                    </div>
                    {/*end::Demo*/}
                  </div>
                  {/*end::Col*/}
                </div>
                {/*end::Row*/}
              </div>
              {/*end::Demos*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Content*/}
        </div>
        {/*end::Body*/}
      </div>
      {/*end::Card*/}
    </div>
  );
};

export default DemosDrawer;
