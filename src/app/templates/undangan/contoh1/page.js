import Image from 'next/image';
import MusicButton from './MusicButton';
import WeddingSection from './WeddingSection';

export const metadata = {
  title: "Wedding - You & Me",
  description: "Mewujudkan Website Impian Anda dengan Berbagai Fitur dan Desain Menarik",
  generator: 'Ashura Bali',
  applicationName: 'Ashura Bali',
  referrer: 'origin-when-cross-origin',
  keywords: ['jasa pembuatan website', 'jasa pembuatan website bali', 'jasa website murah'],
  // authors: [{ name: 'Seb' }, { name: 'Josh', url: 'https://nextjs.org' }],
  // creator: 'Lanang Lanusa',
  // publisher: 'Lanang Lanusa',
  // formatDetection: {
  //   email: false,
  //   address: false,
  //   telephone: false,
  // },
  openGraph: {
    title: 'Ashura Bali',
    description: 'Mewujudkan Website Impian Anda dengan Berbagai Fitur dan Desain Menarik',
    // url: 'https://nextjs.org',
    siteName: 'Ashura Bali',
    // images: [
    //   {
    //     url: 'https://nextjs.org/og.png', // Must be an absolute URL
    //     width: 800,
    //     height: 600,
    //   },
    //   {
    //     url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
    //     width: 1800,
    //     height: 1600,
    //     alt: 'My custom alt',
    //   },
    // ],
    locale: 'id-ID',
    type: 'website',
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/icon.png',
      // shortcut: '/shortcut-icon.png',
      apple: '/apple-icon.png',
      // other: {
      //   rel: 'apple-touch-icon-precomposed',
      //   url: '/apple-touch-icon-precomposed.png',
      // },
    },
    // manifest: 'https://nextjs.org/manifest.json',
  },
};

const images = [
  '/image/undangan/image1.jpg',
  '/image/undangan/image2.jpg',
  '/image/undangan/image3.jpg',
  '/image/undangan/image4.jpg',
];

const Page = () => {
  return (
    <div className='bg-black'>
      <WeddingSection images={images}/>
    </div>
  );
};

export default Page;
