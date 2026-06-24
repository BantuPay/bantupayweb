"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useTranslations } from "next-intl";
import SectionHeader from "./SectionHeader";
import "swiper/css";
import "swiper/css/pagination";

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
    <section className="py-20 md:py-24 px-4 md:px-10 bg-[#fbf9f4] border-t border-[#d7c2ba]/40">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          subtitle={t("description2")}
        />

        <div className="screenshots-swiper -mx-2 sm:mx-0">
          <Swiper
            modules={[Pagination, Autoplay]}
            onSwiper={(swiper) => swiper.autoplay.start()}
            slidesPerView={1.12}
            centeredSlides
            loop
            loopAdditionalSlides={images.length}
            observer
            observeParents
            spaceBetween={16}
            speed={700}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              waitForTransition: true,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2.15, spaceBetween: 20 },
              1024: { slidesPerView: 3.1, spaceBetween: 28 },
              1280: { slidesPerView: 3.5, spaceBetween: 32 },
            }}
            className="!pb-14"
          >
            {images.map((src, index) => (
              <SwiperSlide key={src}>
                <figure className="rounded-xl overflow-hidden border border-[#d7c2ba] bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
                  <Image
                    src={src}
                    alt={`${t("title")} ${index + 1}`}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover aspect-[4/3]"
                    sizes="(max-width: 640px) 88vw, (max-width: 1024px) 45vw, 30vw"
                    quality={80}
                    loading="lazy"
                  />
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
