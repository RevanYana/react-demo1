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
        10;

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
            <tr>
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
            <tr>
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
            <th>Tugas ({items.persentasi_tugas}%)</th>
            <th>UTS ({items.persentasi_uts}%)</th>
            <th>UAS ({items.persentasi_uas}%)</th>
          </Thead>
          <tbody>
            <tr className="text-center">
              <td>{getPersentasiAbsensi()}</td>
              <td className="text-center">{getNilai("tugas")}</td>
              <td className="text-center">{getNilai("uts")}</td>
              <td className="text-center">{getNilai("uas")}</td>
            </tr>
          </tbody>
        </Table>

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
