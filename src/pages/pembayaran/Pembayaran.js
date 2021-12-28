import React, { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { showProfile } from "../../api";
import Loading from "../../components/Loading";
import { formatDate, getCurrency } from "../../helpers";
import { titleState } from "../../storages";
import { tokenState, userState } from "../../storages/auth";

const Pembayaran = () => {
  const user = useRecoilValue(userState);
  const token = useRecoilValue(tokenState);

  const setTitlte = useSetRecoilState(titleState);
  useEffect(() => setTitlte("Data Pembayaran"), []);

  const [items, setItems] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await showProfile(user.id, token);
        if (res.data) {
          setItems(res.data.mhs);
        }
      } catch (err) {
        console.log(err.data);
      }
    };

    fetchData();
  }, [user.id, token]);

  return (
    <>
      {items.id ? (
        <>
          <h3 className="text-primary font-weight-bold">Biaya</h3>
          <div className="table-responsive mb-3">
            <table className="table table-sm table-striped table-bordered">
              <thead>
                <tr>
                  <th>Nama</th>
                  <th>Jumlah</th>
                  <th>Tanggal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-nowrap">Biaya Pendidikan</td>
                  <td className="text-nowrap">
                    Rp{" "}
                    {items.biaya &&
                      getCurrency(items.biaya.biaya_pendidikan, 0)}
                  </td>
                  <td className="text-nowrap">-</td>
                </tr>
                <tr>
                  <td className="text-nowrap">Subsidi</td>
                  <td className="text-nowrap">
                    Rp {items.biaya && getCurrency(items.biaya.subsidi, 0)}
                  </td>
                  <td className="text-nowrap">-</td>
                </tr>
                <tr>
                  <td className="text-nowrap">Kelas Malam (Optional)</td>
                  <td className="text-nowrap">
                    Rp {items.biaya && getCurrency(items.biaya.biaya_malam, 0)}
                  </td>
                  <td className="text-nowrap">-</td>
                </tr>
                <tr>
                  <td className="text-nowrap">Biaya Daftar</td>
                  <td className="text-nowrap">
                    Rp {items.biaya && getCurrency(items.biaya.daftar, 0)}
                  </td>
                  <td className="text-nowrap">
                    {items.biaya && formatDate(items.biaya.tanggal_daftar)}
                  </td>
                </tr>
                <tr>
                  <td className="text-nowrap">Biaya DPP</td>
                  <td className="text-nowrap">
                    Rp {items.biaya && getCurrency(items.biaya.biaya_dpp, 0)}
                  </td>
                  <td className="text-nowrap">-</td>
                </tr>
                <tr>
                  <td className="text-nowrap">Diskon DPP</td>
                  <td className="text-nowrap">
                    Rp {items.biaya && getCurrency(items.biaya.diskon_dpp, 0)}
                  </td>
                  <td className="text-nowrap">-</td>
                </tr>
                <tr>
                  <td className="text-nowrap">Bayar DPP</td>
                  <td className="text-nowrap">
                    Rp{" "}
                    {getCurrency(
                      (items.biaya ? items.biaya.du_1 : 0) +
                        (items.biaya ? items.biaya.du_2 : 0) +
                        (items.biaya ? items.biaya.du_3 : 0),
                      0
                    )}
                  </td>
                  <td className="text-nowrap">-</td>
                </tr>
                <tr>
                  <td className="text-nowrap">Angsuran</td>
                  <td className="text-nowrap">
                    Rp {items.biaya && getCurrency(items.biaya.angsuran, 0)}
                  </td>
                  <td className="text-nowrap">-</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-primary font-weight-bold">Angsuran</h3>
          <div className="table-responsive">
            <table className="table table-sm table-striped table-bordered">
              <thead>
                <tr>
                  <th>Nama</th>
                  <th>Jumlah</th>
                  <th>Tanggal</th>
                  <th>Denda</th>
                </tr>
              </thead>
              <tbody>
                {items.angsuran_1 && (
                  <>
                    <tr>
                      <td className="text-nowrap">Pembayaran 1</td>
                      <td className="text-nowrap">
                        Rp {getCurrency(items.angsuran_1.pembayaran_1, 0)}
                      </td>
                      <td className="text-nowrap">
                        {formatDate(items.angsuran_1.tanggal_1)}
                      </td>
                      <td className="text-nowrap">
                        Rp{" "}
                        {items.angsuran_1.denda_1
                          ? getCurrency(items.angsuran_1.denda_1, 0)
                          : "-"}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-nowrap">Pembayaran 2</td>
                      <td className="text-nowrap">
                        Rp {getCurrency(items.angsuran_1.pembayaran_2, 0)}
                      </td>
                      <td className="text-nowrap">
                        {formatDate(items.angsuran_1.tanggal_2)}
                      </td>
                      <td className="text-nowrap">
                        Rp{" "}
                        {items.angsuran_1.denda_2
                          ? getCurrency(items.angsuran_1.denda_2, 0)
                          : "-"}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-nowrap">Pembayaran 3</td>
                      <td className="text-nowrap">
                        Rp {getCurrency(items.angsuran_1.pembayaran_3, 0)}
                      </td>
                      <td className="text-nowrap">
                        {formatDate(items.angsuran_1.tanggal_3)}
                      </td>
                      <td className="text-nowrap">
                        Rp{" "}
                        {items.angsuran_1.denda_3
                          ? getCurrency(items.angsuran_1.denda_3, 0)
                          : "-"}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-nowrap">Pembayaran 4</td>
                      <td className="text-nowrap">
                        Rp {getCurrency(items.angsuran_1.pembayaran_4, 0)}
                      </td>
                      <td className="text-nowrap">
                        {formatDate(items.angsuran_1.tanggal_4)}
                      </td>
                      <td className="text-nowrap">
                        Rp{" "}
                        {items.angsuran_1.denda_4
                          ? getCurrency(items.angsuran_1.denda_4, 0)
                          : "-"}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-nowrap">Pembayaran 5</td>
                      <td className="text-nowrap">
                        Rp {getCurrency(items.angsuran_1.pembayaran_5, 0)}
                      </td>
                      <td className="text-nowrap">
                        {formatDate(items.angsuran_1.tanggal_5)}
                      </td>
                      <td className="text-nowrap">
                        Rp{" "}
                        {items.angsuran_1.denda_5
                          ? getCurrency(items.angsuran_1.denda_5, 0)
                          : "-"}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-nowrap">Pembayaran 6</td>
                      <td className="text-nowrap">
                        Rp {getCurrency(items.angsuran_1.pembayaran_6, 0)}
                      </td>
                      <td className="text-nowrap">
                        {formatDate(items.angsuran_1.tanggal_6)}
                      </td>
                      <td className="text-nowrap">
                        Rp{" "}
                        {items.angsuran_1.denda_6
                          ? getCurrency(items.angsuran_1.denda_6, 0)
                          : "-"}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-nowrap">Pembayaran 7</td>
                      <td className="text-nowrap">
                        Rp {getCurrency(items.angsuran_1.pembayaran_7, 0)}
                      </td>
                      <td className="text-nowrap">
                        {formatDate(items.angsuran_1.tanggal_7)}
                      </td>
                      <td className="text-nowrap">
                        Rp{" "}
                        {items.angsuran_1.denda_7
                          ? getCurrency(items.angsuran_1.denda_7, 0)
                          : "-"}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-nowrap">Pembayaran 8</td>
                      <td className="text-nowrap">
                        Rp {getCurrency(items.angsuran_1.pembayaran_8, 0)}
                      </td>
                      <td className="text-nowrap">
                        {formatDate(items.angsuran_1.tanggal_8)}
                      </td>
                      <td className="text-nowrap">
                        Rp{" "}
                        {items.angsuran_1.denda_8
                          ? getCurrency(items.angsuran_1.denda_8, 0)
                          : "-"}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-nowrap">Pembayaran 9</td>
                      <td className="text-nowrap">
                        Rp {getCurrency(items.angsuran_1.pembayaran_9, 0)}
                      </td>
                      <td className="text-nowrap">
                        {formatDate(items.angsuran_1.tanggal_9)}
                      </td>
                      <td className="text-nowrap">
                        Rp{" "}
                        {items.angsuran_1.denda_9
                          ? getCurrency(items.angsuran_1.denda_9, 0)
                          : "-"}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-nowrap">Pembayaran 10</td>
                      <td className="text-nowrap">
                        Rp {getCurrency(items.angsuran_1.pembayaran_10, 0)}
                      </td>
                      <td className="text-nowrap">
                        {formatDate(items.angsuran_1.tanggal_10)}
                      </td>
                      <td className="text-nowrap">
                        Rp{" "}
                        {items.angsuran_1.denda_10
                          ? getCurrency(items.angsuran_1.denda_10, 0)
                          : "-"}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-nowrap">Pembayaran 11</td>
                      <td className="text-nowrap">
                        Rp {getCurrency(items.angsuran_1.pembayaran_11, 0)}
                      </td>
                      <td className="text-nowrap">
                        {formatDate(items.angsuran_1.tanggal_11)}
                      </td>
                      <td className="text-nowrap">
                        Rp{" "}
                        {items.angsuran_1.denda_11
                          ? getCurrency(items.angsuran_1.denda_11, 0)
                          : "-"}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-nowrap">Pembayaran 12</td>
                      <td className="text-nowrap">
                        Rp {getCurrency(items.angsuran_1.pembayaran_12, 0)}
                      </td>
                      <td className="text-nowrap">
                        {formatDate(items.angsuran_1.tanggal_12)}
                      </td>
                      <td className="text-nowrap">
                        Rp{" "}
                        {items.angsuran_1.denda_12
                          ? getCurrency(items.angsuran_1.denda_12, 0)
                          : "-"}
                      </td>
                    </tr>
                  </>
                )}
                {items.angsuran_2 && (
                  <>
                    <tr>
                      <td className="text-nowrap">Pembayaran 1</td>
                      <td className="text-nowrap">
                        Rp {getCurrency(items.angsuran_2.pembayaran_1, 0)}
                      </td>
                      <td className="text-nowrap">
                        {formatDate(items.angsuran_2.tanggal_1)}
                      </td>
                      <td className="text-nowrap">
                        Rp{" "}
                        {items.angsuran_2.denda_1
                          ? getCurrency(items.angsuran_2.denda_1 * 5000, 0)
                          : "-"}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-nowrap">Pembayaran 2</td>
                      <td className="text-nowrap">
                        Rp {getCurrency(items.angsuran_2.pembayaran_2, 0)}
                      </td>
                      <td className="text-nowrap">
                        {formatDate(items.angsuran_2.tanggal_2)}
                      </td>
                      <td className="text-nowrap">
                        Rp{" "}
                        {items.angsuran_2.denda_2
                          ? getCurrency(items.angsuran_2.denda_2 * 5000, 0)
                          : "-"}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-nowrap">Pembayaran 3</td>
                      <td className="text-nowrap">
                        Rp {getCurrency(items.angsuran_2.pembayaran_3, 0)}
                      </td>
                      <td className="text-nowrap">
                        {formatDate(items.angsuran_2.tanggal_3)}
                      </td>
                      <td className="text-nowrap">
                        Rp{" "}
                        {items.angsuran_2.denda_3
                          ? getCurrency(items.angsuran_2.denda_3 * 5000, 0)
                          : "-"}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-nowrap">Pembayaran 4</td>
                      <td className="text-nowrap">
                        Rp {getCurrency(items.angsuran_2.pembayaran_4, 0)}
                      </td>
                      <td className="text-nowrap">
                        {formatDate(items.angsuran_2.tanggal_4)}
                      </td>
                      <td className="text-nowrap">
                        Rp{" "}
                        {items.angsuran_2.denda_4
                          ? getCurrency(items.angsuran_2.denda_4 * 5000, 0)
                          : "-"}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-nowrap">Pembayaran 5</td>
                      <td className="text-nowrap">
                        Rp {getCurrency(items.angsuran_2.pembayaran_5, 0)}
                      </td>
                      <td className="text-nowrap">
                        {formatDate(items.angsuran_2.tanggal_5)}
                      </td>
                      <td className="text-nowrap">
                        Rp{" "}
                        {items.angsuran_2.denda_5
                          ? getCurrency(items.angsuran_2.denda_5 * 5000, 0)
                          : "-"}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-nowrap">Pembayaran 6</td>
                      <td className="text-nowrap">
                        Rp {getCurrency(items.angsuran_2.pembayaran_6, 0)}
                      </td>
                      <td className="text-nowrap">
                        {formatDate(items.angsuran_2.tanggal_6)}
                      </td>
                      <td className="text-nowrap">
                        Rp{" "}
                        {items.angsuran_2.denda_6
                          ? getCurrency(items.angsuran_2.denda_6 * 5000, 0)
                          : "-"}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-nowrap">Pembayaran 7</td>
                      <td className="text-nowrap">
                        Rp {getCurrency(items.angsuran_2.pembayaran_7, 0)}
                      </td>
                      <td className="text-nowrap">
                        {formatDate(items.angsuran_2.tanggal_7)}
                      </td>
                      <td className="text-nowrap">
                        Rp{" "}
                        {items.angsuran_2.denda_7
                          ? getCurrency(items.angsuran_2.denda_7 * 5000, 0)
                          : "-"}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-nowrap">Pembayaran 8</td>
                      <td className="text-nowrap">
                        Rp {getCurrency(items.angsuran_2.pembayaran_8, 0)}
                      </td>
                      <td className="text-nowrap">
                        {formatDate(items.angsuran_2.tanggal_8)}
                      </td>
                      <td className="text-nowrap">
                        Rp{" "}
                        {items.angsuran_2.denda_8
                          ? getCurrency(items.angsuran_2.denda_8 * 5000, 0)
                          : "-"}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-nowrap">Pembayaran 9</td>
                      <td className="text-nowrap">
                        Rp {getCurrency(items.angsuran_2.pembayaran_9, 0)}
                      </td>
                      <td className="text-nowrap">
                        {formatDate(items.angsuran_2.tanggal_9)}
                      </td>
                      <td className="text-nowrap">
                        Rp{" "}
                        {items.angsuran_2.denda_9
                          ? getCurrency(items.angsuran_2.denda_9 * 5000, 0)
                          : "-"}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-nowrap">Pembayaran 10</td>
                      <td className="text-nowrap">
                        Rp {getCurrency(items.angsuran_2.pembayaran_10, 0)}
                      </td>
                      <td className="text-nowrap">
                        {formatDate(items.angsuran_2.tanggal_10)}
                      </td>
                      <td className="text-nowrap">
                        Rp{" "}
                        {items.angsuran_2.denda_10
                          ? getCurrency(items.angsuran_2.denda_10 * 5000, 0)
                          : "-"}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-nowrap">Pembayaran 11</td>
                      <td className="text-nowrap">
                        Rp {getCurrency(items.angsuran_2.pembayaran_11, 0)}
                      </td>
                      <td className="text-nowrap">
                        {formatDate(items.angsuran_2.tanggal_11)}
                      </td>
                      <td className="text-nowrap">
                        Rp{" "}
                        {items.angsuran_2.denda_11
                          ? getCurrency(items.angsuran_2.denda_11 * 5000, 0)
                          : "-"}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-nowrap">Pembayaran 12</td>
                      <td className="text-nowrap">
                        Rp {getCurrency(items.angsuran_2.pembayaran_12, 0)}
                      </td>
                      <td className="text-nowrap">
                        {formatDate(items.angsuran_2.tanggal_12)}
                      </td>
                      <td className="text-nowrap">
                        Rp{" "}
                        {items.angsuran_2.denda_12
                          ? getCurrency(items.angsuran_2.denda_12 * 5000, 0)
                          : "-"}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-nowrap">Pembayaran 13</td>
                      <td className="text-nowrap">
                        Rp {getCurrency(items.angsuran_2.pembayaran_13, 0)}
                      </td>
                      <td className="text-nowrap">
                        {formatDate(items.angsuran_2.tanggal_13)}
                      </td>
                      <td className="text-nowrap">
                        Rp{" "}
                        {items.angsuran_2.denda_13
                          ? getCurrency(items.angsuran_2.denda_13 * 5000, 0)
                          : "-"}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-nowrap">Pembayaran 14</td>
                      <td className="text-nowrap">
                        Rp {getCurrency(items.angsuran_2.pembayaran_14, 0)}
                      </td>
                      <td className="text-nowrap">
                        {formatDate(items.angsuran_2.tanggal_14)}
                      </td>
                      <td className="text-nowrap">
                        Rp{" "}
                        {items.angsuran_2.denda_14
                          ? getCurrency(items.angsuran_2.denda_14 * 5000, 0)
                          : "-"}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-nowrap">Pembayaran 15</td>
                      <td className="text-nowrap">
                        Rp {getCurrency(items.angsuran_2.pembayaran_15, 0)}
                      </td>
                      <td className="text-nowrap">
                        {formatDate(items.angsuran_2.tanggal_15)}
                      </td>
                      <td className="text-nowrap">
                        Rp{" "}
                        {items.angsuran_2.denda_15
                          ? getCurrency(items.angsuran_2.denda_15 * 5000, 0)
                          : "-"}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-nowrap">Pembayaran 16</td>
                      <td className="text-nowrap">
                        Rp {getCurrency(items.angsuran_2.pembayaran_16, 0)}
                      </td>
                      <td className="text-nowrap">
                        {formatDate(items.angsuran_2.tanggal_16)}
                      </td>
                      <td className="text-nowrap">
                        Rp{" "}
                        {items.angsuran_2.denda_16
                          ? getCurrency(items.angsuran_2.denda_16 * 5000, 0)
                          : "-"}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-nowrap">Pembayaran 17</td>
                      <td className="text-nowrap">
                        Rp {getCurrency(items.angsuran_2.pembayaran_17, 0)}
                      </td>
                      <td className="text-nowrap">
                        {formatDate(items.angsuran_2.tanggal_17)}
                      </td>
                      <td className="text-nowrap">
                        Rp{" "}
                        {items.angsuran_2.denda_17
                          ? getCurrency(items.angsuran_2.denda_17 * 5000, 0)
                          : "-"}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-nowrap">Pembayaran 18</td>
                      <td className="text-nowrap">
                        Rp {getCurrency(items.angsuran_2.pembayaran_18, 0)}
                      </td>
                      <td className="text-nowrap">
                        {formatDate(items.angsuran_2.tanggal_18)}
                      </td>
                      <td className="text-nowrap">
                        Rp{" "}
                        {items.angsuran_2.denda_18
                          ? getCurrency(items.angsuran_2.denda_18 * 5000, 0)
                          : "-"}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-nowrap">Pembayaran 19</td>
                      <td className="text-nowrap">
                        Rp {getCurrency(items.angsuran_2.pembayaran_19, 0)}
                      </td>
                      <td className="text-nowrap">
                        {formatDate(items.angsuran_2.tanggal_19)}
                      </td>
                      <td className="text-nowrap">
                        Rp{" "}
                        {items.angsuran_2.denda_19
                          ? getCurrency(items.angsuran_2.denda_19 * 5000, 0)
                          : "-"}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-nowrap">Pembayaran 20</td>
                      <td className="text-nowrap">
                        Rp {getCurrency(items.angsuran_2.pembayaran_20, 0)}
                      </td>
                      <td className="text-nowrap">
                        {formatDate(items.angsuran_2.tanggal_20)}
                      </td>
                      <td className="text-nowrap">
                        Rp{" "}
                        {items.angsuran_2.denda_20
                          ? getCurrency(items.angsuran_2.denda_20 * 5000, 0)
                          : "-"}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-nowrap">Pembayaran 21</td>
                      <td className="text-nowrap">
                        Rp {getCurrency(items.angsuran_2.pembayaran_21, 0)}
                      </td>
                      <td className="text-nowrap">
                        {formatDate(items.angsuran_2.tanggal_21)}
                      </td>
                      <td className="text-nowrap">
                        Rp{" "}
                        {items.angsuran_2.denda_21
                          ? getCurrency(items.angsuran_2.denda_21 * 5000, 0)
                          : "-"}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-nowrap">Pembayaran 22</td>
                      <td className="text-nowrap">
                        Rp {getCurrency(items.angsuran_2.pembayaran_22, 0)}
                      </td>
                      <td className="text-nowrap">
                        {formatDate(items.angsuran_2.tanggal_22)}
                      </td>
                      <td className="text-nowrap">
                        Rp{" "}
                        {items.angsuran_2.denda_22
                          ? getCurrency(items.angsuran_2.denda_22 * 5000, 0)
                          : "-"}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-nowrap">Pembayaran 23</td>
                      <td className="text-nowrap">
                        Rp {getCurrency(items.angsuran_2.pembayaran_23, 0)}
                      </td>
                      <td className="text-nowrap">
                        {formatDate(items.angsuran_2.tanggal_23)}
                      </td>
                      <td className="text-nowrap">
                        Rp{" "}
                        {items.angsuran_2.denda_23
                          ? getCurrency(items.angsuran_2.denda_23 * 5000, 0)
                          : "-"}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-nowrap">Pembayaran 24</td>
                      <td className="text-nowrap">
                        Rp {getCurrency(items.angsuran_2.pembayaran_24, 0)}
                      </td>
                      <td className="text-nowrap">
                        {formatDate(items.angsuran_2.tanggal_24)}
                      </td>
                      <td className="text-nowrap">
                        Rp{" "}
                        {items.angsuran_2.denda_24
                          ? getCurrency(items.angsuran_2.denda_24 * 5000, 0)
                          : "-"}
                      </td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Pembayaran;
