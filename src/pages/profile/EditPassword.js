import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { patchProfile } from "../../api";
import Input from "../../components/Input";
import { saAlert } from "../../helpers";
import { titleState } from "../../storages";
import { tokenState, userState } from "../../storages/auth";

const EditPassword = () => {
  const token = useRecoilValue(tokenState);
  const setTitle = useSetRecoilState(titleState);
  const user = useRecoilValue(userState);

  const [form, setForm] = useState({ is_mhs: true, password: true });
  const [errors, setErrors] = useState({});

  const history = useHistory();

  useEffect(() => {
    setTitle("Update Password");
  }, [setTitle]);

  const handleSubmit = (e) => {
    e.preventDefault();
    patchProfile(user.id, { ...form, password_update: true }, token)
      .then((res) => {
        if (res.data === "success") {
          history.push("/");
          saAlert("success", "Berhasil update profile");
        } else if (res.data === "fail") {
          saAlert(
            "warning",
            "Password lama harus benar !",
            "Silahkan cek kembali password lama anda kemudia pilih update"
          );
        }
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 422) {
            setErrors(err.response.data.errors);
          }
        }
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md">
          <Input
            label="Password Lama"
            type="password"
            name="old_password"
            onChange={(e) => {
              setForm((prevState) => {
                return { ...prevState, [e.target.name]: e.target.value };
              });
            }}
            error={errors.old_password}
          />
        </div>
        <div className="col-md">
          <Input
            label="Password Baru"
            type="password"
            name="password"
            onChange={(e) => {
              setForm((prevState) => {
                return { ...prevState, [e.target.name]: e.target.value };
              });
            }}
            error={errors.password}
          />
        </div>
        <div className="col-md">
          <Input
            label="Ulangi Password Baru"
            type="password"
            name="password_verify"
            onChange={(e) => {
              setForm((prevState) => {
                return { ...prevState, [e.target.name]: e.target.value };
              });
            }}
            error={errors.password}
          />
        </div>
      </div>
      <div className="btn-group">
        <button type="submit" className="btn btn-success">
          Update
        </button>
        <Link className="btn btn-danger" to="/">
          Kembali
        </Link>
      </div>
    </form>
  );
};

export default EditPassword;
