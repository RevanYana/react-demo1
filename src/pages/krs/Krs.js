import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { fetchKrs } from "../../api";
import Loading from "../../components/Loading";
import NoData from "../../components/NoData";
import Pagination from "../../components/Pagination";
import Table, { Thead } from "../../components/Table";
import { getHari } from "../../helpers";
import { titleState } from "../../storages";
import { tokenState } from "../../storages/auth";

const Krs = () => {
  const setTitle = useSetRecoilState(titleState);
  const token = useRecoilValue(tokenState);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTitle("Jadwal Perkuliahan (KRS)");
  }, [setTitle]);

  const [items, setItems] = useState({});
  const [page, setPage] = useState(1);

  const fetchData = useCallback(async () => {
    try {
      const res = await fetchKrs(page, token);
      setItems(res.data);
      setIsLoaded(true);
    } catch (err) {
      console.log(err);
    }
  }, [token, page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isLoaded) {
    return (
      <div>
        <Table>
          <Thead>
            <th>No</th>
            <th>Kode Kelas</th>
            <th>Ruangan</th>
            <th>Jam</th>
            <th>Dosen</th>
          </Thead>
          <tbody>
            {items.data &&
              items.data.length > 0 &&
              items.data.map((i, index) => {
                return (
                  <tr key={index}>
                    <td>{index + items.from}</td>
                    <td>{i.kelas && i.kelas.kode}</td>
                    <td>{i.ruangan && i.ruangan.nama}</td>
                    <td>
                      {i.jamkul &&
                        `Hari ${getHari(i.jamkul.hari)} (${i.jamkul.dari} - ${
                          i.jamkul.sampai
                        })`}
                    </td>
                    <td>{i.dosen && i.dosen.nama}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
        {items.data.length === 0 && <NoData />}
        <Pagination links={items.links} onChange={(res) => setPage(res)} />
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default Krs;
