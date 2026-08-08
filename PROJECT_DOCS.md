# Portofolio — Project Documentation

## 1. Tujuan & Audiens
Portofolio ini dirancang khusus untuk melayani dua target audiens yang berbeda tanpa mencampuradukkan pesan yang ingin disampaikan:
- **Recruiter/HRD**: Audiens ini mencari bukti kompetensi, pengalaman kerja nyata, dan sertifikasi. Mereka diarahkan melalui CTA "Lihat Portofolio Kerja" ke bagian **Portofolio Kerja (Projects & Skills)** dan **Sertifikat**.
- **Klien (EO, Idol Group, Bisnis)**: Audiens ini mencari jasa pembuatan website atau sistem informasi. Mereka diarahkan melalui CTA "Pesan Website" langsung ke bagian **Jasa Website (Services)** dan **Contact**.

Pemisahan ini memastikan flow pengguna (user journey) yang relevan bagi masing-masing target.

## 2. Struktur Halaman
Struktur landing page saat ini mengalir dengan urutan berikut:

1. **Hero (`Hero.jsx`)**: 
   - Berisi *positioning statement* personal yang menegaskan identitas sebagai lulusan RPL pembuat sistem nyata.
   - 2 CTA Button: "Lihat Portofolio Kerja" (target ke `#projects`) dan "Pesan Website" (target ke `#about`).
2. **Portofolio Kerja (`Projects.jsx`)**:
   - Menampilkan list proyek nyata (LokTik, Refresh Breeze, VIEOS, Metanaru).
   - Diakhiri dengan section **Teknologi & Tools (Skills)** yang di-grouping (Frontend, Backend, Design) menggunakan tag sederhana (tanpa persentase arbitrary).
3. **Sertifikat (`Certificates.jsx`)**:
   - Menampilkan bukti kompetensi formal (BNSP, JHIC, dll).
   - Section ini diletakkan tepat setelah Portofolio Kerja untuk melengkapi profil profesional bagi Recruiter.
4. **Jasa Website (`About.jsx`)**:
   - Diubah dari komponen "About" menjadi etalase jasa profesional.
   - Berisi layanan yang ditawarkan beserta benefit personal ("Why Work With Me") yang relevan dengan pengalaman membuat platform event/ticketing.
5. **Contact (`Contact.jsx`)**:
   - Berisi formasi CTA akhir dengan dua jalur: "Order via WhatsApp" untuk Klien, dan "Contact via Email" untuk Recruiter/Keperluan Bisnis Umum.
6. **Footer**: Informasi hak cipta dan social media links.

## 3. Style Guide
Desain portofolio ini sudah disesuaikan agar keluar dari gaya *template AI* bawaan (seperti blob animasi berlebih dan glassmorphism standar).
- **Palet Warna**: Mempertahankan identitas brand emerald/green (`#10b981`, `#059669`).
- **Card Styling (`.glass-card`)**: Menggunakan kombinasi border solid tipis (`border-emerald-900/50`) dan subtle shadow (`shadow-[0_8px_30px_rgba(0,0,0,0.5)]`) dengan background gelap `bg-emerald-950/40`, memberikan kesan tegas, modern, dan profesional, tidak sekadar *blur*.
- **Tipografi**: Menggunakan `Outfit` untuk seluruh Headings (h1-h6) dan `Inter` untuk body text, memastikan hirarki visual yang jelas dan sangat *readable*.
- **Interaksi**: Hover state pada `.glass-card-hover` menonjolkan shadow emerald dan efek translate-y (mengangkat card). 

## 4. Voice & Tone Guideline
- Seluruh *copywriting* berbahasa Indonesia menggunakan sudut pandang orang pertama (**"saya"**), menghindari penggunaan kata "Kami" atau "Anda" yang terlalu kaku dan terkesan seperti *agency template*.
- **Contoh SALAH**: "Kami hadir untuk mentransformasi ide Anda menjadi website high-converting."
- **Contoh BENAR**: "Saya hadir untuk menciptakan solusi digital yang benar-benar bekerja untuk kebutuhan bisnis Anda."

## 5. SEO Checklist
- `<title>`: "Mochammad Ferdy Nurdianto — Web Developer & Digital Solutions | Mojokerto"
- `<meta name="description">`: Berisi *value prop* utama sebagai lulusan RPL dan pembuat LokTik.
- **Open Graph (OG Tags)**: Telah diimplementasi (`og:title`, `og:description`, `og:image`, `og:type`, `og:url`) untuk memastikan *link preview* optimal saat dibagikan via WhatsApp/Instagram.
- **JSON-LD Schema**: Menggunakan skema `Person` standar untuk membantu Google mengidentifikasi profil, role, dan social media links.
- *Reminder*: Semua gambar baru wajib diberikan attribute `alt` yang mendeskripsikan gambar tersebut.

## 6. Data Structure (`src/data/`)
- **`siteConfig.json`**: Menyimpan semua data statis (Bio, Services, Benefits, Skills, Certificates, UI strings). 
  - Penambahan/pengurangan Jasa, Skill, atau Sertifikat dapat dilakukan dengan mengedit JSON ini tanpa menyentuh kode komponen `jsx`.
- **`projects.json`**: Menyimpan detail proyek. 
  - Deskripsi proyek difokuskan untuk menjawab "Masalah apa yang diselesaikan" dan "Tech Stack apa yang digunakan".

## 7. Catatan Teknis
- **Routing/Scrolling**: Navigasi menggunakan Anchor Links (`#id`) dan CSS *smooth-scroll*.
- **WhatsApp Logic**: Eksekusi *redirect* WhatsApp di `Contact.jsx` **tidak diubah** dan tetap menggunakan nomor yang didefinisikan dalam `siteConfig.json`.
- **Multibahasa**: Fungsi terjemahan (`t()`) dan `LanguageContext` dipertahankan dan di-support oleh update pada `siteConfig.json`.
