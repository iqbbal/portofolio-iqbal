# 📘 Panduan Menjalankan & Mengelola Portofolio

Dokumentasi ini berisi panduan lengkap langkah demi langkah untuk menjalankan, menghentikan, menyimpan aset gambar, mengubah konten, dan melakukan *deployment* website portofolio **Muhammad Iqbal**.

---

## 📌 1. Prasyarat Sistem
Pastikan komputer Anda sudah terinstal:
- **Node.js** (versi 18+ atau 20+)
- **npm** (versi 9+ atau 10+)

Untuk memeriksa versi yang terpasang di terminal:
```bash
node -v
npm -v
```

---

## 🚀 2. Cara Menjalankan Server (Local Development)

1. Buka aplikasi **Terminal** (di macOS: tekan `Cmd + Space`, ketik `Terminal`, lalu tekan `Enter`).
2. Masuk ke direktori proyek:
   ```bash
   cd /Users/haimac/iqbal-workspace/experiment/portofolio-iqbal
   ```
3. Jalankan perintah:
   ```bash
   npm run dev
   ```
4. Terminal akan menampilkan status:
   ```text
     ▲ Next.js 16.3.6
     - Local:        http://localhost:3000
     - Network:      http://192.168.x.x:3000
   ```
5. Buka browser (Chrome / Safari / Firefox) dan akses:
   👉 **`http://localhost:3000`**

---

## 🛑 3. Cara Menghentikan Server (Stop)

### Cara Utama:
Pada jendela Terminal tempat `npm run dev` sedang berjalan, tekan kombinasi tombol:
> **`Ctrl` + `C`**

Server akan langsung dimatikan dan terminal kembali bebas.

---

### 💡 Solusi Jika Port 3000 Masih Tersangkut (*Port in Use*):
Jika terminal tertutup secara tiba-tiba tetapi port 3000 masih aktif di latar belakang, jalankan perintah ini di macOS:
```bash
lsof -ti:3000 | xargs kill -9
```

---

## 🖼️ 4. Tempat Menyimpan Aset Gambar & PDF

Di Next.js, semua aset statis (gambar, logo, screenshot mockup, dan resume PDF) disimpan di dalam folder **`public/assets/`**:

```
portofolio-iqbal/
└── public/
    └── assets/
        ├── images/                     # Foto profil, icon, avatar
        │   └── avatar.webp
        ├── projects/                   # Screenshot / mockup aplikasi mobile
        │   ├── mitsubishi/             # Layar aplikasi Mitsubishi Motors ID
        │   ├── bumame/                 # Layar aplikasi Bumame
        │   ├── nolimit/                # Layar aplikasi NoLimit Engage
        │   ├── pupr/                   # Layar aplikasi PUPR Visual Inspection
        │   ├── akselhr/                # Layar aplikasi AkselHR
        │   └── imuni/                  # Layar aplikasi Imuni
        └── resume/                     # Berkas PDF CV / Resume
            └── Muhammad_Iqbal_Resume.pdf
```

### 🔗 Cara Memanggil File Gambar di Data:
File di dalam folder `public/` otomatis bisa dipanggil dari root `/` tanpa menuliskan kata `public`.

**Contoh:**
- File: `public/assets/projects/mitsubishi/screen-1.webp`
- Di dalam kode/data cukup tulis: `"/assets/projects/mitsubishi/screen-1.webp"`

### 💡 Tips Format Gambar Terbaik:
1. **Format:** Gunakan `.webp` atau `.png` beresolusi tajam.
2. **Dimensi Mockup Mobile:** Rasio smartphone modern `9:19.5` (contoh: `1080 x 2340 px` atau `750 x 1624 px`).
3. **Ukuran File:** Kompres gambar agar di bawah `300 KB` per file menggunakan tools gratis seperti [TinyPNG](https://tinypng.com) atau [Squoosh](https://squoosh.app).

---

## ✏️ 5. Panduan Mengubah Konten Portofolio (Clean Architecture)

Semua teks dan data dipusatkan di folder:
`src/core/infrastructure/datasources/static/`

| Konten yang Ingin Diubah | Path File | Keterangan |
| :--- | :--- | :--- |
| **Profil, Headline & Kontak** | [`src/core/infrastructure/datasources/static/raw-profile.data.ts`](../src/core/infrastructure/datasources/static/raw-profile.data.ts) | Ubah nama, email, no WA, lokasi, headline, status availability. |
| **Proyek & Mockup Mobile** | [`src/core/infrastructure/datasources/static/raw-projects.data.ts`](../src/core/infrastructure/datasources/static/raw-projects.data.ts) | Tambah/ubah case studies, mockup screen preview, metrik, path gambar, dan link Store/GitHub. |
| **Riwayat Pengalaman Kerja** | [`src/core/infrastructure/datasources/static/raw-experience.data.ts`](../src/core/infrastructure/datasources/static/raw-experience.data.ts) | Tambah/ubah posisi, perusahaan, periode, dan bullet point pencapaian. |
| **Matriks Keahlian & Arsitektur** | [`src/core/infrastructure/datasources/static/raw-skills.data.ts`](../src/core/infrastructure/datasources/static/raw-skills.data.ts) | Kelompokkan keahlian (Flutter, Kotlin, State Management, Room DB). |
| **Edukasi & Prestasi** | [`src/core/infrastructure/datasources/static/raw-education.data.ts`](../src/core/infrastructure/datasources/static/raw-education.data.ts) | Informasi gelar universitas, SMK, dan penghargaan lomba. |

> **Fitur Hot Reload:** Setiap kali Anda menyimpan file (`Cmd + S`), tampilan website di browser akan otomatis diperbarui seketika tanpa perlu me-restart server.

---

## 🏗️ 6. Build & Verifikasi Produksi

Untuk memastikan seluruh kode bebas error sebelum di-upload ke server / hosting:

```bash
# 1. Menjalankan kompilasi produksi
npm run build

# 2. Menjalankan server hasil build lokal (opsional untuk simulasi produksi)
npm run start
```

---

## 🌐 7. Panduan Singkat Deployment ke Vercel

Proyek ini sudah *Vercel-Ready*. Cara deploy termudah:
1. Push kode ini ke akun **GitHub** Anda.
2. Buka [Vercel.com](https://vercel.com) dan login dengan akun GitHub.
3. Klik **"Add New Project"** dan pilih repositori portofolio ini.
4. Klik tombol **"Deploy"** (pengaturan Next.js akan terdeteksi otomatis).
5. Dalam ~1 menit, website Anda sudah aktif secara live dengan domain global gratis `your-portfolio.vercel.app` atau custom domain Anda.
