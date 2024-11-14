import React from 'react'
import '../dist/css/main.css';
import SidebarComponent from '../components/SidebarComponent.jsx';
import HeaderComponent from '../components/HeaderComponent.jsx';
import transactionProofImage from '../assets/img/tf.png';

function Detailtransaksi() {
    return (
        <>
            <HeaderComponent />
            <SidebarComponent />
            <div className="payment-detail">
                <section className="section">
                    <h2>Detail Pembayaran</h2>
                    <div className="section-content">
                        <p><strong>Tanggal</strong> <span>7 November 2024</span></p>
                        <p><strong>Booking ID</strong> <span>KT-0001</span></p>
                        <p><strong>Booking Ref</strong> <span>-</span></p>
                        <p><strong>Transaction ID</strong> <span>-</span></p>
                        <p><strong>Metode Pembayaran</strong> <span>Dana</span></p>
                    </div>
                </section>

                <section className="section">
                    <h2>Rincian Harga</h2>
                    <div className="section-content">
                        <p><strong>Camping Biasa (1x)</strong> <span>Rp. 200.00</span></p>
                        <p><strong>Service Fee</strong> <span>Rp. 100.000</span></p>
                        <p className="total"><strong>Total Pembayaran</strong> <span>Rp. 300.000</span></p>
                    </div>
                </section>

                <section className="section">
                    <h2>Rincian Kontak</h2>
                    <div className="section-content">
                        <p><strong>Nama Lengkap</strong> <span>Michael Wicaksono</span></p>
                        <p><strong>Email</strong> <span>michaelwicaksono@gmail.com</span></p>
                        <p><strong>Nomor Telepon</strong> <span>089611245260</span></p>
                    </div>
                </section>

                <section className="section">
                    <h2>Bukti Transaksi</h2>
                    <div className="section-content">
                        <img
                            src={transactionProofImage} // Use the imported image here
                            alt="Bukti Transaksi"
                            className="transaction-proof"
                        />
                    </div>
                </section>

                <section className="section status-section">
                    <h2>Status</h2>
                    <div className="section-content">
                        <label>Update Status Pesanan</label>
                        <select>
                            <option value="">Pilih</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="pending">Pending</option>
                        </select>
                        <button className="save-button">Simpan</button>
                        <p className="status-note">Status hanya bisa diupdate 1 kali</p>
                    </div>
                </section>

                <button className="view-receipt-button">Lihat Bukti Pembayaran</button>
            </div>
        </>
    );
}

export default Detailtransaksi;