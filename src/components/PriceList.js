import { formatRupiah } from '@/helper/Helper'
import Link from 'next/link'
import React from 'react'
import { FaCheck, FaEye, FaStar, FaWhatsapp } from 'react-icons/fa6'
import { BiSolidLeftArrow } from "react-icons/bi";
import CardPriceList, { FeaturePriceList, ItemPriceList } from './CardPriceList';

function PriceList() {

    const hargaWebMarketing = 1200000;
    const hargaWebDashboard = 4600000;
    const hargaWebPortal = 3000000;
    const hargaWebUndanganA = 150000;
    const hargaWebUndanganB = 200000;
    const hargaWebUndanganC = 300000;

    return (
        <section>
            <h3 className='mt-24 mb-4 text-center text-zinc-700 dark:text-zinc-200 leading-tight text-2xl md:text-3xl lg:text-4xl font-medium'>Daftar Harga Layanan Pembuatan Website kami</h3>
            <p className='mb-12 max-w-4xl mx-auto text-center'>Kami menawarkan harga terbaik melalui situs web kami. Kami sangat memperhatikan kepuasan pelanggan untuk memastikan pengalaman Anda yang baik dan memuaskan.</p>
            <div className='relative mt-24'>
                <div className='bg-gradient-radial from-pink-300/30 dark:from-pink-900/15 from-[0%] to-transparent to-[70%] absolute -z-10 end-0 bottom-0 w-96 h-96' />
                <div className='bg-gradient-radial from-pink-300/30 dark:from-pink-900/15 from-[0%] to-transparent to-[70%] absolute -z-10 start-2/4 -top-24 w-80 h-80' />
                <div className='bg-gradient-radial from-pink-300/30 dark:from-pink-900/15 from-[0%] to-transparent to-[70%] absolute -z-10 start-1/4 bottom-1/4 w-72 h-72 hidden xl:block' />
                <div className="mx-auto max-w-5xl lg:flex place-content-center gap-8">
                    <div className='basis-1/3'>
                        <div className='rounded-lg bg-pink-950/75 border border-pink-900/75 translate-x-2 translate-y-2'>
                            <div className='rounded-lg bg-pink-950/50 border border-pink-900/50 translate-x-2 translate-y-2'>
                                <div className='group/pelayanan relative -translate-x-4 -translate-y-4 grid grid-cols-1 border border-pink-400 dark:border-pink-900 bg-gradient-to-b from-zinc-200 dark:from-zinc-900 to-pink-200 dark:to-pink-950 from-[60%] to-[100%] rounded-lg shadow-xl shadow-zinc-950/10 dark:shadow-zinc-950/50'>
                                    <div className='absolute -start-2 -top-1 -rotate-3 px-4 py-0.5 bg-gradient-to-r from-purple-700 to-pink-700 rounded-lg text-white font-medium text-sm shadow-lg shadow-black/15'>
                                        Landing Page
                                    </div>
                                    <div className='overflow-hidden relative grid grid-cols-1 content-between px-6 pb-6 pt-8'>
                                        <div>
                                            <h6 className='mb-2 text-2xl md:text-xl lg:text-base text-pink-400 font-semibold'>Website Marketing</h6>
                                            <p className='mb-2 text-sm'>Buat kesan pertama yang tak terlupakan dengan landing page yang dirancang khusus untuk meningkatkan konversi dan menarik perhatian audiens Anda. Kami fokus pada desain yang bersih, copywriting yang persuasif, dan call-to-action yang kuat.</p>
                                        </div>
                                        <div className='hidden lg:block'>
                                            <span className='text-pink-500 text-sm font-medium'>Contoh :</span>
                                            <p className='text-sm'>Landing page CV, portofolio, blog pribadi, promosi produk, profil perusahaan, brosur digital perusahaan, presentasi bisnis.</p>
                                        </div>
                                        <FaStar className='animate-custom-3 absolute end-8 top-2 w-4 h-4 text-pink-500' />
                                        <FaStar className='animate-custom-4 absolute end-4 top-7 w-3 h-3 text-pink-500' />
                                        <FaStar className='animate-custom-5 absolute end-2 top-12 w-2 h-2 text-pink-500' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='my-8'>
                            <p className='text-sm'>Klik tombol dibawah untuk contoh website:</p>
                            <Link href="/" className='group/item relative mt-4 mb-0 button-gradient-custom'>
                                <FaStar className='group-hover/item:-translate-x-0.5 group-hover/item:-translate-y-0.5 transition duration-200 absolute start-2 -top-2 w-4 h-4 text-pink-500' />
                                <FaStar className='group-hover/item:translate-x-0.5 group-hover/item:translate-y-0.5 transition duration-200 absolute end-4 -bottom-1 w-3 h-3 text-pink-500' />
                                <FaStar className='group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition duration-200 absolute end-2 top-0 w-2 h-2 text-pink-500' />
                                <FaEye className='inline me-1 mb-1' />
                                Klik disini
                            </Link>
                        </div>
                    </div>
                    <div className="basis-2/3 relative">
                        <FaStar className='animate-custom-3 absolute -z-10 end-1/4 top-0 w-4 h-4 text-pink-500' />
                        <FaStar className='animate-custom-4 absolute -z-10 end-32 top-12 w-3 h-3 text-pink-500' />
                        <FaStar className='animate-custom-5 absolute -z-10 end-1/2 top-8 w-2 h-2 text-pink-500' />
                        <FaStar className='animate-custom-3 absolute -z-10 end-1/3 top-1/3 w-4 h-4 text-pink-500' />
                        <FaStar className='animate-custom-4 absolute -z-10 end-0 bottom-48 w-5 h-5 text-pink-500' />
                        <FaStar className='animate-custom-3 absolute -z-10 end-32 bottom-32 w-3 h-3 text-pink-500' />
                        <h2 className="mb-2 text-4xl tracking-tight font-semibold text-gray-900 dark:text-white">{formatRupiah(hargaWebMarketing)}</h2>
                        <div className='relative'>
                            <p className='mb-4'>{formatRupiah(hargaWebMarketing * 0.20)} /tahun <span className='text-xs text-blue-400'>(biaya perpanjangan)</span></p>
                            <div className='bg-yellow-400 rounded text-black font-bold absolute start-6 top-7 text-xs rotate-6 px-2'>
                                <BiSolidLeftArrow className='text-yellow-400 absolute top-1/2 -start-[11px] -translate-y-1/2 h-4 w-4'/>
                                -80%
                            </div>
                        </div>
                        <ul className='space-y-1 mt-8'>
                            <li>
                                <div className="flex items-center space-x-3">
                                    <FaCheck className='inline text-green-400 mx-1.5' />
                                    <span className='text-sm'>Desain elegan, modern & menyesuaikan dengan kebutuhan anda.</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center space-x-3">
                                    <FaCheck className='inline text-green-400 mx-1.5' />
                                    <span className='text-sm'>Responsive & compatibel semua perangkat (HP, Tablet &amp; Laptop)</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center space-x-3">
                                    <FaCheck className='inline text-green-400 mx-1.5' />
                                    <span className='text-sm'>Pengoptimalan CEO (search Google)</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center space-x-3">
                                    <FaCheck className='inline text-green-400 mx-1.5' />
                                    <span className='text-sm'>Teknologi: <span className="font-medium text-white ms-1">Next Js & Laravel</span></span>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center space-x-3">
                                    <FaCheck className='inline text-green-400 mx-1.5' />
                                    <span className='text-sm'>Gratis maintenance: <span className="font-medium text-white ms-1">1 tahun</span></span>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center space-x-3">
                                    <FaCheck className='inline text-green-400 mx-1.5' />
                                    <span className='text-sm'>Gratis Domain 1 tahun pertama</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center space-x-3">
                                    <FaCheck className='inline text-green-400 mx-1.5' />
                                    <span className='text-sm'>Admin dashboard untuk mengelola gambar dan konten</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center space-x-3">
                                    <FaCheck className='inline text-green-400 mx-1.5' />
                                    <span className='text-sm'>Database system security</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center space-x-3">
                                    <FaCheck className='inline text-green-400 mx-1.5' />
                                    <span className='text-sm'>Estimasi pengerjaan: <span className="font-medium text-white ms-1">5 hari</span> <span className='text-xs'>(pengerjaan bisa lebih lama jika adanya penambahan fitur)</span></span>
                                </div>
                            </li>
                        </ul>
                        <Link href="/" type="button" className='group/item relative button-gradient-green w-full md:w-auto'>
                            <FaStar className='group-hover/item:-translate-x-0.5 group-hover/item:-translate-y-0.5 transition duration-200 absolute start-2 -top-2 w-4 h-4 text-green-500' />
                            <FaStar className='group-hover/item:translate-x-0.5 group-hover/item:translate-y-0.5 transition duration-200 absolute end-4 -bottom-1 w-3 h-3 text-green-500' />
                            <FaStar className='group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition duration-200 absolute end-2 top-0 w-2 h-2 text-green-500' />
                            <FaWhatsapp className='inline h-5 w-5 me-1 mb-1' />
                            Konsultasikan Sekarang
                        </Link>
                    </div>
                </div>
            </div>

            <div className='my-6 border-b border-zinc-700' />

            <div className='relative mt-12'>
                <div className='bg-gradient-radial from-pink-300/30 dark:from-pink-900/15 from-[0%] to-transparent to-[70%] absolute -z-10 end-0 bottom-0 w-96 h-96' />
                <div className='bg-gradient-radial from-pink-300/30 dark:from-pink-900/15 from-[0%] to-transparent to-[70%] absolute -z-10 start-2/4 -top-24 w-80 h-80' />
                <div className='bg-gradient-radial from-pink-300/30 dark:from-pink-900/15 from-[0%] to-transparent to-[70%] absolute -z-10 start-1/4 bottom-1/4 w-72 h-72 hidden xl:block' />
                <div className="mx-auto max-w-5xl lg:flex place-content-center gap-8">
                    <div className='basis-1/3'>
                        <div className='rounded-lg bg-pink-950/75 border border-pink-900/75 translate-x-2 translate-y-2'>
                            <div className='rounded-lg bg-pink-950/50 border border-pink-900/50 translate-x-2 translate-y-2'>
                                <div className='group/pelayanan relative -translate-x-4 -translate-y-4 grid grid-cols-1 border border-pink-400 dark:border-pink-900 bg-gradient-to-b from-zinc-200 dark:from-zinc-900 to-pink-200 dark:to-pink-950 from-[60%] to-[100%] rounded-lg shadow-xl shadow-zinc-950/10 dark:shadow-zinc-950/50'>
                                    <div className='absolute -start-2 -top-1 -rotate-3 px-4 py-0.5 bg-gradient-to-r from-purple-700 to-pink-700 rounded-lg text-white font-medium text-sm shadow-lg shadow-black/15'>
                                        Admin dashboard
                                    </div>
                                    <div className='overflow-hidden relative grid grid-cols-1 content-between px-6 pb-6 pt-8'>
                                        <div>
                                            <h6 className='mb-2 text-2xl md:text-xl lg:text-base text-pink-400 font-semibold'>Sistem Informasi Manajemen</h6>
                                            <p className='mb-2 text-sm'>Permudah pengelolaan data dan operasi bisnis Anda dengan admin dashboard yang intuitif dan lengkap. Kami merancang dashboard dengan tampilan yang user-friendly, fitur yang dapat disesuaikan, dan akses mudah ke data penting Anda.</p>
                                        </div>
                                        <div className='hidden lg:block'>
                                            <span className='text-pink-500 text-sm font-medium'>Contoh :</span>
                                            <p className='text-sm'>Dashboard manajemen inventaris, dashboard laporan keuangan, dashboard analitik pengguna, dashboard pemantauan kinerja.</p>
                                        </div>
                                        <FaStar className='animate-custom-3 absolute end-8 top-2 w-4 h-4 text-pink-500' />
                                        <FaStar className='animate-custom-4 absolute end-4 top-7 w-3 h-3 text-pink-500' />
                                        <FaStar className='animate-custom-5 absolute end-2 top-12 w-2 h-2 text-pink-500' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='my-8'>
                            <p className='text-sm'>Klik tombol dibawah untuk contoh website:</p>
                            <Link href="/" className='group/item relative mt-4 mb-0 button-gradient-custom'>
                                <FaStar className='group-hover/item:-translate-x-0.5 group-hover/item:-translate-y-0.5 transition duration-200 absolute start-2 -top-2 w-4 h-4 text-pink-500' />
                                <FaStar className='group-hover/item:translate-x-0.5 group-hover/item:translate-y-0.5 transition duration-200 absolute end-4 -bottom-1 w-3 h-3 text-pink-500' />
                                <FaStar className='group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition duration-200 absolute end-2 top-0 w-2 h-2 text-pink-500' />
                                <FaEye className='inline me-1 mb-1' />
                                Klik disini
                            </Link>
                        </div>
                    </div>
                    <div className="basis-2/3 relative">
                        <FaStar className='animate-custom-3 absolute -z-10 end-1/4 top-0 w-4 h-4 text-pink-500' />
                        <FaStar className='animate-custom-4 absolute -z-10 end-32 top-12 w-3 h-3 text-pink-500' />
                        <FaStar className='animate-custom-5 absolute -z-10 end-1/2 top-8 w-2 h-2 text-pink-500' />
                        <FaStar className='animate-custom-3 absolute -z-10 end-1/3 top-1/3 w-4 h-4 text-pink-500' />
                        <FaStar className='animate-custom-4 absolute -z-10 end-0 bottom-48 w-5 h-5 text-pink-500' />
                        <FaStar className='animate-custom-3 absolute -z-10 end-32 bottom-32 w-3 h-3 text-pink-500' />
                        <h2 className="mb-2 text-4xl tracking-tight font-semibold text-gray-900 dark:text-white">{formatRupiah(hargaWebDashboard)}</h2>
                        <div className='relative'>
                            <p className='mb-4'>{formatRupiah(hargaWebDashboard * 0.20)} /tahun <span className='text-xs text-blue-400'>(biaya perpanjangan)</span></p>
                            <div className='bg-yellow-400 rounded text-black font-bold absolute start-6 top-7 text-xs rotate-6 px-2'>
                                <BiSolidLeftArrow className='text-yellow-400 absolute top-1/2 -start-[11px] -translate-y-1/2 h-4 w-4'/>
                                -80%
                            </div>
                        </div>
                        <ul className='space-y-1 mt-8'>
                            <li>
                                <div className="flex items-center space-x-3">
                                    <FaCheck className='inline text-green-400 mx-1.5' />
                                    <span className='text-sm'>Desain elegan, modern & menyesuaikan dengan kebutuhan anda.</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center space-x-3">
                                    <FaCheck className='inline text-green-400 mx-1.5' />
                                    <span className='text-sm'>Responsive & compatibel semua perangkat (HP, Tablet &amp; Laptop)</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center space-x-3">
                                    <FaCheck className='inline text-green-400 mx-1.5' />
                                    <span className='text-sm'>Pengoptimalan CEO (search Google)</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center space-x-3">
                                    <FaCheck className='inline text-green-400 mx-1.5' />
                                    <span className='text-sm'>Teknologi: <span className="font-medium text-white ms-1">Next Js & Laravel</span></span>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center space-x-3">
                                    <FaCheck className='inline text-green-400 mx-1.5' />
                                    <span className='text-sm'>Gratis maintenance: <span className="font-medium text-white ms-1">1 tahun</span></span>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center space-x-3">
                                    <FaCheck className='inline text-green-400 mx-1.5' />
                                    <span className='text-sm'>Gratis Domain 1 tahun pertama</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center space-x-3">
                                    <FaCheck className='inline text-green-400 mx-1.5' />
                                    <span className='text-sm'>Admin dashboard untuk mengelola gambar dan konten</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center space-x-3">
                                    <FaCheck className='inline text-green-400 mx-1.5' />
                                    <span className='text-sm'>Database system security</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center space-x-3">
                                    <FaCheck className='inline text-green-400 mx-1.5' />
                                    <span className='text-sm'>Estimasi pengerjaan: <span className="font-medium text-white ms-1">5 hari</span> <span className='text-xs'>(pengerjaan bisa lebih lama jika adanya penambahan fitur)</span></span>
                                </div>
                            </li>
                        </ul>
                        <Link href="/" type="button" className='group/item relative button-gradient-green w-full md:w-auto'>
                            <FaStar className='group-hover/item:-translate-x-0.5 group-hover/item:-translate-y-0.5 transition duration-200 absolute start-2 -top-2 w-4 h-4 text-green-500' />
                            <FaStar className='group-hover/item:translate-x-0.5 group-hover/item:translate-y-0.5 transition duration-200 absolute end-4 -bottom-1 w-3 h-3 text-green-500' />
                            <FaStar className='group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition duration-200 absolute end-2 top-0 w-2 h-2 text-green-500' />
                            <FaWhatsapp className='inline h-5 w-5 me-1 mb-1' />
                            Konsultasikan Sekarang
                        </Link>
                    </div>
                </div>
            </div>

            <div className='my-6 border-b border-zinc-700' />

            <div className='relative mt-12'>
                <div className='bg-gradient-radial from-pink-300/30 dark:from-pink-900/15 from-[0%] to-transparent to-[70%] absolute -z-10 end-0 bottom-0 w-96 h-96' />
                <div className='bg-gradient-radial from-pink-300/30 dark:from-pink-900/15 from-[0%] to-transparent to-[70%] absolute -z-10 start-2/4 -top-24 w-80 h-80' />
                <div className='bg-gradient-radial from-pink-300/30 dark:from-pink-900/15 from-[0%] to-transparent to-[70%] absolute -z-10 start-1/4 bottom-1/4 w-72 h-72 hidden xl:block' />
                <div className="mx-auto max-w-5xl lg:flex place-content-center gap-8">
                    <div className='basis-1/3'>
                        <div className='rounded-lg bg-pink-950/75 border border-pink-900/75 translate-x-2 translate-y-2'>
                            <div className='rounded-lg bg-pink-950/50 border border-pink-900/50 translate-x-2 translate-y-2'>
                                <div className='group/pelayanan relative -translate-x-4 -translate-y-4 grid grid-cols-1 border border-pink-400 dark:border-pink-900 bg-gradient-to-b from-zinc-200 dark:from-zinc-900 to-pink-200 dark:to-pink-950 from-[60%] to-[100%] rounded-lg shadow-xl shadow-zinc-950/10 dark:shadow-zinc-950/50'>
                                    <div className='absolute -start-2 -top-1 -rotate-3 px-4 py-0.5 bg-gradient-to-r from-purple-700 to-pink-700 rounded-lg text-white font-medium text-sm shadow-lg shadow-black/15'>
                                        Portal Akademik
                                    </div>
                                    <div className='overflow-hidden relative grid grid-cols-1 content-between px-6 pb-6 pt-8'>
                                        <div>
                                            <h6 className='mb-2 text-2xl md:text-xl lg:text-base text-pink-400 font-semibold'>Sistem Informasi Akademik</h6>
                                            <p className='mb-2 text-sm'>Tingkatkan efisiensi dan kemudahan akses informasi akademik dengan Sistem Informasi Akademik kami. Kami menyediakan solusi terintegrasi untuk pengelolaan jadwal kelas, nilai, dan kegiatan sekolah/kampus, yang memudahkan interaksi antara mahasiswa, dosen, dan staf administrasi.</p>
                                        </div>
                                        <div className='hidden lg:block'>
                                            <span className='text-pink-500 text-sm font-medium'>Contoh :</span>
                                            <p className='text-sm'>Website informasi jadwal kelas, nilai, dan kegiatan sekolah/kampus.</p>
                                        </div>
                                        <FaStar className='animate-custom-3 absolute end-8 top-2 w-4 h-4 text-pink-500' />
                                        <FaStar className='animate-custom-4 absolute end-4 top-7 w-3 h-3 text-pink-500' />
                                        <FaStar className='animate-custom-5 absolute end-2 top-12 w-2 h-2 text-pink-500' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='my-8'>
                            <p className='text-sm'>Klik tombol dibawah untuk contoh website:</p>
                            <Link href="/" className='group/item relative mt-4 mb-0 button-gradient-custom'>
                                <FaStar className='group-hover/item:-translate-x-0.5 group-hover/item:-translate-y-0.5 transition duration-200 absolute start-2 -top-2 w-4 h-4 text-pink-500' />
                                <FaStar className='group-hover/item:translate-x-0.5 group-hover/item:translate-y-0.5 transition duration-200 absolute end-4 -bottom-1 w-3 h-3 text-pink-500' />
                                <FaStar className='group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition duration-200 absolute end-2 top-0 w-2 h-2 text-pink-500' />
                                <FaEye className='inline me-1 mb-1' />
                                Klik disini
                            </Link>
                        </div>
                    </div>
                    <div className="basis-2/3 relative">
                        <FaStar className='animate-custom-3 absolute -z-10 end-1/4 top-0 w-4 h-4 text-pink-500' />
                        <FaStar className='animate-custom-4 absolute -z-10 end-32 top-12 w-3 h-3 text-pink-500' />
                        <FaStar className='animate-custom-5 absolute -z-10 end-1/2 top-8 w-2 h-2 text-pink-500' />
                        <FaStar className='animate-custom-3 absolute -z-10 end-1/3 top-1/3 w-4 h-4 text-pink-500' />
                        <FaStar className='animate-custom-4 absolute -z-10 end-0 bottom-48 w-5 h-5 text-pink-500' />
                        <FaStar className='animate-custom-3 absolute -z-10 end-32 bottom-32 w-3 h-3 text-pink-500' />
                        <h2 className="mb-2 text-4xl tracking-tight font-semibold text-gray-900 dark:text-white">{formatRupiah(hargaWebPortal)}</h2>
                        <div className='relative'>
                            <p className='mb-4'>{formatRupiah(hargaWebPortal * 0.20)} /tahun <span className='text-xs text-blue-400'>(biaya perpanjangan)</span></p>
                            <div className='bg-yellow-400 rounded text-black font-bold absolute start-6 top-7 text-xs rotate-6 px-2'>
                                <BiSolidLeftArrow className='text-yellow-400 absolute top-1/2 -start-[11px] -translate-y-1/2 h-4 w-4'/>
                                -80%
                            </div>
                        </div>
                        <ul className='space-y-1 mt-8'>
                            <li>
                                <div className="flex items-center space-x-3">
                                    <FaCheck className='inline text-green-400 mx-1.5' />
                                    <span className='text-sm'>Desain elegan, modern & menyesuaikan dengan kebutuhan anda.</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center space-x-3">
                                    <FaCheck className='inline text-green-400 mx-1.5' />
                                    <span className='text-sm'>Responsive & compatibel semua perangkat (HP, Tablet &amp; Laptop)</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center space-x-3">
                                    <FaCheck className='inline text-green-400 mx-1.5' />
                                    <span className='text-sm'>Pengoptimalan CEO (search Google)</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center space-x-3">
                                    <FaCheck className='inline text-green-400 mx-1.5' />
                                    <span className='text-sm'>Teknologi: <span className="font-medium text-white ms-1">Next Js & Laravel</span></span>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center space-x-3">
                                    <FaCheck className='inline text-green-400 mx-1.5' />
                                    <span className='text-sm'>Gratis maintenance: <span className="font-medium text-white ms-1">1 tahun</span></span>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center space-x-3">
                                    <FaCheck className='inline text-green-400 mx-1.5' />
                                    <span className='text-sm'>Gratis Domain 1 tahun pertama</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center space-x-3">
                                    <FaCheck className='inline text-green-400 mx-1.5' />
                                    <span className='text-sm'>Admin dashboard untuk mengelola gambar dan konten</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center space-x-3">
                                    <FaCheck className='inline text-green-400 mx-1.5' />
                                    <span className='text-sm'>Database system security</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center space-x-3">
                                    <FaCheck className='inline text-green-400 mx-1.5' />
                                    <span className='text-sm'>Estimasi pengerjaan: <span className="font-medium text-white ms-1">5 hari</span> <span className='text-xs'>(pengerjaan bisa lebih lama jika adanya penambahan fitur)</span></span>
                                </div>
                            </li>
                        </ul>
                        <Link href="/" type="button" className='group/item relative button-gradient-green w-full md:w-auto'>
                            <FaStar className='group-hover/item:-translate-x-0.5 group-hover/item:-translate-y-0.5 transition duration-200 absolute start-2 -top-2 w-4 h-4 text-green-500' />
                            <FaStar className='group-hover/item:translate-x-0.5 group-hover/item:translate-y-0.5 transition duration-200 absolute end-4 -bottom-1 w-3 h-3 text-green-500' />
                            <FaStar className='group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition duration-200 absolute end-2 top-0 w-2 h-2 text-green-500' />
                            <FaWhatsapp className='inline h-5 w-5 me-1 mb-1' />
                            Konsultasikan Sekarang
                        </Link>
                    </div>
                </div>
            </div>

            <div className='my-6 border-b border-zinc-700' />

            <div className='relative mt-12'>
                <h3 className='mt-24 mb-4 text-center text-zinc-700 dark:text-zinc-200 leading-tight text-2xl md:text-3xl lg:text-4xl font-medium'>Harga khusus website undangan</h3>
                <p className='mb-12 max-w-4xl mx-auto text-center'>Kami menawarkan harga terbaik melalui situs web kami. Kami sangat memperhatikan kepuasan pelanggan untuk memastikan pengalaman Anda yang baik dan memuaskan.</p>
                <CardPriceList>
                    <ItemPriceList
                        badge="Website Undangan"
                        title="Biasa"
                        description="Sebuah website undangan dengan desain simple, elegan & klasik"
                        price={150000}
                        priceType=""
                        priceCategori={1}
                    >
                        <FeaturePriceList type="option">Subdomain gratis di ashuraBali.com</FeaturePriceList>
                        <FeaturePriceList type="yes">Undangan khusus maksimal: <span className="font-medium text-white ms-1">5 nama</span></FeaturePriceList>
                        <FeaturePriceList type="yes">custom kata-kata / kalimat</FeaturePriceList>
                        <FeaturePriceList type="yes">Support video</FeaturePriceList>
                        <FeaturePriceList type="yes">Maksimal foto: <span className="font-medium text-white ms-1">30 foto</span></FeaturePriceList>
                        <FeaturePriceList type="yes">Fitur: <span className="font-medium text-white ms-1">Ucapan & lokasi</span></FeaturePriceList>
                        <FeaturePriceList type="yes">Estimasi pengerjaan: <span className="font-medium text-white ms-1">3 hari</span></FeaturePriceList>
                        <FeaturePriceList type="yes">Bebas pilih tema <span className='text-xs'>(klik tombol dibawah untuk melihat contoh)</span></FeaturePriceList>
                    </ItemPriceList>
                    <ItemPriceList
                        badge="Website Undangan"
                        title="Pro"
                        description="Sebuah website undangan dengan desain simple, elegan & klasik"
                        price={200000}
                        priceType=""
                        priceCategori={2}
                    >
                        <FeaturePriceList type="option">Subdomain gratis di ashuraBali.com</FeaturePriceList>
                        <FeaturePriceList type="yes">Undangan khusus maksimal: <span className="font-medium text-white ms-1">20 nama</span></FeaturePriceList>
                        <FeaturePriceList type="yes">custom kata-kata / kalimat</FeaturePriceList>
                        <FeaturePriceList type="yes">Support 1 video</FeaturePriceList>
                        <FeaturePriceList type="yes">Maksimal foto: <span className="font-medium text-white ms-1">30 foto</span></FeaturePriceList>
                        <FeaturePriceList type="yes">Fitur: <span className="font-medium text-white ms-1">Ucapan & lokasi</span></FeaturePriceList>
                        <FeaturePriceList type="yes">Estimasi pengerjaan: <span className="font-medium text-white ms-1">3 hari</span></FeaturePriceList>
                        <FeaturePriceList type="yes">Bebas pilih tema <span className='text-xs'>(klik tombol dibawah untuk melihat contoh)</span></FeaturePriceList>
                    </ItemPriceList>
                    <ItemPriceList
                        badge="Website Undangan"
                        title="Pro plus"
                        description="Sebuah website undangan dengan desain simple, elegan & klasik"
                        price={300000}
                        priceType=""
                        priceCategori={3}
                    >
                        <FeaturePriceList type="option">Subdomain gratis di ashuraBali.com</FeaturePriceList>
                        <FeaturePriceList type="yes">Undangan khusus maksimal: <span className="font-medium text-white ms-1">50 nama</span></FeaturePriceList>
                        <FeaturePriceList type="yes">custom kata-kata / kalimat</FeaturePriceList>
                        <FeaturePriceList type="yes">Support 3 video</FeaturePriceList>
                        <FeaturePriceList type="yes">Maksimal foto: <span className="font-medium text-white ms-1">30 foto</span></FeaturePriceList>
                        <FeaturePriceList type="yes">Fitur: <span className="font-medium text-white ms-1">Ucapan & lokasi</span></FeaturePriceList>
                        <FeaturePriceList type="yes">Estimasi pengerjaan: <span className="font-medium text-white ms-1">3 hari</span></FeaturePriceList>
                        <FeaturePriceList type="yes">Bebas pilih tema <span className='text-xs'>(klik tombol dibawah untuk melihat contoh)</span></FeaturePriceList>
                    </ItemPriceList>
                </CardPriceList>
            </div>
        </section>
    )
}

export default PriceList