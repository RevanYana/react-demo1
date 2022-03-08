import React, { useEffect, useState, useCallback } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { fetchBukuPerpustakaan } from "../../api";
import { FilterJurusan, FilterSearch } from "../../components/Filter";
import Pagination from "../../components/Pagination";
import Table, { Thead } from "../../components/Table";
import { getJurusan } from "../../helpers";
import { titleState } from "../../storages";
import { tokenState } from "../../storages/auth";

const BukuPerpustakaan = () => {
  const setTitle = useSetRecoilState(titleState);
  const token = useRecoilValue(tokenState);

  useEffect(() => {
    setTitle("Data Buku Perpustakaan");
  }, [setTitle]);

  const [items, setItems] = useState({});

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const fetchData = useCallback(async () => {
    try {
      const res = await fetchBukuPerpustakaan(page, token, `search=${search}`);
      if (res.data) {
        setItems(res.data.buku_perpustakaan);
      }
    } catch (err) {
      console.error(err);
    }
  }, [page, token, search]);

  useEffect(() => fetchData(), [fetchData]);

  return (
    <>
      <div className="row justify-content-end mb-2">
        <div className="col-6">
          <FilterJurusan onChange={(res) => setSearch(res)} />
        </div>
        <div className="col-6">
          <FilterSearch onChange={(res) => setSearch(res)} />
        </div>
      </div>
      <Table>
        <Thead>
          <th>No</th>
          <th>Kode</th>
          <th>Judul</th>
          <th>Jurusan</th>
          <th>Penerbit</th>
          <th>Pengarang</th>
          <th>Halaman</th>
        </Thead>
        <tbody>
          {items.data &&
            items.data.length > 0 &&
            items.data.map((i, index) => {
              return (
                <tr key={index}>
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">{i.kode}</td>
                  <td className="text-nowrap">{i.judul}</td>
                  <td className="text-nowrap">{getJurusan(i.jurusan_id)}</td>
                  <td className="text-nowrap">{i.penerbit}</td>
                  <td className="text-nowrap">{i.pengarang}</td>
                  <td className="text-center">{i.halaman}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      {items.links && items.links.length > 0 && (
        <Pagination links={items.links} onChange={(res) => setPage(res)} />
      )}
    </>
  );
};

export default BukuPerpustakaan;
