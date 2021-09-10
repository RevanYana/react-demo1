import React, { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { checkAuth } from "../api";
import { saAlert } from "../helpers";
import Login from "../pages/Login";
import { tokenState, userState } from "../storages/auth";

const MiddlewareMhs = (props) => {
  const { children } = props;

  const setUser = useSetRecoilState(userState);
  const [isMhs, setIsMhs] = useState(false);
  const [token, setToken] = useRecoilState(tokenState);

  // if exist token
  useEffect(() => {
    setToken(localStorage.getItem("_tokenMhs"));
  }, [setToken]);

  // Check token
  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await checkAuth(token);
        setUser(res.data);
        setIsMhs(true);
        saAlert("success", "Berhasil login !");
        console.log("Is-Mhs");
      } catch (err) {
        if (err.response) {
          if (err.response.status === 401) {
            setIsMhs(false);
          }
        }
      }
    };
    checkUser();
  }, [token, setUser]);

  const isLogin = (_token) => {
    localStorage.setItem("_tokenMhs", _token);
    setToken(_token);
  };

  if (isMhs) {
    return children;
  } else {
    return <Login onIsLogin={(_token) => isLogin(_token)} />;
  }
};

export default MiddlewareMhs;
