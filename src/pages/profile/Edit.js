import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { patchProfile } from "../../api";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import { saAlert } from "../../helpers";
import { titleState } from "../../storages";
import { tokenState, userState } from "../../storages/auth";

const ProfileEdit = () => {
  const token = useRecoilValue(tokenState);
  const [user, setUser] = useRecoilState(userState);
  const setTitle = useSetRecoilState(titleState);

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const history = useHistory();

  useEffect(() => {
    setTitle("Ubah Profile");
  }, [setTitle]);

  const handleSubmit = (e) => {
    e.preventDefault();
    patchProfile(user.id, { ...form, update_profile: true }, token)
      .then((res) => {
        if (res.data) {
          setUser(res.data);
          history.push("/");
          saAlert("success", "Berhasil update profile.");
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
          <Input label="NIM" value={user.nim} readOnly={true} />
        </div>
        <div className="col-md">
          <Input label="Nama" value={user.nama} readOnly={true} />
        </div>
      </div>
      <div className="row">
        <div className="col-md">
          <Input
            label="Tempat Lahir"
            name="tempat"
            value={user.tempat}
            onChange={(e) => {
              setForm((prevState) => {
                return { ...prevState, [e.target.name]: e.target.value };
              });
            }}
            error={errors.tempat}
          />
        </div>
        <div className="col-md">
          <Input
            label="Tanggal Lahir"
            type="date"
            name="tanggal"
            value={user.tanggal}
            placeholder="Tahun-Bulan-Tanggal"
            onChange={(e) => {
              setForm((prevState) => {
                return { ...prevState, [e.target.name]: e.target.value };
              });
            }}
            error={errors.tanggal}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md">
          <Input label="Jenis Kelamin" value={user.jenis} readOnly={true} />
        </div>
        <div className="col-md">
          <Input label="Agama" value={user.agama} readOnly={true} />
        </div>
        <div className="col-md">
          <Input label="Angkatan" value={user.angkatan} readOnly={true} />
        </div>
      </div>
      <div className="row">
        <div className="col-md">
          <Input label="Jenjang" value={user.jenjang} readOnly={true} />
        </div>
        <div className="col-md">
          <Input label="Jurusan" value={user.jurusan} readOnly={true} />
        </div>
      </div>
      <div className="row">
        <div className="col-md">
          <Input
            label="Waktu Belajar"
            value={user.waktu_belajar}
            readOnly={true}
          />
        </div>
        <div className="col-md">
          <Input label="Semester" value={user.semester} readOnly={true} />
        </div>
      </div>
      <div className="row">
        <div className="col-md">
          <Input
            label="NO HP"
            name="no_hp"
            value={user.no_hp}
            onChange={(e) => {
              setForm((prevState) => {
                return { ...prevState, [e.target.name]: e.target.value };
              });
            }}
            error={errors.no_hp}
          />
        </div>
        <div className="col-md">
          <Input
            label="NO HP Ortu"
            name="no_hp_ortu"
            value={user.no_hp_ortu}
            onChange={(e) => {
              setForm((prevState) => {
                return { ...prevState, [e.target.name]: e.target.value };
              });
            }}
            error={errors.no_hp_ortu}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md">
          <Input
            label="Nama Ayah"
            name="nama_ayah"
            value={user.nama_ayah}
            onChange={(e) => {
              setForm((prevState) => {
                return { ...prevState, [e.target.name]: e.target.value };
              });
            }}
            error={errors.nama_ayah}
          />
        </div>
        <div className="col-md">
          <Input
            label="Nama Ibu"
            name="nama_ibu"
            value={user.nama_ibu}
            onChange={(e) => {
              setForm((prevState) => {
                return { ...prevState, [e.target.name]: e.target.value };
              });
            }}
            error={errors.nama_ibu}
          />
        </div>
      </div>
      <Textarea
        label="Alamat Ortu"
        name="alamat_ortu"
        value={user.alamat_ortu}
        onChange={(e) => {
          setForm((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value };
          });
        }}
        error={errors.alamat_ortu}
      />
      <div className="row">
        <div className="col-md">
          <Input
            label="Email"
            name="email"
            value={user.email}
            onChange={(e) => {
              setForm((prevState) => {
                return { ...prevState, [e.target.name]: e.target.value };
              });
            }}
            error={errors.email}
          />
        </div>
        <div className="col-md">
          <Input
            label="Facebook"
            name="fb"
            value={user.fb}
            onChange={(e) => {
              setForm((prevState) => {
                return { ...prevState, [e.target.name]: e.target.value };
              });
            }}
            error={errors.fb}
          />
        </div>
        <div className="col-md">
          <Input
            label="Instagram"
            name="ig"
            value={user.ig}
            onChange={(e) => {
              setForm((prevState) => {
                return { ...prevState, [e.target.name]: e.target.value };
              });
            }}
            error={errors.ig}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md">
          <Input
            label="Asal Sekolah"
            value={user.asal_sekolah}
            readOnly={true}
          />
        </div>
        <div className="col-md">
          <Input label="Tahut Tamat" value={user.tahun_tamat} readOnly={true} />
        </div>
        <div className="col-md">
          <Input label="Jurusan SMA" value={user.jurusan_sma} readOnly={true} />
        </div>
      </div>
      <div className="row">
        <div className="col-md">
          <Input label="Informasi" value={user.informasi} readOnly={true} />
        </div>
        <div className="col-md">
          <Input
            label="Keputusan Kuliah"
            value={user.keputusan_kuliah}
            readOnly={true}
          />
        </div>
        <div className="col-md">
          <Input label="Refrensi" value={user.refrensi} readOnly={true} />
        </div>
      </div>
      <div className="row">
        <div className="col-md">
          <Input
            label="Tanggal Bergabung"
            type="date"
            value={user.tanggal_bergabung}
            readOnly={true}
          />
        </div>
        <div className="col-md">
          <Input
            label="KDBB"
            value={user.kdbb ? "Iya" : "Tidak"}
            readOnly={true}
          />
        </div>
        <div className="col-md">
          <Input
            label="KTP"
            value={user.ktp}
            onChange={(e) => {
              setForm((prevState) => {
                return { ...prevState, [e.target.name]: e.target.value };
              });
            }}
            error={errors.ig}
          />
        </div>
      </div>
      <div className="btn-group">
        <button type="submit" className="btn btn-sm btn-success">
          Perbarui
        </button>
        <Link className="btn btn-sm btn-danger" to="/">
          Kembali
        </Link>
      </div>
    </form>
  );
};

export default ProfileEdit;
