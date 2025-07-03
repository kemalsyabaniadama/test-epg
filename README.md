**Peringatan:** :red_circle: File ini dibuat khusus untuk keperluan edukasi dan penggunaan pribadi. Penulis tidak bertanggung jawab atas segala bentuk penyalahgunaan. Harap gunakan dengan bijak dan sebaiknya juga gunakan playlist IPTV resmi atau menggunakan jaringan lokal.

Untuk informasi lebih lanjut, kunjungi https://github.com/iptv-org/epg

## guide.xml
test-epg/guide.xml adalah jadwal siaran televisi nasional di Indonesia, untuk melengkapi playlist m3u IPTV anda. Jadi lebih mudah untuk merekam siaran dan memasang pengingat<br>

### Kelebihan
- **Update Otomatis**: Dua kali setiap hari, memastikan jadwal adalah yang terbaru
- **Sumber Banyak**: Menggunakan berbagai situs *OTT Streaming* di Indonesia
- **Saluran Didukung**: Hingga 28 channel TV Nasional *(berdasarkan wilayah layanan Jakarta)*

### Penggunaan
- **Aplikasi Pemutar IPTV Umumnya**: Seperti Tivimate, OTTN, dll
- **Alat Live Channels Android TV**: Seperti TVirl, PVRLive, CosmiDVR, dll
- **Playlist m3u yang Didukung**

Playlist m3u yang digunakan harus memiliki `tvg-id` dan nama yang sesuai agar jadwal diterapkan di saluran yang tepat. Contohnya:
```
#EXTINF:-0 tvg-logo="png" tvg-id="GTV.id" group-title="192.168.1.2", GTV
http://192.168.1.2:8999/stream=14.ts
```
artinya, `GTV.id` adalah `tvg-id` dari saluran GTV<br>
*(jika `tvg-id` tidak sesuai, setidaknya nama saluran tidak ditambahkan kata atau karakter lain seperti "HD" dan semacamnya)*

### Cara Menggunakan
1. Buka aplikasi pemutar IPTV anda;
2. Ubah pengaturan EPG (di beberapa aplikasi, mungkin harus mengubah playlist terlebih dahulu;
3. Masukkan link https://raw.githubusercontent.com/kemalsyabaniadama/test-epg/main/guide.xml .
4. Kalo males ngetik, buka file m3u yang dijadikan playlist IPTV di Notepad, masukkan kode berikut di line paling atas, simpan dengan tetap mempertahankan format file sebagai m3u
```
#EXTM3U  x-tvg-url=https://raw.githubusercontent.com/kemalsyabaniadama/test-epg/main/guide.xml refresh="1440" max-conn="1" refresh="24"
```
## iptv.m3u8
- Perlu diperhatikan, file iptv.m3u8 di repositori ini adalah untuk penggunaan pribadi penulis dan bukan untuk umum
- Kalo mau pake ya gabakal bisa juga karena pakai jaringan lokal dari DVB2IP set top box yang MACnya sudah disetting ke DHCP binding
- Link saluran dicopy paste manual dari device UPnP (DVB2IP set top box) yang terdeteksi di VLC
