import React, { useState } from "react";
import { loginAuth } from "../api";
import Input from "../components/Input";
import { saAlert } from "../helpers";

const Login = (props) => {
  const { onIsLogin } = props;

  const [form, setForm] = useState({ is_mhs: true });
  const [errors, setErrors] = useState({});

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await loginAuth(form);
      if (res.data) {
        if (res.data.message === "danger") {
          // Dobel NIM
          saAlert(
            "warning",
            "Akun error segera hubungi bagian Akademik dan Kemahasiswaan !",
            "Hubungi bagian Akademik dan Kemahasiswaan agar akun anda dapat segera diperbaiki !"
          );
        } else if (res.data.message === "inactive") {
          // Fail
          saAlert(
            "warning",
            "Akun anda sedang tidak aktif",
            "Hubungi bagian Akademik untuk mengaktifkan akun kembali."
          );
        } else if (res.data.message === "fail") {
          // Fail
          saAlert(
            "warning",
            "NIM atau password yang anda masukkan salah !",
            "Cek ulang kembali NIM dan password yang anda gunakan."
          );
        } else if (res.data.message === "success") {
          // Success
          let _token = res.data._token.split("|")[1];
          onIsLogin(_token);
        }
      }
    } catch (err) {
      if (err.response) {
        if (err.response.status === 422) {
          setErrors(err.response.data.errors);
        }
      }
    }
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="row w-100 justify-content-center">
        <form
          onSubmit={handleLogin}
          className="col-md-10 col-sm-12 col-lg-6 col-xl-5 p-5 rounded shadow text-center bg-white"
        >
          <img
            src="https://sim.alfaprima.id/logo.jpg"
            className="img-fluid w-25"
            alt=""
          />
          <h4>Login SIA - Alfa Prima</h4>
          <Input
            name="nim"
            placeholder="NIM"
            onChange={(e) => {
              setForm((prevState) => {
                return { ...prevState, [e.target.name]: e.target.value };
              });
            }}
            error={errors.nim}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setForm((prevState) => {
                return { ...prevState, [e.target.name]: e.target.value };
              });
            }}
            error={errors.password}
          />
          <button className="btn btn-primary w-100 rounded-pill">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
