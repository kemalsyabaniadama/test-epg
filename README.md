**Peringatan:** :red_circle: Aplikasi ini dibuat khusus untuk keperluan edukasi dan penggunaan pribadi. Penulis tidak bertanggung jawab atas segala bentuk penyalahgunaan. Harap gunakan dengan bijak dan sebaiknya juga gunakan playlist IPTV resmi atau menggunakan jaringan lokal.

## Tentang
test-epg adalah jadwal siaran televisi nasional di Indonesia, untuk melengkapi playlist m3u IPTV anda. Jadi lebih mudah untuk merekam siaran dan memasang pengingat<br>

**Kelebihan**:<br>
- **Update Otomatis**: Dua kali setiap hari, memastikan jadwal adalah yang terbaru
- **Sumber Banyak**: Menggunakan berbagai situs *OTT Streaming* di Indonesia
- **Saluran Didukung**: Hingga 30 channel TV Nasional *(bisa request kalo mau)*

## Penggunaan
- **Aplikasi Pemutar IPTV Umumnya**: Seperti Tivimate, OTTN, dll
- **Alat Live Channels Android TV**: Seperti TVirl, PVRLive, CosmiDVR, dll

## Cara Menggunakan
1. Buka aplikasi pemutar IPTV anda;
2. Ubah pengaturan EPG (di beberapa aplikasi, mungkin harus mengubah playlist terlebih dahulu;
3. Masukkan link https://raw.githubusercontent.com/kemalsyabaniadama/test-epg/main/guide.xml .
4. Kalo males ngetik, buka file m3u yang dijadikan playlist IPTV di Notepad, masukkan kode berikut di line paling atas, simpan dengan tetap mempertahankan format file sebagai m3u
```
#EXTM3U  x-tvg-url=https://raw.githubusercontent.com/kemalsyabaniadama/test-epg/main/guide.xml refresh="1440" max-conn="1" refresh="24"
```
