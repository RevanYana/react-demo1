import React from "react";
import { useRecoilValue } from "recoil";
import { titleState } from "../../storages";
import LayoutsTopbar from "./Topbar";

const LayoutsMain = (props) => {
  const { children } = props;

  const title = useRecoilValue(titleState);

  return (
    <>
      <LayoutsTopbar />
      <div className="container bg-white py-4 shadow-sm">
        <h4 className="card-header border-primary text-primary border-bottom py-3 mb-3 text-center">
          {title}
        </h4>
        {children}
      </div>
      <footer className="py-3 bg-primary">
        <div className="container my-auto">
          <div className="text-center my-auto text-white">
            <span>Copyright © Alfa Prima 2021</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LayoutsMain;
