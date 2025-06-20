
import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function Home() {
  const [orders, setOrders] = useState([]);
  const [pengeluaran, setPengeluaran] = useState([]);

  const totalPemasukan = orders.reduce((acc, o) => acc + o.jumlah * o.harga, 0);
  const totalPengeluaran = pengeluaran.reduce((acc, p) => acc + p.biaya, 0);

  useEffect(() => {
    const savedOrders = localStorage.getItem("kaosan_orders");
    const savedPengeluaran = localStorage.getItem("kaosan_pengeluaran");
    if (savedOrders) setOrders(JSON.parse(savedOrders));
    if (savedPengeluaran) setPengeluaran(JSON.parse(savedPengeluaran));
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard Kaosan Bogor</title>
      </Head>
      <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
        <h1>Dashboard Kaosan Bogor</h1>
        <p>Total Pemasukan: Rp {totalPemasukan.toLocaleString()}</p>
        <p>Total Pengeluaran: Rp {totalPengeluaran.toLocaleString()}</p>
        <p>Laba / Rugi: Rp {(totalPemasukan - totalPengeluaran).toLocaleString()}</p>
        <p style={{ marginTop: '1rem' }}>Data disimpan otomatis di browser.</p>
      </main>
    </>
  );
}
