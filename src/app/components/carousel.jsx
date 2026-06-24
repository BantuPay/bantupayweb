"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useTranslations } from "next-intl";
import SectionHeader from "./SectionHeader";
import "swiper/css";

const images = [
  "/carousel.webp",
  "/carousel2.webp",
  "/carousel3.webp",
  "/carousel9.webp",
  "/carousel5.webp",
  "/carousel6.webp",
  "/carousel7.webp",
  "/carousel%208.webp",
];

export default function FullWidthCarousel() {
  const t = useTranslations("CarouselPages");
  const [ready, setReady] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    setReady(true);
  }, []);

  const syncActiveIndex = (swiper) => {
    if (!swiper || swiper.destroyed) return;
    setActiveIndex(swiper.realIndex);
  };

  const initCarousel = (swiper) => {
    if (!swiper || swiper.destroyed) return;
    swiperRef.current = swiper;
    swiper.slideToLoop(0, 0);
    swiper.update();
    setActiveIndex(0);
    swiper.autoplay.start();
  };

  const goToSlide = (index) => {
    swiperRef.current?.slideToLoop(index);
  };

  return (
    <section className="py-20 md:py-24 px-4 md:px-10 bg-[#fbf9f4] border-t border-[#d7c2ba]/40 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          subtitle={t("description2")}
        />

        <div className="screenshots-swiper -mx-2 sm:mx-0">
          {ready && (
            <>
              <Swiper
                modules={[Autoplay]}
                slidesPerView="auto"
                centeredSlides
                loop
                loopAddBlankSlides
                loopAdditionalSlides={images.length}
                loopPreventsSliding={false}
                spaceBetween={16}
                speed={700}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                  waitForTransition: true,
                }}
                breakpoints={{
                  640: { spaceBetween: 20 },
                  1024: { spaceBetween: 28 },
                  1280: { spaceBetween: 32 },
                }}
                onSwiper={initCarousel}
                onSlideChange={syncActiveIndex}
                onSlideChangeTransitionEnd={syncActiveIndex}
              >
                {images.map((src, index) => (
                  <SwiperSlide key={`${src}-${index}`}>
                    <figure className="rounded-xl overflow-hidden border border-[#d7c2ba] bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
                      <Image
                        src={src}
                        alt={`${t("title")} ${index + 1}`}
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover aspect-[4/3]"
                        sizes="(max-width: 640px) 88vw, (max-width: 1024px) 42vw, 360px"
                        quality={80}
                        loading="eager"
                        priority={index === 0}
                      />
                    </figure>
                  </SwiperSlide>
                ))}
              </Swiper>

              <nav
                className="screenshots-pagination"
                aria-label={`${t("title")} pagination`}
              >
                {images.map((src, index) => (
                  <button
                    key={src}
                    type="button"
                    className={`screenshots-pagination-dot${
                      index === activeIndex ? " screenshots-pagination-dot-active" : ""
                    }`}
                    aria-label={`${t("title")} ${index + 1}`}
                    aria-current={index === activeIndex ? "true" : undefined}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </nav>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
