export const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
}

export function textForWhatsapp({
    namaLengkap = 'Nama/Perusahaan',
    jenisWebsite = 'Jenis website',
    features = [],
    hargaTotal = 0,
    hargaHosting = 0,
    hargaDomain = 0,
    hargaAwal = 0,
    hargaPerBulan = 0,
    hargaPerTahun = 0,
    hargaTahun = 0,
    checkDomain = false,
    checkHosting = false,
    hargaLifetime = 0
}) {
return `
Nama lengkap/Perusahaan: *${namaLengkap}*
Jenis website: *${jenisWebsite}*

- Desain simple, elegan & modern
- Responsive & compatibel semua perangkat
- Pengoptimalan CEO (search Google)
- Teknologi: Next Js & Laravel
- Gratis maintenance: 1 tahun
- Hosting website
- Domain (.com / .id / lainnya)
- Admin Panel: Untuk memanajemen konten
- Database system security
- Fitur dalam website: ${features.length > 0 ? features.map((fitur, index) => `${index + 1}. ${fitur.name}`).join(', ') : 'Tidak ada fitur'}

Harga website:
*${formatRupiah(hargaTotal)}*

Biaya hosting:
*${formatRupiah(hargaHosting)} /bulan*

Biaya domain:
*${formatRupiah(hargaDomain)} /tahun*

Total pembayaran pertama:
*${formatRupiah(hargaAwal)}*

Pembayaran akhir bulan:
*${formatRupiah(hargaPerBulan)} /bulan*

Pembayaran akhir tahun:
*${formatRupiah(hargaPerTahun)} /tahun*

Opsi lain pembayaran:
*${formatRupiah(hargaTahun)} /tahun*
${checkDomain && checkHosting ? 
`(Sudah termasuk biaya hosting dan domain.)` 
: 
`${!checkDomain && !checkHosting ? 
`(Belum termasuk biaya hosting dan domain.)`
: 
`${checkDomain ? `(Belum termasuk biaya hosting.)` : ``}
${checkHosting ? `(Belum termasuk biaya domain.)` : ``}`}`
}

*${formatRupiah(hargaLifetime)} /lifetime*
(Belum termasuk biaya hosting dan domain.)
`;
}