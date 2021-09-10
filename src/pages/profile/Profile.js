import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { formatDate } from "../../helpers";
import { titleState } from "../../storages";
import { userState } from "../../storages/auth";

const Profile = () => {
  const setTitle = useSetRecoilState(titleState);

  useEffect(() => {
    setTitle("Profile Mahasiswa");
  }, [setTitle]);

  const user = useRecoilValue(userState);

  return (
    <div className="card">
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <h5 className="card-title">{user.nim}</h5>
        <table className="table table-sm table-striped">
          <tbody>
            <tr>
              <td className="text-nowrap">Nama</td>
              <td>{" : "}</td>
              <td>{user.nama}</td>
            </tr>
            <tr>
              <td className="text-nowrap">Tempat Lahir</td>
              <td>{" : "}</td>
              <td>{user.tempat}</td>
            </tr>
            <tr>
              <td className="text-nowrap">Tanggal Lahir</td>
              <td>{" : "}</td>
              <td>{formatDate(user.tanggal)}</td>
            </tr>
            <tr>
              <td className="text-nowrap">No HP</td>
              <td>{" : "}</td>
              <td>{user.no_hp}</td>
            </tr>
            <tr>
              <td className="text-nowrap">Alamat</td>
              <td>{" : "}</td>
              <td>{user.alamat_ortu}</td>
            </tr>
          </tbody>
        </table>
        <div className="text-center">
          <div className="btn-group">
            <Link to="/profile-edit" className="btn btn-primary">Ubah Profile</Link>
            <Link to="/update-password" className="btn btn-danger">Ubah Password</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
