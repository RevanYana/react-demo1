import React from "react";
import { RecoilRoot } from "recoil";
import MiddlewareMhs from "./middleware/Mhs";
import Routes from "./routes";

const App = () => {
  return (
    <RecoilRoot>
      <MiddlewareMhs>
        <Routes />
      </MiddlewareMhs>
    </RecoilRoot>
  );
};

export default App;
