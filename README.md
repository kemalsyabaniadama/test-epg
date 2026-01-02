**Peringatan:** :red_circle: File ini dibuat khusus untuk keperluan edukasi dan penggunaan pribadi. Penulis tidak bertanggung jawab atas segala bentuk penyalahgunaan. Harap gunakan dengan bijak dan sebaiknya juga gunakan playlist IPTV resmi atau menggunakan jaringan lokal.

Untuk informasi lebih lanjut, kunjungi https://github.com/iptv-org/epg

## guide.xml
![20251206_131855(1)](https://github.com/user-attachments/assets/e14b9249-49b7-4206-bd7f-298cd0e926f9)
<br>test-epg/guide.xml adalah jadwal siaran televisi nasional di Indonesia dalam bentuk XMLTV, untuk melengkapi playlist m3u IPTV Anda. Jadi lebih mudah untuk merekam siaran dan memasang pengingat, serta memantau acara yang akan datang tanpa mengganti saluran<br>

### Kelebihan
- **Update Otomatis**: Dua kali setiap hari, memastikan jadwal adalah yang terbaru
- **Sumber Banyak**: Menggunakan berbagai situs *OTT Streaming* di Indonesia
- **Saluran Didukung**: Hingga 28 channel TV Nasional *(berdasarkan wilayah layanan Jakarta)*

### Penggunaan
- **Aplikasi Pemutar IPTV Umumnya**: Seperti Tivimate, OTTN, dll
- **Alat Live Channels Android TV**: Seperti TVirl, PVRLive, CosmiDVR, dll
- **Playlist m3u yang Didukung**

Playlist m3u yang digunakan harus memiliki `tvg-id` yang sama dengan `xmltv-id`, atau memiliki nama yang sama seperti tercantum di daftar saluran EPG, agar jadwal dapat diterapkan di saluran yang tepat. Periksa https://raw.githubusercontent.com/kemalsyabaniadama/test-epg/main/.github/workflows/chlist.txt untuk daftar saluran yang tersedia di EPG dan lihat saluran yang akan Anda tambahkan

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
*(jika `tvg-id` tidak sesuai `xmltv-id` di daftar saluran EPG, setidaknya nama saluran sama dan tidak ditambahkan kata atau karakter lain seperti "HD" atau semacamnya)*

### Cara Menggunakan
1. Buka aplikasi pemutar IPTV anda;
2. Ubah pengaturan EPG (di beberapa aplikasi, mungkin harus mengubah playlist terlebih dahulu);
3. Masukkan link https://raw.githubusercontent.com/kemalsyabaniadama/test-epg/main/guide.xml .
4. Bisa juga dengan membuka file m3u yang dijadikan playlist IPTV menggunakan Notepad, masukkan kode berikut di line paling atas, simpan dengan tetap mempertahankan format file sebagai m3u
```
#EXTM3U  x-tvg-url=https://raw.githubusercontent.com/kemalsyabaniadama/test-epg/main/guide.xml refresh="1440" max-conn="1" refresh="24"
```
## iptv.m3u8
test-epg/iptv.m3u8 adalah file IPTV berbasis jaringan lokal berdasarkan alamat IP set top box DVB2IP. Anda dapat menggunakannya sebagai template, dengan daftar dan link saluran versi sendiri.

### Kelebihan
- Nikmati siaran TV digital di titik manapun selama terhubung ke jaringan lokal
- Pengalaman menonton selayaknya TV pada umumnya, tanpa keluar masuk menu
- Kustomisasi pengaturan secara lebih luas, seperti EPG online, DVR, dan antarmuka yang menyatu dengan sistem

### Cara Menggunakan
1. Gunakan STB yang mendukung DVB2IP (Matrix Apple Merah/DVB2IP, Tanaka T2 New/Jurrasic, dan semacamnya)
2. STB terhubung ke router (WiFi atau LAN) dengan fitur DVB2IP menyala
3. Konfigurasi DHCP Binding di pengaturan LAN router, untuk alamat MAC STB. Tetapkan alamat IP
4. Buka VLC Media Player > Playlist > Universal Plug'n'Play > (STB DVB2IP) > TV
5. Klik kanan pada saluran, lalu pilih Information. Salin link saluran
6. Buka file iptv.m3u8 yang sudah diunduh dari repositori ini
7. Pada saluran yang sesuai, pilih link dan tempel
```
#EXTINF:-0 tvg-logo="png" tvg-id="GTV.id@SD" group-title="192.168.1.2", GTV
http://192.168.1.2:8999/stream=14.ts // Tempel di sini
```
8. Lakukan yang sama untuk saluran lain. Anda bisa salin tempel format yang sudah ada, lalu ganti `tvg-logo`, `tvg-id`, `group-title`, dan nama saluran untuk menyesuaikan dengan saluran yang ada
9. Simpan file m3u8
10. Pasang playlist di pemutar IPTV Anda. Gunakan kodek perangkat keras jika video tidak muncul saat memilih saluran

<br>Anda juga dapat menggunakan Raspberry PI yang terpasang TV Hat, atau perangkat apapun yang terpasang TV Tuner, dan sudah dikonfigurasi menggunakan sistem TVHeandEnd. Salin link saluran dilakukan di antarmuka pengaturan TVHeadEnd

### Catatan
- File iptv.m3u8 di repositori ini adalah untuk penggunaan pribadi dan bukan untuk umum. Jangan disalahgunakan untuk mendistribusikan konten siaran secara ilegal
- Tidak dapat langsung digunakan karena menggunakan jaringan lokal
- ISP mungkin membatasi pengaturan router. Sebaiknya gunakan router pribadi agar koneksi optimal, perangkat terdeteksi meski beda SSID atau metode koneksi, dan DHCP Binding dipastikan tersedia
- Dukungan multi perangkat dan pemutaran siaran sangat dipengaruhi oleh STB yang digunakan, isi format siaran, sinyal TV digital setempat, koneksi ke router, hingga media/perangkat pemutar
