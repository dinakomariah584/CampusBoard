<div align="center">

🎓 CampusBoard

Pusat Informasi Kampus Terpadu

Final Project Rekayasa Perangkat Lunak - Kelompok 4

</div>

👥 Tim Pengembang

No

Nama Anggota

NIM

1

Indo Masse

701230001

2

Ririn Rahmawati

701230036

3

Dina Komariah

701230065

Dosen Pengampu: Dila Nurlaila, M.Kom.

📱 Deskripsi Aplikasi

CampusBoard adalah aplikasi berbasis web yang berfungsi sebagai papan informasi digital untuk lingkungan kampus UIN Sultan Thaha Saifuddin Jambi. Aplikasi ini memusatkan penyebaran pengumuman akademik, acara kemahasiswaan, dan kalender kegiatan dalam satu platform yang mudah diakses.

🎯 Tujuan & Masalah yang Diselesaikan

🔴 Masalah:
Informasi kampus sering tercecer di grup WhatsApp, tertimbun chat, atau hanya ditempel di papan fisik yang jarang dibaca.

🟢 Solusi:
CampusBoard menyediakan centralized hub di mana Admin dapat menyebarkan info resmi yang dapat diakses kapan saja secara real-time, dan Mahasiswa dapat berdiskusi serta menyimpan jadwal penting ke kalender pribadi.

🛠️ Teknologi yang Digunakan

Frontend: React.js (Vite Framework)

Styling: Tailwind CSS

Language: JavaScript (ES6+), HTML5

Database: Google Cloud Firestore (NoSQL)

Authentication: Firebase Auth

Deployment: Firebase Hosting

🚀 Cara Menjalankan Aplikasi CampusBoard

Aplikasi ini dibangun menggunakan React (Vite), jadi kita akan menggunakan Node.js dan npm (Node Package Manager).

1. Cara Instalasi

Langkah ini dilakukan sekali saja untuk mengunduh semua library yang dibutuhkan (React, Tailwind, Firebase).

Buka Terminal: Buka proyek Anda (CampusBoard1) di Visual Studio Code, lalu buka Terminal (View > Terminal).

Instalasi Dependency:

npm install


Install library Tailwind dan PostCSS:

npm install -D tailwindcss postcss autoprefixer


Install SweetAlert2:

npm install sweetalert2


2. Cara Konfigurasi (Menghubungkan ke Firebase)

Aplikasi tidak akan bisa memuat data atau fitur login/register jika belum terhubung ke database Anda.

Temukan File Konfigurasi: Buka file src/config/firebase.js.

Isi Data API: Pastikan kode di dalam file tersebut berisi detail proyek Firebase Anda (yang Anda dapatkan dari Firebase Console).

File: src/config/firebase.js

const firebaseConfig = {
    apiKey: "YOUR_API_KEY_HERE", // <-- GANTI DENGAN KUNCI ASLI ANDA
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    // ... lainnya
};


Login Firebase (Jika ingin deploy): Jika Anda ingin menguji login dan fitur secara lokal dengan akun Firebase, jalankan:

firebase login


3. Cara Menjalankan

Setelah semua package terinstal, Anda siap menjalankan aplikasi di browser.

Jalankan Server Development: Di Terminal, jalankan perintah standar Vite:

npm run dev


Akses Aplikasi: Terminal akan menampilkan alamat lokal, biasanya:

http://localhost:5173/


🔐 Akun Demo (Untuk Pengujian)

Jika Anda ingin mencoba fitur tanpa mendaftar, gunakan akun berikut:

Role

Email

Password

👑 Admin

campusboard1@gmail.com

adminkita

🎓 Mahasiswa

Mahasiswa58@gmail.com

Mhs123

🔗 Link Deployment & Demo

🌐 Aplikasi Web: https://campusboard1-c6e50.web.app/

📺 Video Demo: Tonton di YouTube

📸 Screenshot

<div align="center">
<img src="public/Home.png" alt="Tampilan Halaman Utama" width="700" style="border-radius: 10px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);">
</div>

📝 Catatan Tambahan

Fitur "Lupa Password" memerlukan konfigurasi domain hosting di Firebase Console agar link email berfungsi dengan benar.

Saat ini aplikasi berjalan optimal di browser Chrome dan Edge.

Dibuat untuk memenuhi tugas Final Project mata kuliah Rekayasa Perangkat Lunak, Program Studi Sistem Informasi, UIN Sultan Thaha Saifuddin Jambi, 2025.