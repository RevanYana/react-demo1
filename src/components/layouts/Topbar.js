import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { postLogout } from "../../api";
import { saAlert, saConfirm } from "../../helpers";
import { tokenState } from "../../storages/auth";

const LayoutsTopbar = () => {
  const [token, setToken] = useRecoilState(tokenState);
  const setUser = useSetRecoilState(tokenState);

  const handleLogout = () => {
    saConfirm("warning", "Yakin ingin logout ?").then((res) => {
      if (res.isConfirmed) {
        postLogout(token).then((res) => {
          if (res.data === "success") {
            setToken("");
            setUser({});
            localStorage.removeItem("_tokenMhs");
            saAlert("success", "Berhasil logout !");
          }
        });
      }
    });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            SIA - Alfa Prima
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <i className="fa fa-user" />
                  {" Profile"}
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle active"
                  to="#"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-book" />
                  {" Perkuliahan"}
                </Link>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="/krs">
                      Jadwal Perkuliahan
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  onClick={handleLogout}
                  className="nav-link active"
                  aria-current="page"
                  to="#"
                >
                  <i className="fa fa-sign-out-alt" />
                  {" Logout"}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LayoutsTopbar;
