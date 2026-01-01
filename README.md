**Peringatan:** :red_circle: File ini dibuat khusus untuk keperluan edukasi dan penggunaan pribadi. Penulis tidak bertanggung jawab atas segala bentuk penyalahgunaan. Harap gunakan dengan bijak dan sebaiknya juga gunakan playlist IPTV resmi atau menggunakan jaringan lokal.

Untuk informasi lebih lanjut, kunjungi https://github.com/iptv-org/epg

## guide.xml
![20251206_131855(1)](https://github.com/user-attachments/assets/e14b9249-49b7-4206-bd7f-298cd0e926f9)
test-epg/guide.xml adalah jadwal siaran televisi nasional di Indonesia dalam bentuk XMLTV, untuk melengkapi playlist m3u IPTV anda. Jadi lebih mudah untuk merekam siaran dan memasang pengingat, serta memantau acara yang akan datang tanpa mengganti saluran<br>

### Kelebihan
- **Update Otomatis**: Dua kali setiap hari, memastikan jadwal adalah yang terbaru
- **Sumber Banyak**: Menggunakan berbagai situs *OTT Streaming* di Indonesia
- **Saluran Didukung**: Hingga 28 channel TV Nasional *(berdasarkan wilayah layanan Jakarta)*

### Penggunaan
- **Aplikasi Pemutar IPTV Umumnya**: Seperti Tivimate, OTTN, dll
- **Alat Live Channels Android TV**: Seperti TVirl, PVRLive, CosmiDVR, dll
- **Playlist m3u yang Didukung**

Playlist m3u yang digunakan harus memiliki `tvg-id` atau nama yang sesuai dengan EPG XMLTV agar jadwal dapat diterapkan di saluran yang tepat. Periksa https://raw.githubusercontent.com/kemalsyabaniadama/test-epg/refs/heads/main/.github/workflows/chlist.txt untuk daftar saluran yang tersedia di EPG dan lihat saluran yang akan Anda tambahkan

Contohnya:<br>
Di daftar saluran EPG, terdapat:
```
<channel site="visionplus.id" lang="id" xmltv_id="GTV.id@SD" site_id="00000000000000000003">GTV</channel>
```

Maka, playlist seharusnya menggunakan format berikut:
```
#EXTINF:-0 tvg-logo="png" tvg-id="GTV.id@SD" group-title="192.168.1.2", GTV
http://192.168.1.2:8999/stream=14.ts
```
artinya, `GTV.id@SD` adalah `tvg-id` dari saluran yang bernama GTV<br>
*(jika `tvg-id` tidak sesuai EPG XMLTV, setidaknya nama saluran sama dan tidak ditambahkan kata atau karakter lain seperti "HD" atau semacamnya)*

### Cara Menggunakan
1. Buka aplikasi pemutar IPTV anda;
2. Ubah pengaturan EPG (di beberapa aplikasi, mungkin harus mengubah playlist terlebih dahulu);
3. Masukkan link https://raw.githubusercontent.com/kemalsyabaniadama/test-epg/main/guide.xml .
4. Bisa juga dengan membuka file m3u yang dijadikan playlist IPTV menggunakan Notepad, masukkan kode berikut di line paling atas, simpan dengan tetap mempertahankan format file sebagai m3u
```
#EXTM3U  x-tvg-url=https://raw.githubusercontent.com/kemalsyabaniadama/test-epg/main/guide.xml refresh="1440" max-conn="1" refresh="24"
```
## iptv.m3u8
test-epg/iptv.m3u8 adalah file IPTV berbasis jaringan lokal berdasarkan alamat IP set top box yang mendukung DVB2IP (Matrix Apple Merah/DVB2IP, Tanaka T2 New/Jurrasic, dan semacamnya). Anda dapat menggunakannya sebagai template, dengan daftar dan link saluran versi sendiri
- Dengan menggunakan iptv.m3u8 ini, Anda bisa lebih mudah mengkustomisasi pengaturan siaran secara lebih luas, seperti EPG online, DVR, dan tentunya antarmuka yang lebih menyatu dengan sistem
- File iptv.m3u8 di repositori ini adalah untuk penggunaan pribadi dan bukan untuk umum. Jangan disalahgunakan untuk mendistribusikan konten siaran secara ilegal
- Tidak dapat langsung digunakan karena menggunakan jaringan lokal dari set top box DVB2IP
- Sebelum membuat playlist, pastikan alamat MAC set top box sudah disetting DHCP binding pada router, agar link saluran tidak berubah
- Link saluran disalin tempel manual dari device UPnP (DVB2IP set top box) yang terdeteksi di aplikasi VLC media player
- Dukungan multi-klien dan pemutaran siaran dari DVB2IP sangat dipengaruhi oleh set top box yang digunakan, isi format siaran, sinyal TV digital setempat, hingga media/perangkat pemutar atau klien
