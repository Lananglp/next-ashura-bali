'use client'
import React, { useEffect, useRef, useState } from 'react'
import { FaCheck, FaXmark, FaPen, FaPlus, FaTrash, FaCircleExclamation, FaWhatsapp, FaCircleCheck } from 'react-icons/fa6';
import { IoMdSettings } from "react-icons/io";
import { formatRupiah } from '@/helper/Helper';
import Link from 'next/link';

function PriceList() {

    const [activeIndex, setActiveIndex] = useState(0);

    const toggleContent = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const [checkHosting, setCheckHosting] = useState(true);
    const [checkDomain, setCheckDomain] = useState(true);
    const [checkAdmin, setCheckAdmin] = useState(false);
    const addRef = useRef(null);
    const editRefs = useRef([]);
    const buttonAddRef = useRef(null);
    const [onAdd, setOnAdd] = useState(false);
    const [features, setFeatures] = useState([]);
    const [newFeature, setNewFeature] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);
    const [editingValue, setEditingValue] = useState('');
    // deklarasi harga - harga
    const hargaWebsite = 2000000;
    const hargaAdminDashboard = checkAdmin ? 1200000 : 0;
    const hargaHosting = checkHosting ? 300000 : 0;
    const hargaDomain = checkDomain ? 300000 : 0;
    const hargaFitur = 100000;
    const potonganHargaPerBulan = 0.12; // -88% potongan
    const potonganhargaPerTahun = 0.40; // -60% potongan
    const totalHargaFitur = hargaFitur * parseInt(features.length);
    // rumus fisika dan geografi dan pengendali api dan air
    const hargaTotal = hargaWebsite + hargaAdminDashboard + totalHargaFitur;
    const hargaAwal = hargaWebsite + hargaAdminDashboard + totalHargaFitur + hargaHosting + hargaDomain;
    const hargaPerBulan = (hargaWebsite + hargaAdminDashboard + totalHargaFitur) * potonganHargaPerBulan + hargaHosting;
    const hargaPerTahun = (hargaWebsite + hargaAdminDashboard + totalHargaFitur) * potonganHargaPerBulan + hargaHosting + hargaDomain;
    const hargaTahun = (hargaPerBulan * 12) * potonganhargaPerTahun + hargaDomain; // 0.15
    // const hargaLifetime = (hargaPerBulan * 12);
    const hargaLifetime = (hargaWebsite + hargaAdminDashboard + totalHargaFitur) * potonganHargaPerBulan * 12;
    const akumulasiHemat = (hargaPerBulan * 12) + hargaDomain;
    const selisihHargaPerTahun = akumulasiHemat - hargaTahun;
    // const selisihHargaPerTahun = 0;

    const textDecode = `
Nama lengkap/Perusahaan: *PT.Ashura Bali*
Jenis website: *Website Marketing*

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
(Sudah termasuk biaya hosting dan domain.)

*${formatRupiah(hargaLifetime)} /lifetime*
(Belum termasuk biaya hosting dan domain.)
    `;

    const textForWhatsapp = encodeURIComponent(textDecode.trim());

    const toggleCheck = (type) => {
        if (type === "hosting") {
            setCheckHosting(!checkHosting);
        }
        if (type === "domain") {
            setCheckDomain(!checkDomain);
        }
        if (type === "admin") {
            setCheckAdmin(!checkAdmin);
        }
    }

    const handleOpenFitur = () => {
        setOnAdd(true);
    }

    useEffect(() => {
        if (addRef.current) {
            addRef.current.focus();
        }
    }, [onAdd]);

    useEffect(() => {
        const closeWhenClickOutside = (e) => {
            if (!addRef.current?.contains(e.target) && !buttonAddRef.current?.contains(e.target)) {
                setOnAdd(false);
            }
        }

        document.addEventListener("mousedown", closeWhenClickOutside);

        return () => {
            document.addEventListener("mousedown", closeWhenClickOutside)
        }
    }, []);

    useEffect(() => {
        if (editingIndex !== null) {
          editRefs.current[editingIndex]?.focus();
        }
    }, [editingIndex]);

    const handleAddFeature = () => {
        if (newFeature.trim()) {
            setFeatures([...features, { name: newFeature }]);
            setNewFeature('');
            setOnAdd(false);
        }
    };

    const handleChange = (e) => {
        setNewFeature(e.target.value);
    };

    const handleEditFeature = (index) => {
        setEditingIndex(index);
        setEditingValue(features[index].name);
    };

    const handleSaveEdit = (index) => {
        const updatedFeatures = [...features];
        updatedFeatures[index].name = editingValue;
        setFeatures(updatedFeatures);
        setEditingIndex(null);
        setEditingValue('');
    };

    const handleDeleteFeature = (index) => {
        const updatedFeatures = features.filter((_, i) => i !== index);
        setFeatures(updatedFeatures);
    };

    const items = [
        {
            label: 'Lading Page', content: (
                <div></div>
            )
        },
        {
            label: 'Company Profile', content: (
                <div></div>
            )
        },
        {
            label: 'E-commerce', content: (
                <div className='flex place-content-center'>
                    <div className='max-w-5xl flex flex-row border border-pink-500 bg-gradient-to-b from-zinc-200 dark:from-zinc-900 to-pink-200 dark:to-pink-950 from-[60%] to-[100%] rounded-lg shadow-xl shadow-zinc-950/10 dark:shadow-zinc-950/50'>
                        <div className='basis-2/3 p-6'>
                            <div className='border-b border-zinc-700 pb-4'>
                                <h6 className='mb-2 text-xl font-medium text-white'>Akumulasi harga Website Marketing</h6>
                                <p className='text-sm'>Silahkan checklist fitur-fitur dibawah ini yang ingin anda gunakan, harga website akan menyesuaikan dengan fitur yang anda pilih.</p>
                            </div>
                            <ul className='space-y-1 mt-4'>
                                <li>
                                    <div className="flex items-center space-x-3">
                                        <FaCheck className='inline text-green-400 mx-1.5'/>
                                        <span className='text-sm'>Desain simple, elegan & modern</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center space-x-3">
                                        <FaCheck className='inline text-green-400 mx-1.5'/>
                                        <span className='text-sm'>Responsive & compatibel semua perangkat</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center space-x-3">
                                        <FaCheck className='inline text-green-400 mx-1.5'/>
                                        <span className='text-sm'>Pengoptimalan CEO (search Google)</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center space-x-3">
                                        <FaCheck className='inline text-green-400 mx-1.5'/>
                                        <span className='text-sm'>Teknologi: <span className="font-semibold ms-1">Next Js & Laravel</span></span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center space-x-3">
                                        <FaCheck className='inline text-green-400 mx-1.5'/>
                                        <span className='text-sm'>Gratis maintenance: <span className="font-semibold ms-1">1 tahun</span></span>
                                    </div>
                                </li>
                                <li>
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input onClick={() => toggleCheck("hosting")} type="checkbox" defaultValue className="sr-only peer" defaultChecked/>
                                        <div className="relative w-7 h-3 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Hosting website</span>
                                    </label>
                                </li>
                                <li>
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input onClick={() => toggleCheck("domain")} type="checkbox" defaultValue className="sr-only peer" defaultChecked/>
                                        <div className="relative w-7 h-3 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Domain (.com / .id / lainnya)</span>
                                    </label>
                                </li>
                                <li>
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input onClick={() => toggleCheck("admin")} type="checkbox" defaultValue className="sr-only peer"/>
                                        <div className="relative w-7 h-3 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Admin Panel: <span className="font-semibold ms-1">Untuk memanajemen konten</span></span>
                                    </label>
                                </li>
                                <li>
                                    <div className="flex items-center space-x-3">
                                        {checkAdmin ? <FaCheck className='inline text-green-400 mx-1.5'/> : <FaXmark className='inline text-red-400 mx-1.5'/>}
                                        <span className='text-sm'>Database system security</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center space-x-3">
                                        <IoMdSettings className='inline text-white mx-1.5'/>
                                        <span className='text-sm'>Fitur dalam website (+ {formatRupiah(100000)} /fitur)</span>
                                    </div>
                                    <ul className='list-disc text-sm ps-12 my-2 space-y-1'>
                                        {features.length > 0 &&
                                            features.map((fitur, index) => (
                                                <li key={index} className='border border-zinc-700 rounded'>
                                                    <div className='flex justify-between items-center'>
                                                        {editingIndex === index ? (
                                                            <input
                                                                ref={(el) => (editRefs.current[index] = el)}
                                                                type="text"
                                                                value={editingValue}
                                                                onChange={(e) => setEditingValue(e.target.value)}
                                                                className='w-full rounded outline-none ring-1 ring-blue-700 focus:ring-blue-500 bg-transparent px-3 py-2'
                                                                onBlur={() => handleSaveEdit(index)}
                                                                onKeyDown={(e) => {
                                                                    if (e.key === 'Enter') {
                                                                        handleSaveEdit(index);
                                                                    }
                                                                }}
                                                            />
                                                        ) : (
                                                            <input
                                                                type="text"
                                                                name="name"
                                                                id="name"
                                                                value={fitur.name}
                                                                disabled
                                                                className='w-full bg-transparent px-3 py-2'
                                                            />
                                                        )}
                                                        <button
                                                            type="button"
                                                            onClick={() => handleEditFeature(index)}
                                                            className='bg-green-700 hover:bg-green-600 rounded text-zinc-300 hover:text-white mx-1 my-1 p-1'>
                                                            <FaPen className='h-3 w-3'/>
                                                        </button>
                                                        <button
                                                            type="button"
                                                            onClick={() => handleDeleteFeature(index)}
                                                            className='bg-red-700 hover:bg-red-600 rounded text-zinc-300 hover:text-white me-2 my-1 p-1'>
                                                            <FaTrash className='h-3 w-3'/>
                                                        </button>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                        <li>
                                            {onAdd ? (
                                                <>
                                                    <input 
                                                        ref={addRef} 
                                                        type="text" 
                                                        name="name" 
                                                        id="name" 
                                                        className='bg-transparent rounded outline-none focus:ring-1 focus:text-white ring-blue-500 w-full px-3 py-2 border border-dashed border-zinc-700 hover:border-blue-500 text-zinc-400 hover:text-blue-400' 
                                                        placeholder='ketik disini. . .'
                                                        value={newFeature}
                                                        onChange={handleChange}
                                                        onKeyDown={(e) => {
                                                            if (e.key === 'Enter') {
                                                                handleAddFeature();
                                                            }
                                                        }}
                                                    />
                                                    <button ref={buttonAddRef} onClick={() => handleAddFeature()} type="button" disabled={newFeature ? false : true} className={`mt-2 ${newFeature ? 'bg-pink-600 hover:bg-pink-700 text-white' : 'bg-pink-800 text-zinc-300 cursor-not-allowed'} rounded text-xs px-4 py-0.5`}><FaPlus className='inline me-1 mb-0.5'/> Tambahkan</button>
                                                </>
                                                ) : (
                                                <>
                                                    <button onClick={() => handleOpenFitur()} type="button" className='w-full flex items-center px-3 py-2 border border-dashed border-zinc-700 hover:border-blue-500 text-zinc-400 hover:text-blue-400 rounded'>
                                                        <FaPlus className='inline h-3 w-3 mx-1.5'/>
                                                        <span className='text-sm'>Tambahkan fitur</span>
                                                    </button>
                                                </>
                                                )
                                            }
                                            <p className='my-2 text-xs'>Apa yang dimaksud dengan fitur? merupakan fitur yang ada di dalam website tersebut, sesuatu yang berkaitan dengan database bisa dikatakan fitur, sebagai contoh: komentar, dapat mengubah content gambar, menampilkan data pengunjung website.</p>
                                            <p className='mt-2 text-xs'>Belum memahami cara melakukan pemesanan? hubungi kami dengan menekan tombol dibawah ini:</p>
                                            <Link href={`https://api.whatsapp.com/send?phone=6285737578780&text=${textForWhatsapp}`} target='_blank' type="button" className='inline-block mt-2 px-4 py-1 bg-green-700 hover:bg-green-800 text-white rounded'><FaWhatsapp className='inline me-1 mb-0.5'/> Hubungi Kami</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className='basis-1/3 rounded-r-lg border-s border-pink-500 bg-gradient-to-b from-zinc-200 dark:from-zinc-900 to-pink-200 dark:to-pink-950'>
                            <div className='sticky top-24 p-6'>
                                <span className='text-sm'>Harga website:</span>
                                <p className='mb-3 text-xl text-white'>{hargaWebsite ? formatRupiah(hargaTotal) : formatRupiah(0)}</p>
                                <span className='text-sm'>Biaya hosting:</span>
                                <p className='mb-3 text-xl text-white'>{checkHosting ? formatRupiah(hargaHosting) : formatRupiah(0)} /bulan</p>
                                <span className='text-sm'>Biaya domain:</span>
                                <p className='text-xl text-white'>{checkDomain ? formatRupiah(hargaDomain) : formatRupiah(0)} /tahun</p>
                                <div className='my-6 border-b border-zinc-700'/>
                                <p className='mb-2 text-center text-sm'>Total pembayaran pertama:</p>
                                <button className="w-full text-white bg-pink-600 hover:bg-pink-700 focus:ring-1 focus:ring-pink-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">
                                    <span className="mr-2 text-lg font-semibold text-zinc-200 dark:text-white">{hargaWebsite ? formatRupiah(hargaAwal) : formatRupiah(0)}</span>
                                    {/* <span className="text-sm text-gray-500 dark:text-zinc-200">/bulan</span> */}
                                </button>
                                <p className='my-2 text-center text-sm'>Pembayaran akhir bulan:</p>
                                <button className="w-full text-white bg-pink-600 hover:bg-pink-700 focus:ring-1 focus:ring-pink-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">
                                    <span className="mr-2 text-lg font-semibold text-zinc-200 dark:text-white">{hargaWebsite ? formatRupiah(hargaPerBulan) : formatRupiah(0)}</span>
                                    <span className="text-sm text-gray-500 dark:text-zinc-200">/bulan</span>
                                </button>
                                {checkDomain &&
                                    <>
                                        <p className='my-2 text-center text-sm'>Pembayaran akhir tahun:</p>
                                        <button className="mb-3 w-full text-white bg-pink-600 hover:bg-pink-700 focus:ring-1 focus:ring-pink-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">
                                            <span className="mr-2 text-lg font-semibold text-zinc-200 dark:text-white">{hargaWebsite ? formatRupiah(hargaPerTahun) : formatRupiah(0)}</span>
                                            <span className="text-sm text-gray-500 dark:text-zinc-200">/tahun</span>
                                        </button>
                                    </>
                                }
                                <div className='my-6 border-b border-zinc-700'/>
                                <p className='mb-2 text-center text-sm'>Opsi lain pembayaran:</p>
                                <button className="mt-2 w-full relative text-white bg-pink-600 hover:bg-pink-700 focus:ring-1 focus:ring-pink-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">
                                    <span className="mr-2 text-lg font-semibold text-zinc-200 dark:text-white">{formatRupiah(hargaTahun)}</span>
                                    <span className="text-sm text-gray-500 dark:text-zinc-200">/tahun</span>
                                    <div className='absolute -top-2 -end-2 rotate-2 bg-yellow-400 text-black font-semibold rounded text-xs px-4 py-0.5'>
                                        Hemat {formatRupiah(selisihHargaPerTahun)}
                                    </div>
                                </button>
                                <p className='px-4 mt-4 text-center text-xs'><FaCircleCheck className='inline text-green-400 me-1 mb-0.5'/> Sudah termasuk biaya hosting dan domain.</p>
                                <p className='my-2 text-center text-sm'>atau</p>
                                <button className="w-full text-white bg-pink-600 hover:bg-pink-700 focus:ring-1 focus:ring-pink-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">
                                    <span className="mr-2 text-lg font-semibold text-zinc-200 dark:text-white">{formatRupiah(hargaLifetime)}</span>
                                    <span className="text-sm text-gray-500 dark:text-zinc-200">/lifetime</span>
                                </button>
                                <p className='px-4 mt-4 text-center text-xs'><FaCircleExclamation className='inline text-yellow-300 me-1 mb-0.5'/> Belum termasuk biaya hosting dan domain.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            label: 'Undangan Online', content: (
                <div>
                    <p>ini adalah content 4</p>
                </div>
            )
        },
        {
            label: 'Website Custom', content: (
                <div>
                    <p>ini adalah content 5</p>
                </div>
            )
        },
    ];

  return (
      <div>
            <div className='border-b border-zinc-700 flex justify-center items-center mb-8'>
                {items.map((item, index) => (
                    <button key={index} aria-label={`button${index + 1}`} onClick={() => toggleContent(index)} type='button' className={`${activeIndex === index ? 'border-pink-500 text-pink-500' : 'border-transparent text-zinc-300'} hover:bg-zinc-800 font-medium border-b-2 p-4`}>
                        {item.label}
                    </button>
                ))}
            </div>
            {items.map((item, index) => (
                activeIndex === index && (
                    <div key={index} aria-label={`content${index + 1}`} className=''>
                        {item.content}
                    </div>
                )
            ))}
      </div>
  )
}

export default PriceList