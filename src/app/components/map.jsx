import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Map() {
  const t = useTranslations("MapPages");
  return (
    <section className="relative min-h-screen py-16 md:py-20 bg-gradient-to-br from-[#FFFAF3] via-white to-[#FFF8F0] overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#562315]/10 via-[#8B3D27]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-[#8B3D27]/8 via-[#562315]/4 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modern Header */}
        <header className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm border border-[#562315] rounded-full mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 bg-[#562315] rounded-full" />
            <span className="text-xs font-extrabold text-[#562315] uppercase ">{t("title")}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-3 text-[#562315]" style={{ fontFamily: 'Conneqt Black, sans-serif' }}>
            {t("title")}
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-[#6B5B4F] max-w-2xl mx-auto leading-relaxed mb-4">
            {t("description")}
          </p>
          <p className="text-sm md:text-base lg:text-lg text-[#6B5B4F] max-w-2xl mx-auto leading-relaxed">
            {t("description2")}
          </p>
        </header>

        {/* Modern Image Container */}
        <div className="relative">
          <div className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-[#562315]">
            <Image
              src="/map.webp"
              alt="Bantu Pay - Where We Operate"
              width={1200}
              height={800}
              priority
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#562315]/20 via-transparent to-transparent rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
