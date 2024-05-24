'use client'
import React, { useState } from 'react'
import Container from './Container';
import { FaCheck, FaXmark, FaCalendarCheck, FaCloud } from 'react-icons/fa6';
import CardPriceList, { FeaturePriceList, ItemPriceList } from './CardPriceList';

function PriceList() {

    const [activeIndex, setActiveIndex] = useState(0);

    const toggleContent = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const items = [
        {
            label: 'Lading Page', content: (
                <CardPriceList>
                    <ItemPriceList
                        title="Paket Biasa"
                        description="Cocok untuk pemula &amp; percobaan pertama anda."
                        price="150.000"
                        priceType="Sekali bayar"
                        priceCategori="Biasa"
                        onClick={() => alert("Bayar...")}
                    >
                        <FeaturePriceList type="option">
                            Biaya Hosting: Rp 100.000 <span className='text-zinc-300'>/bulan</span>
                        </FeaturePriceList>
                        <FeaturePriceList type="yes">
                            Desain simple, elegan & modern
                        </FeaturePriceList>
                        <FeaturePriceList type="yes">
                            Responsive & compatibel semua perangkat
                        </FeaturePriceList>
                        <FeaturePriceList type="yes">
                            Pengoptimalan CEO (search Google)
                        </FeaturePriceList>
                        <FeaturePriceList type="yes">
                            Max Halaman: <span className="font-semibold ms-1">2 Halaman</span>
                        </FeaturePriceList>
                        <FeaturePriceList type="no">
                            Domain gratis
                        </FeaturePriceList>
                        <FeaturePriceList type="yes">
                            Gratis maintenance: <span className="font-semibold ms-1">1 bulan</span>
                        </FeaturePriceList>
                        <FeaturePriceList type="no">
                            Dashboard: <span className="font-semibold ms-1">Untuk memanajemen konten</span>
                        </FeaturePriceList>
                        <FeaturePriceList type="no">
                            Fitur: <span className="font-semibold ms-1">Komentar, total pengunjung & blog</span>
                        </FeaturePriceList>
                        <FeaturePriceList type="no">
                            Database system security
                        </FeaturePriceList>
                        <FeaturePriceList type="yes">
                            Estimasi pengerjaan: <span className="font-semibold ms-1">4 hari</span>
                        </FeaturePriceList>
                        <FeaturePriceList type="yes">
                            Teknologi: <span className="font-semibold ms-1">React Js</span>
                        </FeaturePriceList>
                    </ItemPriceList>
                    <ItemPriceList
                        title="Paket Premium"
                        description="Cocok untuk pemula &amp; percobaan pertama anda."
                        price="600.000"
                        priceType="Sekali bayar"
                        priceCategori="Premium"
                        onClick={() => alert("Bayar...")}
                    >
                        <FeaturePriceList type="option">
                            Biaya Hosting: Rp 100.000 <span className='text-zinc-300'>/bulan</span>
                        </FeaturePriceList>
                        <FeaturePriceList type="yes">
                            Desain simple, elegan & modern
                        </FeaturePriceList>
                        <FeaturePriceList type="yes">
                            Responsive & compatibel semua perangkat
                        </FeaturePriceList>
                        <FeaturePriceList type="yes">
                            Pengoptimalan CEO (search Google)
                        </FeaturePriceList>
                        <FeaturePriceList type="yes">
                            Max Halaman: <span className="font-semibold ms-1">15 Halaman</span>
                        </FeaturePriceList>
                        <FeaturePriceList type="yes">
                            Domain gratis
                        </FeaturePriceList>
                        <FeaturePriceList type="yes">
                            Gratis maintenance: <span className="font-semibold ms-1">1 tahun</span>
                        </FeaturePriceList>
                        <FeaturePriceList type="no">
                            Dashboard: <span className="font-semibold ms-1">Untuk memanajemen konten</span>
                        </FeaturePriceList>
                        <FeaturePriceList type="no">
                            Fitur: <span className="font-semibold ms-1">Komentar, total pengunjung & blog</span>
                        </FeaturePriceList>
                        <FeaturePriceList type="no">
                            Database system security
                        </FeaturePriceList>
                        <FeaturePriceList type="yes">
                            Estimasi pengerjaan: <span className="font-semibold ms-1">1 minggu</span>
                        </FeaturePriceList>
                        <FeaturePriceList type="yes">
                            Teknologi: <span className="font-semibold ms-1">React Js</span>
                        </FeaturePriceList>
                    </ItemPriceList>
                    <ItemPriceList
                        title="Paket Master"
                        description="Cocok untuk pemula &amp; percobaan pertama anda."
                        price="1.800.000"
                        priceType="Sekali bayar"
                        priceCategori="Master"
                        onClick={() => alert("Bayar...")}
                    >
                        <FeaturePriceList type="option">
                            Biaya Hosting: Rp 100.000 <span className='text-zinc-300'>/bulan</span>
                        </FeaturePriceList>
                        <FeaturePriceList type="yes">
                            Desain simple, elegan & modern
                        </FeaturePriceList>
                        <FeaturePriceList type="yes">
                            Responsive & compatibel semua perangkat
                        </FeaturePriceList>
                        <FeaturePriceList type="yes">
                            Pengoptimalan CEO (search Google)
                        </FeaturePriceList>
                        <FeaturePriceList type="yes">
                            Max Halaman: <span className="font-semibold ms-1">30 Halaman</span>
                        </FeaturePriceList>
                        <FeaturePriceList type="yes">
                            Domain gratis (.com & .id)
                        </FeaturePriceList>
                        <FeaturePriceList type="yes">
                            Gratis maintenance: <span className="font-semibold ms-1">1 tahun</span>
                        </FeaturePriceList>
                        <FeaturePriceList type="yes">
                            Dashboard: <span className="font-semibold ms-1">Untuk memanajemen konten</span>
                        </FeaturePriceList>
                        <FeaturePriceList type="yes">
                            Fitur: <span className="font-semibold ms-1">Komentar, total pengunjung & blog</span>
                        </FeaturePriceList>
                        <FeaturePriceList type="yes">
                            Database system security
                        </FeaturePriceList>
                        <FeaturePriceList type="yes">
                            Estimasi pengerjaan: <span className="font-semibold ms-1">2 minggu</span>
                        </FeaturePriceList>
                        <FeaturePriceList type="yes">
                            Teknologi: <span className="font-semibold ms-1">React Js & Laravel</span>
                        </FeaturePriceList>
                    </ItemPriceList>
                </CardPriceList>
            )
        },
        {
            label: 'Company Profile', content: (
                <div>
                    <p>ini adalah content 2</p>
                </div>
            )
        },
        {
            label: 'E-commerce', content: (
                <div>
                    <p>ini adalah content 3</p>
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
      <section className='mt-24'>
          <Container>
              <div className='border-b border-zinc-700 flex justify-center items-center gap-4 mb-8'>
                  {items.map((item, index) => (
                      <button key={index} aria-label={`button${index + 1}`} onClick={() => toggleContent(index)} type='button' className={`${activeIndex === index ? 'border-pink-500 text-pink-500' : 'border-transparent text-zinc-300'} font-medium border-b-2 p-4`}>
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
          </Container>
      </section>
  )
}

export default PriceList