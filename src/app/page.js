import Container from '@/components/Container'
import Link from 'next/link'
import React from 'react'
import { GoTag } from "react-icons/go";
import { FaPhone, FaStar, FaCircleXmark, FaCircleCheck } from "react-icons/fa6";
import { FcApproval, FcFaq, FcMoneyTransfer, FcMultipleDevices, FcSmartphoneTablet } from "react-icons/fc";
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import PriceList from '@/components/PriceList';

const Product = ({ title, description, example, contactURL }) => {
  return (
    <div className='basis-full sm:basis-6/12 md:basis-5/12 xl:basis-3/12 overflow-hidden group/pelayanan relative grid grid-cols-1 content-between border border-pink-400 dark:border-pink-900 bg-gradient-to-b from-zinc-200 dark:from-zinc-900 to-pink-200 dark:to-pink-950 from-[60%] to-[100%] rounded-lg shadow-xl shadow-zinc-950/10 dark:shadow-zinc-950/50 p-6'>
      <div>
        <h6 className='mb-2 text-pink-500 font-semibold'>{title}</h6>
        <p className='mb-2 text-sm'>{description}</p>
      </div>
      <div>
        <span className='text-pink-500 text-sm font-medium'>Contoh :</span>
        <p className='text-sm'>{example}</p>
      </div>
      <Link href={`https://api.whatsapp.com/send?phone=6285737578780&text=${contactURL}`} target='_blank' className='block group-hover/pelayanan:-bottom-0 absolute -bottom-8 start-1/2 -translate-x-1/2 bg-gradient-to-b from-green-600 dark:from-green-900 to-green-500 dark:to-green-700 text-white text-nowrap rounded-t border-t-4 border-pink-500 shadow-xl shadow-black px-6 py-1 transition-all duration-500'>
        <p className='text-center'><FaPhone className='inline me-1 mb-0.5' /> Hubungi Sekarang</p>
      </Link>
      <FaStar className='animate-custom-3 absolute end-8 top-2 w-4 h-4 text-pink-500' />
      <FaStar className='animate-custom-4 absolute end-4 top-7 w-3 h-3 text-pink-500' />
      <FaStar className='animate-custom-5 absolute end-2 top-12 w-2 h-2 text-pink-500' />
    </div>
  )
}

