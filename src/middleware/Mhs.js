import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { checkAuth } from "../api";
import { saAlert } from "../helpers";
import Login from "../pages/Login";
import { tokenState, userState } from "../storages/auth";

const MiddlewareMhs = (props) => {
  const { children } = props;

  const [user, setUser] = useRecoilState(userState);
  const [token, setToken] = useRecoilState(tokenState);

  // if exist token
  useEffect(() => {
    setToken(
      localStorage.getItem("_tokenMhs") ? localStorage.getItem("_tokenMhs") : ""
    );
  }, [setToken]);

  // Check token
  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await checkAuth(token);
        setUser(res.data);
        console.log("Is-Mhs");
      } catch (err) {
        if (err.response) {
          if (err.response.status === 401) {
            setToken("");
            setUser({});
            console.log("Is-Not-Mhs");
          }
        }
      }
    };
    if (token !== "") {
      checkUser();
    }
  }, [token, setUser]);

  // Give alert if user already
  useEffect(() => {
    if (user.id) {
      setTimeout(() => {
        saAlert("success", "Berhasil login !");
      }, 1000);
    }
  }, [user.id]);

  const isLogin = (_token) => {
    localStorage.setItem("_tokenMhs", _token);
    setToken(_token);
  };

  if (token !== "") {
    if (user.id) {
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
