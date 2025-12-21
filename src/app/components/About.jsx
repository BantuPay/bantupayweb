

import Head from "next/head";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Shield, Globe, Zap, Eye, MapPin, Target, BookOpen } from "lucide-react";

export default function About() {
  const t = useTranslations("AboutPage");

  return (
    <>
      <Head>
        <title>Bantu Pay - {t("title")}</title>
        <meta name="description" content={t("description")} />
        <meta property="og:title" content={`Bantu Pay - ${t("title")}`} />
        <meta property="og:description" content={t("description")} />
        <meta property="og:image" content="/About.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <section className="relative min-h-screen py-16 md:py-20 bg-gradient-to-br from-[#FFFAF3] via-white to-[#FFF8F0] overflow-hidden">
        {/* Modern Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#562315]/10 via-[#8B3D27]/5 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-[#8B3D27]/8 via-[#562315]/4 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-[#562315]/3 to-transparent rounded-full blur-2xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Compact Header */}
          <motion.header
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm border border-[#562315] rounded-full mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 bg-[#562315] rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-[#562315] uppercase tracking-wide">{t("title")}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-3 text-[#2D1810]" style={{ fontFamily: 'Conneqt Black, sans-serif' }}>
              <span className="block">{t("empowering_financial")}</span>
              <span className="block bg-gradient-to-r from-[#562315] via-[#8B3D27] to-[#562315] bg-clip-text text-transparent">{t("freedom")}</span>
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-[#6B5B4F] max-w-2xl mx-auto leading-relaxed">{t("description")}</p>
          </motion.header>

          {/* Modern Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
            {/* Our Mission */}
            <motion.article
              className="bg-gradient-to-br from-[#562315]/10 to-[#8B3D27]/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border-2 border-[#562315] hover:shadow-3xl transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#562315] to-[#8B3D27] rounded-xl flex items-center justify-center text-white">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#562315]">{t("mission_title")}</h3>
              </div>
              <p className="text-base text-[#6B5B4F] leading-relaxed">{t("solution")}</p>
            </motion.article>

            {/* Hero Image */}
            <motion.div
              className="relative h-80 md:h-96 lg:h-[400px]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-[#562315]">
                <Image
                  src="/About.png"
                  alt="Bantu Pay - About Us"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#562315]/70 via-transparent to-transparent" />
                
              </div>
            </motion.div>

            {/* Our Story */}
            <motion.article
              className="bg-gradient-to-br from-[#562315]/10 to-[#8B3D27]/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border-2 border-[#562315] hover:shadow-3xl transition-all duration-300"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#562315] to-[#8B3D27] rounded-xl flex items-center justify-center text-white">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#562315]">{t("story_tittle")}</h3>
              </div>
              <div className="space-y-3">
                <p className="text-base text-[#6B5B4F] leading-relaxed">{t("paragraph1")}</p>
                <p className="text-base text-[#6B5B4F] leading-relaxed hidden md:block">{t("paragraph2")}</p>
              </div>
            </motion.article>
          </div>

          {/* Feature Cards Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              { icon: "🔐", title: t("security_title"), content: t("point1"), delay: 0.1 },
              { icon: "🌐", title: t("global_access_title"), content: t("point2"), delay: 0.2 },
              { icon: "⚡", title: t("speed_efficiency_title"), content: t("point3"), delay: 0.3 },
              { icon: "🔮", title: t("vision_title"), content: t("vision_content"), delay: 0.4 },
              { icon: "🌍", title: t("impact_title"), content: t("impact_content"), delay: 0.5 }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="aspect-square bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border-2 border-[#562315] hover:shadow-3xl transition-all duration-300 group flex flex-col justify-center items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: feature.delay }}
                whileHover={{ y: -6, scale: 1.05 }}
              >
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">{feature.icon}</div>
                <h4 className="text-base md:text-lg font-bold text-[#562315] mb-3 leading-tight">{feature.title}</h4>
                <p className="text-sm md:text-base text-[#6B5B4F] leading-relaxed">{feature.content}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Compact Metrics */}
          <motion.div
            className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-[#562315]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
              {[
                { value: "2019", label: "Founded" },
                { value: "150+", label: "Team Members" },
                { value: "$2M+", label: "Transactions" },
                { value: "5★", label: "Rating" }
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  className="group"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl md:text-4xl lg:text-5xl font-black text-[#562315] mb-2 group-hover:text-[#8B3D27] transition-colors duration-300">{metric.value}</div>
                  <div className="text-sm md:text-base text-[#8B7355] font-semibold uppercase tracking-wider">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

