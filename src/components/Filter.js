import { fetchingData } from "../api";

// Search
export const FilterSearch = (props) => {
  const { label, placeholder, onChange } = props;

  let timer = 0;
  const handleChange = (val) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      onChange(val);
      fetchingData();
    }, 1000);
  };

  return (
    <div className="bg-light p-1 rounded">
      <label htmlFor="">{label ? label : "Search"}</label>
      <input
        type="text"
        className="form-control"
        placeholder={placeholder ? placeholder : "Search . . ."}
        onKeyUp={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export const FilterJurusan = (props) => {
  const { onChange } = props;

  return (
    <div className="bg-light p-1 rounded">
      <label htmlFor="">Jurusan</label>
      <select
        className="form-select"
        onChange={(e) => {
          onChange(e.target.value);
          fetchingData();
        }}
      >
        <option value="">Pilih Jurusan</option>
        <option value="1">Manajemen Administrasi Rumah Sakit</option>
        <option value="2">Manajemen Administrasi Bisnis</option>
        <option value="3">Manajemen Informatika dan Komputer</option>
        <option value="4">Komputer Akuntansi dan Perpajakan</option>
        <option value="5">Desain Grafis, Multemedia, dan Animasi</option>
        <option value="8">Manajemen Keuangan dan Perbankan</option>
        <option value="10">Digital Marketing dan Komunikasi</option>
      </select>
      <span className="text-danger">
        Note : Saat ini filter jurusan hanya dapat digunakan untuk Mhs angkatan
        2021
      </span>
    </div>
  );
};
