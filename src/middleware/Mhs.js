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

  const [run, setRun] = useState(false);

  useEffect(() => {
    const handleRun = () => {
      setTimeout(() => {
        setRun(true);
      }, 8000);
    };

    if (token !== "") {
      handleRun();
    }
  }, [token]);

  if (isMhs && token !== "") {
    if (run) {
      return children;
    } else {
      return (
        <div className="vh-100 d-flex justify-content-center align-items-center bg-primary text-white">
          <h3>Authorization . . .</h3>
        </div>
      );
    }
  } else {
    return <Login onIsLogin={(_token) => isLogin(_token)} />;
  }
};

export default MiddlewareMhs;
