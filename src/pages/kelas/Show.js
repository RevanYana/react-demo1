import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { showKelas } from "../../api";
import Loading from "../../components/Loading";
import Table, { Thead } from "../../components/Table";
import { getHari } from "../../helpers";
import { titleState } from "../../storages";
import { tokenState, userState } from "../../storages/auth";

const KelasShow = () => {
  const { id } = useParams();
  const token = useRecoilValue(tokenState);
  const user = useRecoilValue(userState);

  const [items, setItems] = useState({});

  const fetchData = useCallback(async () => {
    try {
      const res = await showKelas(id, token);
      setItems(res.data);
    } catch (err) {
      console.log(err);
    }
  }, [id, token]);

  useEffect(() => fetchData(), [fetchData]);

  const setTitle = useSetRecoilState(titleState);
  useEffect(() => setTitle(`Data Kelas ${items.kode}`), [setTitle, items.kode]);

  const getAbsensi = (pertemuan) => {
    return (
      items.pengajaran &&
      items.pengajaran.length > 0 &&
      items.pengajaran
        .filter((p) => p.pertemuan === pertemuan && p.status !== 9)
        .map((p) => {
          if (p.absensi && p.absensi.length > 0) {
            return p.absensi
              .filter((a) => a.mhs_id === user.id)
              .map((a, index) => {
                return (
                  <span key={index}>
                    {a.status === "1" && (
                      <span className="text-success">H</span>
                    )}
                    {a.status === "2" && <span className="text-info">I</span>}
                    {a.status === "3" && (
                      <span className="text-warning">S</span>
                    )}
                    {a.status === "4" && <span className="text-danger">A</span>}
                  </span>
                );
              });
          } else return null;
        })
    );
  };

  const getPersentasiAbsensi = () => {
    let data =
      items.pengajaran &&
      items.pengajaran.length > 0 &&
      (items.pengajaran.filter((p) => {
        return (
          p.status !== 9 &&
          p.pertemuan !== "UTS" &&
          p.pertemuan !== "UAS" &&
          p.absensi.filter((a) => a.mhs_id === user.id && a.status === "1")
            .length > 0
        );
      }).length /
        12) *
        100;

    if (data) {
      return data.toFixed(2);
    }

    return "";
  };

  const getNilai = (jenis) => {
    return (
      items.krs &&
      items.krs.length > 0 &&
      items.krs
        .filter((k) => k.mhs_id === user.id)
        .map((k) => {
          if (k.nilai && k.nilai[jenis]) {
            return k.nilai[jenis];
          } else return null;
        })
    );
  };

  const getNilaiTotal = () => {
    return (
      parseFloat(
        ((getPersentasiAbsensi() * items.persentasi_kehadiran) / 100).toFixed(2)
      ) +
      parseFloat(
        ((getNilai("tugas") * items.persentasi_tugas) / 100).toFixed(2)
      ) +
      parseFloat(((getNilai("uts") * items.persentasi_uts) / 100).toFixed(2)) +
      parseFloat(((getNilai("uas") * items.persentasi_uas) / 100).toFixed(2))
    );
  };

  if (items.id) {
    return (
      <>
        <h3>Status</h3>

        <Table>
          <tbody>
            <tr>
              <td>Dosen</td>
              <td>{items.dosen && items.dosen.nama}</td>
            </tr>
            <tr>
              <td>Ruangan</td>
              <td>{items.ruangan && items.ruangan.nama}</td>
            </tr>
            <tr>
              <td>Hari/Jam</td>
              <td>
                {items.jamkul &&
                  `${getHari(items.jamkul.hari)}/${items.jamkul.dari}-${
                    items.jamkul.sampai
                  }`}
              </td>
            </tr>
            <tr>
              <td>Group WA</td>
              <td>
                <span
                  type="button"
                  className="badge bg-success"
                  to="#"
                  onClick={() => {
                    window.open(items.group_whatsapp);
                  }}
                >
                  Join Group Whatsapp
                </span>
              </td>
            </tr>
          </tbody>
        </Table>

        <h3>Absensi</h3>

        <Table>
          <thead>
            <tr className="text-center">
              <th>Pertemuan</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>UTS</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
              <th>10</th>
              <th>11</th>
              <th>12</th>
              <th>UAS</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td>Status</td>
              <td>{getAbsensi("1")}</td>
              <td>{getAbsensi("2")}</td>
              <td>{getAbsensi("3")}</td>
              <td>{getAbsensi("4")}</td>
              <td>{getAbsensi("5")}</td>
              <td>{getAbsensi("6")}</td>
              <td>{getAbsensi("UTS")}</td>
              <td>{getAbsensi("7")}</td>
              <td>{getAbsensi("8")}</td>
              <td>{getAbsensi("9")}</td>
              <td>{getAbsensi("10")}</td>
              <td>{getAbsensi("11")}</td>
              <td>{getAbsensi("12")}</td>
              <td>{getAbsensi("UAS")}</td>
            </tr>
          </tbody>
        </Table>

        <h3>Nilai</h3>

        <ul className="text-danger">
          <li>
            Nilai sebenarnya dari absensi akan tampil apabila semua pertemuan
            sudah dilakukan
          </li>
          <li>
            Nilai Tugas, UTS, dan UAS akan tampil apabila dosen yang mengajar
            sudah menginputkan kedalam sistem.
          </li>
        </ul>
        <Table>
          <Thead>
            <th>Absensi ({items.persentasi_kehadiran}%)</th>
            <th>Persentasi Absensi</th>
            <th>Tugas ({items.persentasi_tugas}%)</th>
            <th>Persentasi Tugas</th>
            <th>UTS ({items.persentasi_uts}%)</th>
            <th>Persentasi UTS</th>
            <th>UAS ({items.persentasi_uas}%)</th>
            <th>Persentasi UAS</th>
            <th>Total</th>
            <th>Angka</th>
          </Thead>
          <tbody>
            <tr>
              <td className="text-center">{getPersentasiAbsensi()}</td>
              <td className="text-center">
                {(
                  (getPersentasiAbsensi() * items.persentasi_kehadiran) /
                  100
                ).toFixed(2)}
              </td>
              <td className="text-center">{getNilai("tugas")}</td>
              <td className="text-center">
                {((getNilai("tugas") * items.persentasi_tugas) / 100).toFixed(
                  2
                )}
              </td>
              <td className="text-center">{getNilai("uts")}</td>
              <td className="text-center">
                {((getNilai("uts") * items.persentasi_uts) / 100).toFixed(2)}
              </td>
              <td className="text-center">{getNilai("uas")}</td>
              <td className="text-center">
                {((getNilai("uas") * items.persentasi_uas) / 100).toFixed(2)}
              </td>
              <td className="text-center">{getNilaiTotal()}</td>
              <td className="text-center">
                {parseFloat(getNilaiTotal()) >= 85 && "A"}
                {parseFloat(getNilaiTotal()) < 85 &&
                  parseFloat(getNilaiTotal()) >= 75 &&
                  "B"}
                {parseFloat(getNilaiTotal()) < 75 &&
                  parseFloat(getNilaiTotal()) >= 65 &&
                  "C"}
                {parseFloat(getNilaiTotal()) < 65 &&
                  parseFloat(getNilaiTotal()) >= 45 &&
                  "D"}
                {parseFloat(getNilaiTotal()) < 45 &&
                  parseFloat(getNilaiTotal()) >= 0 &&
                  "E"}
              </td>
            </tr>
          </tbody>
        </Table>

        <div className="row mb-3">
          <div className="col p-3">
            <table className="table table-sm">
              <thead className="bg-light">
                <tr>
                  <th colSpan="3">Keterangan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>85 s/d 100</td>
                  <td>:</td>
                  <td>A (Sangat Memuaskan)</td>
                </tr>
                <tr>
                  <td>{`75 s/d <85`}</td>
                  <td>:</td>
                  <td>B (Memuaskan)</td>
                </tr>
                <tr>
                  <td>{`65 s/d <75`}</td>
                  <td>:</td>
                  <td>C (Cukup)</td>
                </tr>
                <tr>
                  <td>{`45 s/d <65`}</td>
                  <td>:</td>
                  <td>D (Kurang Memuaskan)</td>
                </tr>
                <tr>
                  <td>{`0 s/d <45`}</td>
                  <td>:</td>
                  <td>E (Sangat Kurang)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col p-3">
            <table className="table table-sm">
              <thead className="bg-light">
                <tr>
                  <th colSpan="3">Bobot Nilai</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nilai Absensi</td>
                  <td>:</td>
                  <td>{items.persentasi_kehadiran}%</td>
                </tr>
                <tr>
                  <td>Nilai Tugas</td>
                  <td>:</td>
                  <td>{items.persentasi_tugas}%</td>
                </tr>
                <tr>
                  <td>UTS</td>
                  <td>:</td>
                  <td>{items.persentasi_uts}%</td>
                </tr>
                <tr>
                  <td>UAS</td>
                  <td>:</td>
                  <td>{items.persentasi_uas}%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {items.id === 311 && (
          <>
            <h3 className="text-center">Materi Kelas {items.kode}</h3>

            <h5>Cara Installasi Laravel</h5>

            <h5>App yang diperlukan</h5>
            <ol>
              <li>VS Code (Sebagi code editor)</li>
              <li>XAMPP (recomended versi terbaru)</li>
              <li>Composer</li>
              <li>Git Bash (Pengguna windows)</li>
            </ol>

            <p>
              Setelah semua app yang diperlukan sudah terinstall silahkan lanjut
              ke proses installasi laravel
            </p>

            <ol>
              <li>
                <h5>
                  Ketikan ini di terminal kalian (pengguna windows gunakan git
                  bash)
                </h5>
                <p className="text-secondary">
                  composer create-project --prefer-dist laravel/laravel:^8.0
                  first-app
                </p>
                <p>
                  Note :
                  <ul>
                    <li>
                      "first-app" adalah nama dari folder yang akan diinstall
                    </li>
                    <li>Versi Laravel yang digunakan adalah Versi 8</li>
                  </ul>
                </p>
              </li>
              <li>
                <h5>Buka folder first-app di VS Code kalian.</h5>
                <p>
                  Pilih menu file lalu pilih Open Folder kemudian pilih folder
                  first-app yang baru saja kalian buat
                </p>
              </li>
              <li>
                <h5>
                  Buka terminal VS Code lalu ketikan "php artisan serve" untuk
                  runing web server laravel kalian.
                </h5>
                <p>Pilih menu terminal lalu pilih new terminal</p>
              </li>
              <li>
                <h5>Buka browser kalian lalu akses http://localhost:8000/</h5>
              </li>
              <li>
                <h5>Sukses, laravel berhasil terinstall di PC kalian.</h5>
                <p>
                  Silahkan lakukan proses pengkodean sesuai dengan contoh yang
                  sudah saya berikan
                </p>
              </li>
            </ol>
          </>
        )}

        <div className="btn-group">
          <Link to="/krs" className="btn btn-danger">
            Kembali
          </Link>
        </div>
      </>
    );
  } else {
    return <Loading />;
  }
};

export default KelasShow;
