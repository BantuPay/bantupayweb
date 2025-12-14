"use client";

import Head from "next/head";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const images = [
  "/carousel.webp",
  "/carousel2.webp",
  "/carousel3.webp",
  "/carousel9.webp",
  "/carousel5.webp",
  "/carousel6.webp",
  "/carousel7.webp",
  "/carousel 8.webp",
];

export default function FullWidthCarousel() {
  const t = useTranslations("CarouselPages");
  const [effect, setEffect] = useState('coverflow');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setEffect('slide');
      } else {
        setEffect('coverflow');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* SEO Optimization */}
      <Head>
        <title>{`Bantu Pay - ${t("title")}`}</title>
        <meta name="description" content={t("description")} />
        <meta name="keywords" content="Bantu Pay, payments, secure transactions, digital wallet" />
        <meta name="author" content="Bantu Pay Team" />
        <meta property="og:title" content={`Bantu Pay - ${t("title")}`} />
        <meta property="og:description" content={t("description")} />
        <meta property="og:image" content="/carousel.png" />
        <meta property="og:url" content="https://bantupay.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Bantu Pay - ${t("title")}`} />
        <meta name="twitter:description" content={t("description")} />
        <meta name="twitter:image" content="/carousel.png" />
      </Head>

      <div className="w-full bg-gradient-to-br from-[#F7F0E7] via-[#EADBC8] to-[#D4B08A] py-16 relative overflow-hidden border-3xl border-[#8B4513] rounded-3xl">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#562315]/10 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-[#8B3D27]/15 rounded-full blur-2xl animate-pulse delay-1000"></div>

        {/* Header Section */}
        <div className="text-center pb-12 relative z-10">
          <svg className="absolute left-0 top-(-1) sm:top-0 md:top-4 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">

            <path d="M 0,40 Q 50,20 100,40 T 200,40 T 300,40 T 400,40 T 500,40 T 600,40 T 700,40 T 800,40 T 900,40 T 1000,40 T 1100,40 T 1200,40 T 1300,40 T 1400,40" 
                  stroke="#562315" strokeWidth="2" fill="none" strokeLinecap="round"/>
            <path d="M 0,80 Q 50,60 100,80 T 200,80 T 300,80 T 400,80 T 500,80 T 600,80 T 700,80 T 800,80 T 900,80 T 1000,80 T 1100,80 T 1200,80 T 1300,80 T 1400,80" 
                  stroke="#8B3D27" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6"/>
            <circle cx="10%" cy="50%" r="4" fill="#562315" opacity="0.4"/>
            <circle cx="90%" cy="60%" r="5" fill="#8B3D27" opacity="0.3"/>
            <circle cx="15%" cy="70%" r="3" fill="#562315" opacity="0.5"/>
            <circle cx="85%" cy="40%" r="4" fill="#8B3D27" opacity="0.4"/>
            <path d="M 100,120 L 120,100 L 140,120 L 160,100 L 180,120 L 200,100" 
                  stroke="#562315" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.3"/>
            <path d="M 1200,120 L 1220,100 L 1240,120 L 1260,100 L 1280,120 L 1300,100" 
                  stroke="#8B3D27" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.3"/>
          </svg>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#562315] drop-shadow-2xl bg-gradient-to-r from-[#562315] to-[#8B3D27] bg-clip-text text-transparent animate-fade-in relative z-10" style={{ fontFamily: "'Conneqt Black', sans-serif" }}>
            {t("title")}
          </h1>
          <p className="text-lg md:text-xl font-medium text-gray-700 mt-4 max-w-4xl mx-auto drop-shadow-lg relative z-10">
            {t("description")}
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-[#562315] to-[#8B3D27] mx-auto rounded-full"></div>
        </div>

        <Swiper
        modules={[ Pagination, Autoplay, EffectCoverflow]}
        slidesPerView={1}
        centeredSlides
        centeredSlidesBounds
        loop
        watchOverflow
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        spaceBetween={10} // mobile spacing
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
            effect: 'coverflow',
            coverflowEffect: {
              rotate: 40,
              stretch: 0,
              depth: 120,
              modifier: 1,
              slideShadows: true,
            },
          },
        }}
        className="bg-transparent"
      >
        {images.map((src, index) => (
          <SwiperSlide className="flex justify-center w-full bg-transparent">
  <div className="relative transition-all duration-700 ease-out md:transform md:hover:scale-110 md:hover:rotate-2 md:hover:-translate-y-2 md:group">

    <div className="absolute inset-0 bg-gradient-to-r from-[#562315]/20 to-[#8B3D27]/20 rounded-2xl blur-xl opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"></div>

    <Image
      src={src}
      alt={`Slide ${index + 1}`}
      width={800}
      height={600}
      className="w-[85%] mx-auto md:w-[85%] lg:w-full rounded-2xl shadow-2xl border-4 border-white/20 backdrop-blur-sm relative z-10 md:group-hover:shadow-[0_25px_50px_-12px_rgba(86,35,21,0.5)] md:group-hover:ring-4 md:group-hover:ring-[#562315]/30"
      sizes="(max-width: 768px) 85vw, (max-width: 1024px) 85vw, 100vw"
      quality={90}
      priority={index === 0}
    />

    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
  </div>
</SwiperSlide>

        ))}
      </Swiper>

        </div>
    
    </>
  );
}
