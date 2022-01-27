import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { showProfile } from "../../api";
import { formatDate } from "../../helpers";
import { titleState } from "../../storages";
import { tokenState, userState } from "../../storages/auth";

const Profile = () => {
  const setTitle = useSetRecoilState(titleState);
  const token = useRecoilValue(tokenState);

  useEffect(() => {
    setTitle("Profile Mahasiswa");
  }, [setTitle]);

  const user = useRecoilValue(userState);

  const [mhs, setMhs] = useState({});

  useEffect(() => {
    const showDataMhs = async () => {
      try {
        const res = await showProfile(user.id, token);
        if (res.data) {
          setMhs(res.data.mhs);
        }
      } catch (err) {
        console.log(err);
      }
    };

    if (token && user.id) {
      showDataMhs();
    }
  }, [token, user.id]);

  return (
    <>
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <h5>{user.nim}</h5>
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
          <tr>
            <td className="text-nowrap">Hasil tes DISC 1</td>
            <td>{" : "}</td>
            <td>
              {mhs.disc && mhs.disc.disc_1 ? (
                <div className="ratio ratio-1x1">
                  <iframe
                    title="disc_1"
                    src={`https://manajemen-alfaprima.com/storage/disc_mhs/disc_1_${user.nim}.pdf`}
                    allowfullscreen
                  />
                </div>
              ) : (
                "No Data"
              )}
            </td>
          </tr>
          <tr>
            <td className="text-nowrap">Hasil tes DISC 2</td>
            <td>{" : "}</td>
            <td>
              {mhs.disc && mhs.disc.disc_2 ? (
                <div className="ratio ratio-1x1">
                  <iframe
                    title="disc_2"
                    src={`https://manajemen-alfaprima.com/storage/disc_mhs/disc_2_${user.nim}.pdf`}
                    allowfullscreen
                  />
                </div>
              ) : (
                "No Data"
              )}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="btn-group">
        <Link to="/profile-edit" className="btn btn-sm btn-success">
          Ubah Profile
        </Link>
        <Link to="/update-password" className="btn btn-sm btn-danger">
          Ubah Password
        </Link>
      </div>
    </>
  );
};

export default Profile;
