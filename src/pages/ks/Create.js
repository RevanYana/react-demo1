import React, { useEffect, useRef, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { postKs } from "../../api";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import { saAlert } from "../../helpers";
import { titleState } from "../../storages";
import { tokenState } from "../../storages/auth";

const KsCreate = () => {
  const setTitle = useSetRecoilState(titleState);
  const token = useRecoilValue(tokenState);

  useEffect(() => setTitle("Buat Kritik & Saran"), [setTitle]);

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const tagForm = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("foto", form.foto);

    postKs(
      formData,
      token,
      `no_hp=${form.no_hp ? form.no_hp : ""}&bagian=${
        form.bagian ? form.bagian : ""
      }&judul=${form.judul ? form.judul : ""}&isi=${form.isi ? form.isi : ""}`
    )
      .then((res) => {
        console.log(res.data);
        if (res.data === "success") {
          tagForm.current && tagForm.current.reset();
          setForm({});
          setErrors({});
          saAlert("Berhasil kirim data kritik dan saran !");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h5 className="font-weight-bold">Note</h5>
      <ol>
        <li>
          Setiap Mahasiswa aktif berhak mengirimkan kritik dan saran pada
          halaman ini.
        </li>
        <li>Silahkan isikan kritik dan saran dengan bahasa yang baik.</li>
        <li>
          Kritik dan saran anda sangat kami harapkan demi kemajuan Manajemen.
        </li>
        <li>
          Identidas pengirim data akan sangat dirahasiakan dan tidak akan
          diketahui oleh siapapun
        </li>
      </ol>
      <form onSubmit={handleSubmit} ref={tagForm}>
        <div className="row">
          <div className="col-md-4">
            <Input
              label="Judul Kritik & Saran *"
              name="judul"
              onChange={(e) =>
                setForm((prevState) => {
                  return { ...prevState, [e.target.name]: e.target.value };
                })
              }
              error={errors.judul}
            />
          </div>
          <div className="col-md-4">
            <Input
              label="No HP (Optional)"
              name="no_hp"
              onChange={(e) =>
                setForm((prevState) => {
                  return { ...prevState, [e.target.name]: e.target.value };
                })
              }
              error={errors.no_hp}
            />
          </div>
          <div className="col-md-4">
            <Input
              label="Bagian Yang Dituju (Optional)"
              name="bagian"
              onChange={(e) =>
                setForm((prevState) => {
                  return { ...prevState, [e.target.name]: e.target.value };
                })
              }
              error={errors.bagian}
            />
          </div>
        </div>
        <Textarea
          label="Isi *"
          name="isi"
          onChange={(e) =>
            setForm((prevState) => {
              return { ...prevState, [e.target.name]: e.target.value };
            })
          }
          error={errors.isi}
        />
        <div className="row">
          <div className="col-md-4">
            <Input
              label="Foto (Optional)"
              name="foto"
              type="file"
              onChange={(e) =>
                setForm((prevState) => {
                  return { ...prevState, [e.target.name]: e.target.files[0] };
                })
              }
              error={errors.foto}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-sm btn-success px-3">
          Kirim
        </button>
      </form>
    </div>
  );
};

export default KsCreate;
