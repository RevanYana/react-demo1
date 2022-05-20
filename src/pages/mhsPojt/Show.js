import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { showMhsPojt, patchPojt } from "../../api";
import Loading from "../../components/Loading";
import { titleState } from "../../storages";
import { tokenState, userState } from "../../storages/auth";
import { saAlert } from "../../helpers";
import Input from "../../components/Input";
import Select from "../../components/Select";

const MhsPojtShow = () => {
  const setTitle = useSetRecoilState(titleState);
  const token = useRecoilValue(tokenState);
  const user = useRecoilValue(userState);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => setTitle("Mahasiswa OJT"), [setTitle]);

  const [aktifOjt, setAktifOjt] = useState(false);

  const [itemsAnggotaOjt, setItemsAnggotaOjt] = useState({});
  const [itemsKelompok, setItemsKelompok] = useState({});

  const [dosen, setDosen] = useState([]);
  const [pojt, setPojt] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const res = await showMhsPojt(user.id, token);
      setIsLoaded(true);
      if (res.data.anggota_ojt) {
        if (res.data.kelompok) {
          setItemsKelompok(res.data.kelompok);
        }
        setItemsAnggotaOjt(res.data.anggota_ojt);
        setDosen(res.data.dosen);
        setPojt(res.data.pojt);
        setAktifOjt(true);
      }
    } catch (err) {
      console.error(err.response);
    }
  }, [token, user.id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isLoaded) {
    return (
      <>
        <div className="mb-2">
          {aktifOjt ? (
            <div className="row">
              <div className="col-md">
                <PlotingKelompok
                  anggotaOjt={itemsAnggotaOjt}
                  mhs={user}
                  dosen={dosen}
                  pojt={pojt}
                  token={token}
                  onFetchData={fetchData}
                />
              </div>
              {itemsKelompok.length > 0 && (
                <div className="col-md-6">
                  <h3>Kelompok</h3>
                  {itemsKelompok.map((ik, index) => {
                    return (
                      <p>
                        {index + 1}. {ik.mhs && `${ik.mhs.nim} - ${ik.mhs.nama}`}
                      </p>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            <>
              <p>
                Anda tidak terdaftar sebagai mahasiswa aktif OJT, segera hubungi
                bagian akademik untuk mengaktifkan anda sebagai mahasiswa aktif
                OJT.
              </p>
            </>
          )}
        </div>
      </>
    );
  } else {
    return <Loading />;
  }
};

const PlotingKelompok = ({
  anggotaOjt,
  mhs,
  token,
  dosen,
  pojt,
  onFetchData,
}) => {
  const [form, setForm] = useState(anggotaOjt);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (anggotaOjt.pojt_id && anggotaOjt.dosen_id && anggotaOjt.kelompok_nim) {
      saAlert(
        "warning",
        "Data yang sudah diisi tidak dapat diubah kembali",
        "Jika anda melakukan kesalahan pada saat menginputkan data segera hubungi bagian Akademik untuk melakukan perbaikan."
      );
    } else {
      setErrors({});
      try {
        const res = await patchPojt(anggotaOjt.id, form, token);
        if (res.data === "success") {
          onFetchData();
          saAlert("success", "Berhasil mengupdate data OJT");
        }
      } catch (err) {
        if (err.response && err.response.data) {
          setErrors(err.response.data.errors);
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Note</h3>
      <ol className="text-warning">
        <li>
          Mohon berhati-hati pada saat mengisi data OJT karena data hanya dapat
          diinput satu kali dan tidak dapat diubah.
        </li>
        <li>
          Harap berdiskusi terlebih dahulu dengan kelompok anda untuk menentukan
          siapa yang akan dipilih sebagai ketua kelompok.
        </li>
        <li>
          Apabila anda mengalami kendala atau kebingungan dalam pengisian data
          segera hubungi bagian akademik.
        </li>
      </ol>
      <Input
        name="kelompok_nim"
        label="NIM Ketua Kelompok (Harap masukan NIM dengan benar)"
        value={form.kelompok_nim}
        onChange={handleChange}
        error={errors.kelompok_nim}
        readOnly={anggotaOjt.kelompok_nim}
      />
      <Select
        name="pojt_id"
        label="Perusahaan OJT"
        value={form.pojt_id}
        onChange={handleChange}
        error={errors.pojt_id}
        disabled={anggotaOjt.pojt_id}
      >
        <option value="">Pilih</option>
        {pojt.length > 0 &&
          pojt.map((p, index) => {
            return (
              <React.Fragment key={index}>
                <option value={p.id}>
                  {p.perusahaan && p.perusahaan.nama}
                </option>
              </React.Fragment>
            );
          })}
      </Select>
      <Select
        label="Dosen"
        name="dosen_id"
        value={form.dosen_id}
        onChange={handleChange}
        error={errors.dosen_id}
        disabled={anggotaOjt.dosen_id}
      >
        <option value="">Pilih</option>
        {dosen.length > 0 &&
          dosen.map((d, index) => {
            return (
              <React.Fragment key={index}>
                <option value={d.id}>{d.nama}</option>
              </React.Fragment>
            );
          })}
      </Select>
      <button type="submit" className="btn btn-success btn-sm text-end">
        Simpan
      </button>
    </form>
  );
};

export default MhsPojtShow;