function page() {

  // useEffect(() => {
  //   document.documentElement.classList.add("scroll-smooth");
  // }, []);

  const landingPageTextForWhatsapp = "Halo%20Ashura%20Bali%2C%20saya%20tertarik%20untuk%20membuat%20website%20*Landing%20Page*.%20Bisakah%20Anda%20membantu%20saya%3F";
  const companyProfileTextForWhatsapp = "Halo%20Ashura%20Bali%2C%20saya%20tertarik%20untuk%20membuat%20website%20*Company%20Profile*.%20Bisakah%20Anda%20membantu%20saya%3F";
  const eCommerceTextForWhatsapp = "Halo%20Ashura%20Bali%2C%20saya%20tertarik%20untuk%20membuat%20website%20*E-commerce*.%20Bisakah%20Anda%20membantu%20saya%3F";
  const undanganTextForWhatsapp = "Halo%20Ashura%20Bali%2C%20saya%20tertarik%20untuk%20membuat%20website%20*Undangan%20Online*.%20Bisakah%20Anda%20membantu%20saya%3F";
  const CustomWebTextForWhatsapp = "Halo%20Ashura%20Bali%2C%20saya%20tertarik%20untuk%20membuat%20*Website%20Custom*.%20Bisakah%20Anda%20membantu%20saya%3F";

  return (
    <>
      <Navbar/>

      <Container overflow="hidden">
        <section className="relative lg:bg-[url(/image/border-t-l-r.svg)] bg-cover mt-12">
          <div className='bg-gradient-radial from-pink-300/30 dark:from-pink-900/25 from-[0%] to-transparent to-[70%] absolute start-32 top-64 w-96 h-96' />
          <div className='bg-gradient-radial from-pink-300/30 dark:from-pink-900/25 from-[0%] to-transparent to-[70%] absolute end-48 top-0 w-96 h-96' />
          <div className="flex flex-col justify-center items-center text-center pt-24">
            <div className='relative max-w-4xl'>
              <FaStar className='animate-custom-3 absolute start-0 top-0 w-4 h-4 text-pink-500' />
              <FaStar className='animate-custom-4 absolute start-6 top-12 w-3 h-3 text-pink-500' />
              <FaStar className='animate-custom-5 absolute start-12 top-4 w-2 h-2 text-pink-500' />
              <FaStar className='animate-custom-3 absolute end-12 -bottom-12 w-4 h-4 text-pink-500' />
              <FaStar className='animate-custom-4 absolute end-0 bottom-20 w-5 h-5 text-pink-500' />
              <FaStar className='animate-custom-5 absolute -end-4 bottom-4 w-2 h-2 text-pink-500' />
              <FaStar className='animate-custom-3 absolute end-1/4 top-0 w-3 h-3 text-pink-500' />
              <h1 className='mb-8 text-lg text-primary font-medium'><GoTag className='inline me-1 mb-0.5' /> Jasa Website di Bali</h1>
              <p className='mb-8 text-zinc-700 dark:text-zinc-200 leading-tight text-4xl font-medium'>Mewujudkan Website Impian Anda dengan Berbagai Fitur dan Desain Menarik</p>
              <p>Kami adalah tim yang berpengalaman dalam pembuatan website dengan berbagai fitur dan desain yang menarik. Kami menawarkan layanan dengan harga terjangkau tanpa mengurangi kualitas.</p>
            </div>
          </div>
        </section>

        <section className='lg:bg-[url(/image/border-t-c.svg)] bg-cover bg-top mt-16'>
          <div className='pt-24'>
            <h2 className='mb-8 text-center text-lg text-primary font-medium'><GoTag className='inline me-1 mb-0.5' /> Pelayanan Kami</h2>
            <div className='flex flex-row flex-wrap justify-center gap-4'>
              <Product
                title="Landing Page"
                description="Buat kesan pertama yang tak terlupakan dengan landing page yang dirancang khusus untuk meningkatkan konversi dan menarik perhatian audiens Anda. Kami fokus pada desain yang bersih, copywriting yang persuasif, dan call-to-action yang kuat."
                example="Landing page CV, portofolio, blog pribadi, promosi produk"
                contactURL={landingPageTextForWhatsapp}
              />
              <Product
                title="Company Profile"
                description="Tampilkan identitas bisnis Anda dengan company profile yang profesional dan menarik. Kami membantu menyusun dan mendesain profil perusahaan yang mencerminkan visi, misi, dan nilai-nilai bisnis Anda secara efektif."
                example="Profil perusahaan, brosur digital perusahaan, presentasi bisnis."
                contactURL={companyProfileTextForWhatsapp}
              />
              <Product
                title="E-commerce"
                description="Kami membangun toko online yang aman dan mudah digunakan, lengkap dengan fitur-fitur canggih yang mendukung penjualan dan manajemen produk Anda secara efektif."
                example="Toko online fashion, toko elektronik, toko perlengkapan rumah tangga."
                contactURL={eCommerceTextForWhatsapp}
              />
              <Product
                title="Undangan Online"
                description="Buat momen istimewa Anda lebih berkesan dengan undangan online yang elegan dan informatif. Kami merancang undangan digital yang menarik dan interaktif untuk berbagai acara, memudahkan Anda dalam berbagi undangan dan mengelola daftar tamu."
                example="Undangan pernikahan, undangan ulang tahun, undangan acara perusahaan, undangan pesta."
                contactURL={undanganTextForWhatsapp}
              />
              <Product
                title="Pembuatan Website Custom"
                description="Dapatkan website yang sepenuhnya disesuaikan dengan kebutuhan dan visi bisnis Anda. Kami merancang dan mengembangkan website yang unik, menampilkan karakter dan nilai bisnis Anda secara menyeluruh."
                example="Website perusahaan, website pribadi, website layanan profesional."
                contactURL={CustomWebTextForWhatsapp}
              />
            </div>
          </div>
        </section>

        <section className="relative flex flex-col justify-center items-center text-center mt-12">
          <Image src="/image/flower.svg" alt="flower.svg" width={192} height={192} className='animate-custom-1 absolute start-0 lg:start-24 top-0 opacity-50 lg:opacity-100' />
          <Image src="/image/flower.svg" alt="flower.svg" width={192} height={192} className='animate-custom-2 absolute end-0 lg:end-24 top-64 lg:top-40 opacity-50 lg:opacity-100' />
          <div className='relative max-w-xl mt-20'>
            <FaStar className='animate-custom-3 absolute -start-6 top-0 w-5 h-5 text-pink-500' />
            <FaStar className='animate-custom-4 absolute start-3 top-12 w-4 h-4 text-pink-500' />
            <FaStar className='animate-custom-5 absolute -start-3 top-20 w-3 h-3 text-pink-500' />
            <FaStar className='animate-custom-3 absolute end-0 bottom-4 w-4 h-4 text-pink-500' />
            <FaStar className='animate-custom-4 absolute -end-12 bottom-20 w-3 h-3 text-pink-500' />
            <FaStar className='animate-custom-5 absolute end-12 bottom-8 w-2 h-2 text-pink-500' />
            <FaStar className='animate-custom-3 absolute end-0 top-16 w-3 h-3 text-pink-500' />
            <h3 className='mb-8 text-zinc-700 dark:text-zinc-200 leading-tight text-4xl font-medium'>Seberapa penting memiliki website di era digital ini?</h3>
            <p className='mb-8 italic'>&quot; Dalam dunia digital, memiliki website itu penting. Website adalah wajah bisnis online Anda yang memberi kemudahan akses dan membangun kepercayaan. Dengan website, bisnis Anda dapat tampil lebih profesional, meningkatkan visibilitas, dan memudahkan pelanggan untuk menemukan Anda. &quot;</p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-24'>
            <div className='relative border border-pink-400 dark:border-pink-900 bg-gradient-to-b from-zinc-200 dark:from-zinc-900 to-pink-200 dark:to-pink-950 from-[60%] to-[100%] rounded-lg shadow-xl shadow-zinc-950/10 dark:shadow-zinc-950/50 p-6'>
              <div>
                <h6 className='mb-4 text-zinc-700 dark:text-white font-semibold'><FaCircleXmark className='inline me-1 mb-0.5 text-red-500' /> Tanpa adanya website</h6>
                <ul className='ps-4 list-disc text-start text-sm'>
                  <li className='mb-2'>
                    <h6 className='mb-1 text-pink-500 font-semibold'>Terbatasnya Jangkauan</h6>
                    <p>Bisnis hanya bisa mencapai pelanggan potensial di lingkup lokal atau melalui saluran offline seperti brosur, iklan cetak, atau rekomendasi langsung.</p>
                  </li>
                  <li className='mb-2'>
                    <h6 className='mb-1 text-pink-500 font-semibold'>Keterbatasan Informasi</h6>
                    <p>Informasi tentang produk atau layanan mungkin terbatas dan tidak mudah diakses oleh calon pelanggan. Informasi ini biasanya hanya tersedia melalui komunikasi langsung atau melalui materi cetak terbatas.</p>
                  </li>
                  <li className='mb-2'>
                    <h6 className='mb-1 text-pink-500 font-semibold'>Kurangnya Keterpercayaan</h6>
                    <p>Tanpa website, bisnis mungkin terlihat kurang profesional atau kurang bereputasi karena kurangnya presensi online yang menjamin keberadaannya.</p>
                  </li>
                  <li className='mb-2'>
                    <h6 className='mb-1 text-pink-500 font-semibold'>Keterbatasan Waktu</h6>
                    <p>Komunikasi dengan pelanggan potensial terbatas pada jam kerja atau waktu ketika bisnis terbuka.</p>
                  </li>
                </ul>
              </div>
              <FaStar className='animate-custom-3 absolute end-8 top-2 w-4 h-4 text-pink-500' />
              <FaStar className='animate-custom-4 absolute end-4 top-7 w-3 h-3 text-pink-500' />
              <FaStar className='animate-custom-5 absolute end-2 top-12 w-2 h-2 text-pink-500' />
            </div>
            <div className='relative border border-pink-400 dark:border-pink-900 bg-gradient-to-b from-zinc-200 dark:from-zinc-900 to-pink-200 dark:to-pink-950 from-[60%] to-[100%] rounded-lg shadow-xl shadow-zinc-950/10 dark:shadow-zinc-950/50 p-6'>
              <div>
                <h6 className='mb-4 text-zinc-700 dark:text-white font-semibold'><FaCircleCheck className='inline me-1 mb-0.5 text-green-500' /> Dengan adanya website</h6>
                <ul className='ps-4 list-disc text-start text-sm'>
                  <li className='mb-2'>
                    <h6 className='mb-1 text-pink-500 font-semibold'>Jangkauan yang Luas</h6>
                    <p>Dengan adanya website, bisnis dapat mencapai pelanggan potensial di seluruh dunia secara online, meningkatkan peluang untuk pertumbuhan dan ekspansi.</p>
                  </li>
                  <li className='mb-2'>
                    <h6 className='mb-1 text-pink-500 font-semibold'>Informasi yang Lengkap dan Mudah Diakses</h6>
                    <p>Website memberikan platform untuk mempresentasikan informasi lengkap tentang produk atau layanan, portofolio, testimoni pelanggan, dan lainnya secara terperinci dan mudah diakses.</p>
                  </li>
                  <li className='mb-2'>
                    <h6 className='mb-1 text-pink-500 font-semibold'>Kepercayaan dan Reputasi yang Ditingkatkan</h6>
                    <p>Prasensi online yang profesional dengan website dapat meningkatkan kepercayaan pelanggan dan menciptakan kesan bahwa bisnis tersebut lebih kredibel dan dapat diandalkan.</p>
                  </li>
                  <li className='mb-2'>
                    <h6 className='mb-1 text-pink-500 font-semibold'>Ketersediaan 24/7</h6>
                    <p>Website memungkinkan pelanggan untuk mengakses informasi dan melakukan interaksi dengan bisnis kapan pun mereka mau, bahkan di luar jam kerja biasa.</p>
                  </li>
                </ul>
              </div>
              <FaStar className='animate-custom-3 absolute end-8 top-2 w-4 h-4 text-pink-500' />
              <FaStar className='animate-custom-4 absolute end-4 top-7 w-3 h-3 text-pink-500' />
              <FaStar className='animate-custom-5 absolute end-2 top-12 w-2 h-2 text-pink-500' />
            </div>
          </div>
        </section>

        <section className='relative xl:bg-[url(/image/dark/dark-border-all-1.svg)] dark:xl:bg-[url(/image/border-all-1.svg)] bg-contain bg-center bg-no-repeat mt-24 py-32'>
          <div className='absolute inset-0 mx-auto -z-10 max-w-3xl'>
            <FaStar className='animate-custom-3 absolute start-0 top-24 w-4 h-4 text-pink-500' />
            <FaStar className='animate-custom-4 absolute start-6 top-32 w-3 h-3 text-pink-500' />
            <FaStar className='animate-custom-5 absolute start-0 top-48 w-2 h-2 text-pink-500' />
            <FaStar className='animate-custom-3 absolute -end-12 top-1/2 w-4 h-4 text-pink-500' />
            <FaStar className='animate-custom-4 absolute -end-16 bottom-48 w-5 h-5 text-pink-500' />
            <FaStar className='animate-custom-5 absolute -end-4 bottom-1/3 w-2 h-2 text-pink-500' />
            <FaStar className='animate-custom-3 absolute end-1/4 top-1/4 w-3 h-3 text-pink-500' />
          </div>
          <h3 className='mb-12 text-center text-zinc-700 dark:text-zinc-200 leading-tight text-4xl font-medium'>Mengapa harus memilih Kami?</h3>
          <div className='flex justify-center items-center'>
            <ul className='grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl md:gap-4'>
              <li className='text-center'>
                <FcApproval className='mb-4 inline-block w-16 h-16' />
                <h6 className='mb-2 text-lg text-zinc-700 dark:text-white font-medium'>Pengalaman yang Terpercaya</h6>
                <p className='text-sm'>Kami telah membantu banyak klien dalam mencapai tujuan online mereka, dengan pengalaman yang terbukti dan hasil yang memuaskan.</p>
              </li>
              <li className='text-center'>
                <FcMultipleDevices className='mb-4 inline-block w-16 h-16' />
                <h6 className='mb-2 text-lg text-zinc-700 dark:text-white font-medium'>Desain Kreatif dan Responsif</h6>
                <p className='text-sm'>Tim desain kami terampil dalam menciptakan website yang menarik dan responsif, memastikan tampilan yang optimal di berbagai perangkat.</p>
              </li>
              <li className='text-center'>
                <FcFaq className='mb-4 inline-block w-16 h-16' />
                <h6 className='mb-2 text-lg text-zinc-700 dark:text-white font-medium'>Dukungan Pelanggan</h6>
                <p className='text-sm'>Kami selalu siap memberikan dukungan pelanggan terbaik. Tim kami siap membantu Anda sepanjang proses, dari konsultasi awal hingga peluncuran website.</p>
              </li>
              <li className='text-center'>
                <FcMoneyTransfer className='mb-4 inline-block w-16 h-16' />
                <h6 className='mb-2 text-lg text-zinc-700 dark:text-white font-medium'>Harga Terjangkau</h6>
                <p className='text-sm'>Kami menawarkan layanan berkualitas dengan harga yang terjangkau, sehingga Anda mendapatkan nilai terbaik untuk investasi Anda.</p>
              </li>
            </ul>
          </div>
        </section>

        <PriceList/>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Container>
    </>
  )
}

export default page