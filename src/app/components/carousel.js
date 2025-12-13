"use client";

import Head from "next/head";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { useTranslations } from "next-intl";
import "swiper/css";
import "swiper/css/navigation";
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

      <div className="w-full bg-gradient-to-b from-[#F7F0E7] to-[#EADBC8] py-10">
        {/* Header Section */}
        <div className="text-center pb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#562315] drop-shadow-md">
            {t("title")}
          </h1>
          <p className="text-md md:text-lg font-medium text-gray-600 mt-2 max-w-3xl mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="bg-transparent"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="flex justify-center bg-transparent">
              <div className="relative transition-all duration-500 ease-in-out transform hover:scale-105 hover:rotate-1">
                <Image
                  src={src}
                  alt={`Slide ${index + 1} - Bantu Pay`}
                  width={800}
                  height={600}
                  className="w-[90%] md:w-[85%] lg:w-[100%] xl:w-[100%] rounded-xl shadow-lg"
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 85vw, 100vw"
                  quality={85}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
