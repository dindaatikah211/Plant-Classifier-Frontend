# 🌿 Plant Classifier — Frontend

Antarmuka web untuk sistem klasifikasi tumbuhan berbasis gambar, dibangun dengan Next.js + Tailwind CSS.

> Bagian dari project **Tubes Pengolahan Citra** — sistem klasifikasi tumbuhan berbasis gambar.

---

## Struktur Folder

```
frontend/
├── app/
│   ├── page.tsx          # Halaman upload gambar
│   ├── result/
│   │   └── page.tsx      # Halaman hasil prediksi
│   └── layout.tsx
├── public/
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

---

## Instalasi & Menjalankan

### 1. Clone repo

```bash
git clone https://github.com/username/plant-classifier-frontend.git
cd plant-classifier-frontend
```

### 2. Install dependency

```bash
npm install
```

### 3. Pastikan Backend sudah berjalan

Frontend ini membutuhkan backend Flask yang berjalan di `http://localhost:5000`.  
Lihat: [plant-classifier-backend](https://github.com/username/plant-classifier-backend)

### 4. Jalankan development server

```bash
npm run dev
```

Buka browser ke `http://localhost:3000`

---

## Fitur

- Upload gambar via klik atau drag & drop
- Preview gambar sebelum diidentifikasi
- Menampilkan hasil prediksi utama beserta confidence score
- Menampilkan top 3 kemungkinan kelas
- Indikator visual: tanaman sehat (hijau) vs terdeteksi penyakit (merah)
- Confidence bar untuk setiap prediksi

---

## Tampilan

| Halaman Upload | Halaman Hasil |
|---|---|
| Upload gambar daun | Hasil identifikasi + top 3 |

---

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Fetch API (komunikasi ke Flask backend)

---

## Repo Terkait

- **Backend (Flask):** [plant-classifier-backend](https://github.com/username/plant-classifier-backend)