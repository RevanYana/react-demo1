import React, { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { fetchProgkam } from "../../api";
import Table, { Thead } from "../../components/Table";
import { formatDate } from "../../helpers";
import { titleState } from "../../storages";
import { tokenState } from "../../storages/auth";

const Progkam = () => {
  const setTitle = useSetRecoilState(titleState);
  const token = useRecoilValue(tokenState);

  useEffect(() => setTitle("Nilai TAK"), [setTitle]);

  const [items, setItems] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchProgkam("all", token);
        setItems(res.data && res.data.progkam);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [token]);

  const getNilaiTotal = () => {
    let nilai = 0;
    items.length > 0 &&
      items.map((i) => {
        i.mhs && i.mhs.length === 1
          ? i.mhs[0].pivot && (nilai += i.mhs[0].pivot.nilai)
          : (nilai += i.nilai);
      });

    return nilai;
  };

  return (
    <>
      <div className="bg-light shadow-sm border text-center py-3">
        <h3>Total Nilai {getNilaiTotal()}</h3>
      </div>
      <h3>Program Kampus</h3>
      <Table>
        <Thead>
          <th>No</th>
          <th>Nama</th>
          <th>Tanggal</th>
          <th>Tempat</th>
          <th>Nilai</th>
        </Thead>
        <tbody>
          {items.length > 0 &&
            items
              .filter((i) => i.nim_mhs === null)
              .map((i, index) => {
                return (
                  <tr key={index}>
                    <td className="text-nowrap text-center">{index + 1}</td>
                    <td className="text-nowrap">{i.nama}</td>
                    <td className="text-nowrap text-center">
                      {formatDate(i.tanggal)}
                    </td>
                    <td className="text-nowrap">{i.tempat}</td>
                    <td className="text-nowrap text-center">
                      {i.mhs && i.mhs.length === 1
                        ? i.mhs[0].pivot && i.mhs[0].pivot.nilai
                        : i.nilai}
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </Table>

      <h3>Program Lepasan</h3>
      <Table>
        <Thead>
          <th>No</th>
          <th>Nama</th>
          <th>Tanggal</th>
          <th>Tempat</th>
          <th>Nilai</th>
        </Thead>
        <tbody>
          {items.length > 0 &&
            items
              .filter((i) => i.nim_mhs !== null)
              .map((i, index) => {
                return (
                  <tr key={index}>
                    <td className="text-nowrap text-center">{index + 1}</td>
                    <td className="text-nowrap">{i.nama}</td>
                    <td className="text-nowrap text-center">
                      {formatDate(i.tanggal)}
                    </td>
                    <td className="text-nowrap">{i.tempat}</td>
                    <td className="text-nowrap text-center">
                      {i.mhs && i.mhs.length === 1
                        ? i.mhs[0].pivot && i.mhs[0].pivot.nilai
                        : i.nilai}
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </Table>
    </>
  );
};

export default Progkam;
