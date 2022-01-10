import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { postPenilaianDosen, showKelas } from "../../api";
import Radio from "../../components/Radio";
import Table, { Thead } from "../../components/Table";
import Textarea from "../../components/Textarea";
import { saAlert } from "../../helpers";
import { titleState } from "../../storages";
import { tokenState } from "../../storages/auth";

const KelasPenilaianDosen = () => {
  const setTitle = useSetRecoilState(titleState);
  const token = useRecoilValue(tokenState);
  const { kelas_id } = useParams();

  const [items, setItems] = useState({});
  const [form, setForm] = useState({});

  const fetchDataKelas = useCallback(async () => {
    try {
      const res = await showKelas(kelas_id, token);
      if (res.data) {
        setItems(res.data);

        if (res.data.penilaian_dosen) {
          setForm(res.data.penilaian_dosen[0]);
        }
      }
    } catch (err) {
      console.log(err);
    }
  }, [kelas_id, token]);

  useEffect(() => fetchDataKelas(), [fetchDataKelas]);

  useEffect(
    () => setTitle(`Penilaian Kelas ${items.kode}`),
    [setTitle, items.kode]
  );

  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    postPenilaianDosen({ ...form, kelas_id: items.id }, token, `add_row=true`)
      .then((res) => {
        if (res.data === "success") {
          setErrors({});
          fetchDataKelas();
          saAlert(
            "success",
            `Berhasil mengisi nilai Dosen kelas ${items.kode}`
          );
        }
      })
      .catch((err) => {
        if (err.response.status === 422) {
          setErrors(err.response.data.errors);
        }
      });
  };

  return (
    <>
      <div className="row mb-2">
        <div className="col-6">Dosen</div>
        <div className="col-6">: {items.dosen && items.dosen.nama}</div>
        <div className="col-6">Kode</div>
        <div className="col-6">: {items.kode}</div>
      </div>

      <div className="bg-light p-3">
        <h5>Note : </h5>
        <li>Pastikan pengisian nilai dilakukan dengan data yang sebenarnya</li>
        <li>Nilai hanya dapat diisi 1 kali, dan tidak dapat diubah</li>
      </div>

      <Table>
        <Thead>
          <th>No</th>
          <th>Penilaian</th>
          <th>Nilai</th>
        </Thead>
        <tbody>
          <tr>
            <td className="text-center">1</td>
            <td>Cara berpenampilan</td>
            <td className="text-center">
              <Radio
                inline={true}
                label="Tidak Memuaskan"
                value="1"
                name="penampilan"
                id="penampilan_1"
                checked={form && form.penampilan && form.penampilan}
                onChange={(e) =>
                  setForm((prevState) => {
                    return { ...prevState, [e.target.name]: e.target.value };
                  })
                }
              />
              <Radio
                inline={true}
                label="Kurang Memuaskan"
                value="2"
                name="penampilan"
                id="penampilan_2"
                checked={form && form.penampilan && form.penampilan}
                onChange={(e) =>
                  setForm((prevState) => {
                    return { ...prevState, [e.target.name]: e.target.value };
                  })
                }
              />
              <Radio
                inline={true}
                label="Memuaskan"
                value="3"
                name="penampilan"
                id="penampilan_3"
                checked={form && form.penampilan && form.penampilan}
                onChange={(e) =>
                  setForm((prevState) => {
                    return { ...prevState, [e.target.name]: e.target.value };
                  })
                }
              />
              <Radio
                inline={true}
                label="Sangat Memuaskan"
                value="4"
                name="penampilan"
                id="penampilan_4"
                checked={form && form.penampilan && form.penampilan}
                onChange={(e) =>
                  setForm((prevState) => {
                    return { ...prevState, [e.target.name]: e.target.value };
                  })
                }
              />
              {errors.penampilan && (
                <p className="text-danger m-0">
                  Penampilan tidak boleh kosong !
                </p>
              )}
            </td>
          </tr>
          <tr>
            <td className="text-center">2</td>
            <td>Kepribadian secara umum</td>
            <td className="text-center">
              <Radio
                inline={true}
                label="Tidak Memuaskan"
                value="1"
                name="kepribadian"
                id="kepribadian_1"
                checked={form && form.kepribadian && form.kepribadian}
                onChange={(e) =>
                  setForm((prevState) => {
                    return { ...prevState, [e.target.name]: e.target.value };
                  })
                }
              />
              <Radio
                inline={true}
                label="Kurang Memuaskan"
                value="2"
                name="kepribadian"
                id="kepribadian_2"
                checked={form && form.kepribadian && form.kepribadian}
                onChange={(e) =>
                  setForm((prevState) => {
                    return { ...prevState, [e.target.name]: e.target.value };
                  })
                }
              />
              <Radio
                inline={true}
                label="Memuaskan"
                value="3"
                name="kepribadian"
                id="kepribadian_3"
                checked={form && form.kepribadian && form.kepribadian}
                onChange={(e) =>
                  setForm((prevState) => {
                    return { ...prevState, [e.target.name]: e.target.value };
                  })
                }
              />
              <Radio
                inline={true}
                label="Sangat Memuaskan"
                value="4"
                name="kepribadian"
                id="kepribadian_4"
                checked={form && form.kepribadian && form.kepribadian}
                onChange={(e) =>
                  setForm((prevState) => {
                    return { ...prevState, [e.target.name]: e.target.value };
                  })
                }
              />
              {errors.kepribadian && (
                <p className="text-danger m-0">
                  Kepribadian tidak boleh kosong !
                </p>
              )}
            </td>
          </tr>
          <tr>
            <td className="text-center">3</td>
            <td>Penguasaan penyampaian materi</td>
            <td className="text-center">
              <Radio
                inline={true}
                label="Tidak Memuaskan"
                value="1"
                name="penguasaan_materi"
                id="penguasaan_materi_1"
                checked={
                  form && form.penguasaan_materi && form.penguasaan_materi
                }
                onChange={(e) =>
                  setForm((prevState) => {
                    return { ...prevState, [e.target.name]: e.target.value };
                  })
                }
              />
              <Radio
                inline={true}
                label="Kurang Memuaskan"
                value="2"
                name="penguasaan_materi"
                id="penguasaan_materi_2"
                checked={
                  form && form.penguasaan_materi && form.penguasaan_materi
                }
                onChange={(e) =>
                  setForm((prevState) => {
                    return { ...prevState, [e.target.name]: e.target.value };
                  })
                }
              />
              <Radio
                inline={true}
                label="Memuaskan"
                value="3"
                name="penguasaan_materi"
                id="penguasaan_materi_3"
                checked={
                  form && form.penguasaan_materi && form.penguasaan_materi
                }
                onChange={(e) =>
                  setForm((prevState) => {
                    return { ...prevState, [e.target.name]: e.target.value };
                  })
                }
              />
              <Radio
                inline={true}
                label="Sangat Memuaskan"
                value="4"
                name="penguasaan_materi"
                id="penguasaan_materi_4"
                checked={
                  form && form.penguasaan_materi && form.penguasaan_materi
                }
                onChange={(e) =>
                  setForm((prevState) => {
                    return { ...prevState, [e.target.name]: e.target.value };
                  })
                }
              />
              {errors.penguasaan_materi && (
                <p className="text-danger m-0">
                  Penguasaan Materi tidak boleh kosong !
                </p>
              )}
            </td>
          </tr>
          <tr>
            <td className="text-center">4</td>
            <td>Kemudahan penerimaan materi</td>
            <td className="text-center">
              <Radio
                inline={true}
                label="Tidak Memuaskan"
                value="1"
                name="mudah_diterima"
                id="mudah_diterima_1"
                checked={form && form.mudah_diterima && form.mudah_diterima}
                onChange={(e) =>
                  setForm((prevState) => {
                    return { ...prevState, [e.target.name]: e.target.value };
                  })
                }
              />
              <Radio
                inline={true}
                label="Kurang Memuaskan"
                value="2"
                name="mudah_diterima"
                id="mudah_diterima_2"
                checked={form && form.mudah_diterima && form.mudah_diterima}
                onChange={(e) =>
                  setForm((prevState) => {
                    return { ...prevState, [e.target.name]: e.target.value };
                  })
                }
              />
              <Radio
                inline={true}
                label="Memuaskan"
                value="3"
                name="mudah_diterima"
                id="mudah_diterima_3"
                checked={form && form.mudah_diterima && form.mudah_diterima}
                onChange={(e) =>
                  setForm((prevState) => {
                    return { ...prevState, [e.target.name]: e.target.value };
                  })
                }
              />
              <Radio
                inline={true}
                label="Sangat Memuaskan"
                value="4"
                name="mudah_diterima"
                id="mudah_diterima_4"
                checked={form && form.mudah_diterima && form.mudah_diterima}
                onChange={(e) =>
                  setForm((prevState) => {
                    return { ...prevState, [e.target.name]: e.target.value };
                  })
                }
              />
              {errors.mudah_diterima && (
                <p className="text-danger m-0">
                  Mudah Diterima tidak boleh kosong !
                </p>
              )}
            </td>
          </tr>
          <tr>
            <td className="text-center">5</td>
            <td>Semangat dalam mengajar</td>
            <td className="text-center">
              <Radio
                inline={true}
                label="Tidak Memuaskan"
                value="1"
                name="semangat_mengajar"
                id="semangat_mengajar_1"
                checked={
                  form && form.semangat_mengajar && form.semangat_mengajar
                }
                onChange={(e) =>
                  setForm((prevState) => {
                    return { ...prevState, [e.target.name]: e.target.value };
                  })
                }
              />
              <Radio
                inline={true}
                label="Kurang Memuaskan"
                value="2"
                name="semangat_mengajar"
                id="semangat_mengajar_2"
                checked={
                  form && form.semangat_mengajar && form.semangat_mengajar
                }
                onChange={(e) =>
                  setForm((prevState) => {
                    return { ...prevState, [e.target.name]: e.target.value };
                  })
                }
              />
              <Radio
                inline={true}
                label="Memuaskan"
                value="3"
                name="semangat_mengajar"
                id="semangat_mengajar_3"
                checked={
                  form && form.semangat_mengajar && form.semangat_mengajar
                }
                onChange={(e) =>
                  setForm((prevState) => {
                    return { ...prevState, [e.target.name]: e.target.value };
                  })
                }
              />
              <Radio
                inline={true}
                label="Sangat Memuaskan"
                value="4"
                name="semangat_mengajar"
                id="semangat_mengajar_4"
                checked={
                  form && form.semangat_mengajar && form.semangat_mengajar
                }
                onChange={(e) =>
                  setForm((prevState) => {
                    return { ...prevState, [e.target.name]: e.target.value };
                  })
                }
              />
              {errors.semangat_mengajar && (
                <p className="text-danger m-0">
                  Semangat Mengajar tidak boleh kosong !
                </p>
              )}
            </td>
          </tr>
          <tr>
            <td className="text-center">6</td>
            <td>Ketepatan waktu mengajar</td>
            <td className="text-center">
              <Radio
                inline={true}
                label="Tidak Memuaskan"
                value="1"
                name="ketepatan_waktu"
                id="ketepatan_waktu_1"
                checked={form && form.ketepatan_waktu && form.ketepatan_waktu}
                onChange={(e) =>
                  setForm((prevState) => {
                    return { ...prevState, [e.target.name]: e.target.value };
                  })
                }
              />
              <Radio
                inline={true}
                label="Kurang Memuaskan"
                value="2"
                name="ketepatan_waktu"
                id="ketepatan_waktu_2"
                checked={form && form.ketepatan_waktu && form.ketepatan_waktu}
                onChange={(e) =>
                  setForm((prevState) => {
                    return { ...prevState, [e.target.name]: e.target.value };
                  })
                }
              />
              <Radio
                inline={true}
                label="Memuaskan"
                value="3"
                name="ketepatan_waktu"
                id="ketepatan_waktu_3"
                checked={form && form.ketepatan_waktu && form.ketepatan_waktu}
                onChange={(e) =>
                  setForm((prevState) => {
                    return { ...prevState, [e.target.name]: e.target.value };
                  })
                }
              />
              <Radio
                inline={true}
                label="Sangat Memuaskan"
                value="4"
                name="ketepatan_waktu"
                id="ketepatan_waktu_4"
                checked={form && form.ketepatan_waktu && form.ketepatan_waktu}
                onChange={(e) =>
                  setForm((prevState) => {
                    return { ...prevState, [e.target.name]: e.target.value };
                  })
                }
              />
              {errors.ketepatan_waktu && (
                <p className="text-danger m-0">
                  Ketepatan Waktu tidak boleh kosong !
                </p>
              )}
            </td>
          </tr>
          <tr>
            <td className="text-center">6</td>
            <td>Kritik & Saran</td>
            <td className="text-center">
              <Textarea
                name="kritik_saran"
                placeholder="Kritik dan Saran anda . . . ."
                value={form && form.kritik_saran && form.kritik_saran}
                onChange={(e) =>
                  setForm((prevState) => {
                    return { ...prevState, [e.target.name]: e.target.value };
                  })
                }
              />
            </td>
          </tr>
        </tbody>
      </Table>

      <div className="btn-group">
        <button
          type="button"
          className="btn btn-sm btn-success"
          onClick={() => {
            if (items.penilaian_dosen && items.penilaian_dosen.length > 0) {
              saAlert(
                "warning",
                "Nilai yang sudah terisi tidak dapat diubah !"
              );
            } else {
              handleSubmit();
            }
          }}
        >
          Simpan
        </button>
        <Link to="/krs" type="button" className="btn btn-sm btn-danger">
          Kembali
        </Link>
      </div>
    </>
  );
};

export default KelasPenilaianDosen;
