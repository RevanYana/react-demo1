import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { fetchKrs } from "../../api";
import Loading from "../../components/Loading";
import Table, { Thead } from "../../components/Table";
import { getHari } from "../../helpers";
import { titleState } from "../../storages";
import { tokenState } from "../../storages/auth";

const Krs = () => {
  const setTitle = useSetRecoilState(titleState);
  const token = useRecoilValue(tokenState);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTitle("Jadwal Perkuliahan");
  }, [setTitle]);

  const [items, setItems] = useState({});
  const [page] = useState("all");

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
      <>
        <SemesterKrs items={items} semester={4} />
        <SemesterKrs items={items} semester={3} />
        <SemesterKrs items={items} semester={2} />
        <SemesterKrs items={items} semester={1} />
      </>
    );
  } else {
    return <Loading />;
  }
};

const SemesterKrs = (props) => {
  const { items, semester } = props;

  if (
    items &&
    items.length > 0 &&
    items.filter((i) => i.kelas && i.kelas.semester === semester).length > 0
  ) {
    return (
      <div className="mb-3">
        <h1>Semester {semester}</h1>
        <Table>
          <Thead>
            <th className="text-nowrap">No</th>
            <th className="text-nowrap">Kode Kelas</th>
            <th className="text-nowrap">Ruangan</th>
            <th className="text-nowrap">Jam</th>
            <th className="text-nowrap">Dosen</th>
            <th className="text-nowrap">Semester</th>
            <th className="text-nowrap">
              <i className="fa fa-bars" />
            </th>
          </Thead>
          <tbody>
            {items &&
              items.length > 0 &&
              items
                .filter((i) => i.kelas && i.kelas.semester === semester)
                .map((i, index) => {
                  return (
                    <tr key={index}>
                      <td className="text-center align-middle text-nowrap">
                        {index + 1}
                      </td>
                      <td className="text-center align-middle text-nowrap">
                        {i.kelas && i.kelas.kode}
                      </td>
                      <td className="text-center align-middle text-nowrap">
                        {i.ruangan && i.ruangan.nama}
                      </td>
                      <td className="text-center align-middle text-nowrap">
                        {i.jamkul &&
                          `Hari ${getHari(i.jamkul.hari)} (${
                            i.jamkul.dari
                          } s/d ${i.jamkul.sampai})`}
                      </td>
                      <td className="text-center align-middle text-nowrap">
                        {i.dosen && i.dosen.nama}
                      </td>
                      <td className="text-center align-middle text-nowrap">
                        {i.kelas && i.kelas.semester}
                      </td>
                      <td className="text-center align-middle text-nowrap">
                        {i.kelas && (
                          <>
                            <Link
                              to={`/kelas-show/${i.kelas.id}`}
                              className="text-primary"
                            >
                              <i className="fa fa-eye" /> Detail
                            </Link>
                            <span className="ms-1" />
                            <Link
                              to={`/kelas-penilaian-dosen/${
                                i.kelas && i.kelas.id
                              }`}
                              className="text-primary"
                            >
                              <i className="fa fa-theater-masks" /> Nilai Dosen
                            </Link>
                          </>
                        )}
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </Table>
      </div>
    );
  } else {
    return "";
  }
};

export default Krs;
