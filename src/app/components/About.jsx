import Image from "next/image";
import { getTranslations } from "next-intl/server";
import SectionHeader from "./SectionHeader";
import {
  BookOpen,
  Crosshair,
  Lock,
  Globe,
  Zap,
  Eye,
  Earth,
} from "lucide-react";

const pillarIconMap = {
  security: Lock,
  global: Globe,
  speed: Zap,
  vision: Eye,
  impact: Earth,
};

export default async function About() {
  const t = await getTranslations("AboutPage");
  const storyBlocks = t.raw("story_blocks");
  const missionBlocks = t.raw("mission_blocks");
  const pillars = t.raw("pillars");
  const missionWords = t("mission_title").split(" ");

  return (
    <div className="about-section bg-[#fbf9f4] text-[#1b1c19] overflow-hidden">
      {/* Hero */}
      <section className="relative py-16 md:py-20 px-4 md:px-10 text-center">
        <div className="absolute inset-0 about-bg-pattern -z-10 pointer-events-none" />
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            badge={t("title")}
            title={`${t("empowering_financial")} ${t("freedom")}`}
            subtitle={t("description")}
            wide
          />
        </div>
      </section>

      {/* Story & Mission */}
      <section className="py-16 md:py-20 px-4 md:px-10 bg-[#f5f3ee]">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Story card */}
            <article className="bg-[#fbf9f4] p-8 md:p-10 rounded-lg border border-[#d7c2ba] shadow-sm h-full order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-8">
                <BookOpen className="w-10 h-10 text-[#421904]" strokeWidth={1.5} />
                <h3 className="section-heading">
                  {t("story_title")}
                </h3>
              </div>
              <div className="space-y-6 section-body">
                {storyBlocks.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </article>

            {/* Heritage visual */}
            <div className="relative flex justify-center items-center w-full min-h-[280px] order-1 lg:order-2">
              <div className="absolute inset-4 border-2 border-[#421904]/10 rounded-full -z-10 animate-pulse pointer-events-none" aria-hidden="true" />
              <div className="relative z-10 w-full max-w-lg aspect-square">
                <Image
                  src="/About.png"
                  alt={t("image_alt")}
                  fill
                  className="rounded-lg object-cover shadow-md hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 512px"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Mission split card */}
          <div className="mt-12 md:mt-16 bg-[#eae8e3] rounded-lg border border-[#d7c2ba] shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative p-10 lg:p-16 bg-[#421904] flex flex-col justify-center overflow-hidden min-h-[240px]">
                <div className="absolute inset-0 about-bg-pattern opacity-10 pointer-events-none" />
                <div className="relative z-10">
                  <Crosshair className="w-14 h-14 md:w-16 md:h-16 text-[#ffb693] mb-6 opacity-50" strokeWidth={1.25} />
                  <h3 className="section-title section-title-accent">
                    {missionWords.map((word, i) => (
                      <span key={i}>
                        {word}
                        {i < missionWords.length - 1 && <br />}
                      </span>
                    ))}
                  </h3>
                </div>
              </div>

              <div className="p-10 lg:p-16 flex flex-col justify-center bg-[#fbf9f4]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 section-body">
                  <div className="space-y-6">
                    <p>{missionBlocks[0]}</p>
                    <p>{missionBlocks[1]}</p>
                  </div>
                  <div className="space-y-6">
                    <p>{missionBlocks[2]}</p>
                    <p>{missionBlocks[3]}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-16 md:py-20 px-4 md:px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="section-title mb-4">
              {t("pillars_section_title")}
            </h3>
            <div className="w-24 h-1 bg-[#904c27] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 items-stretch">
            {pillars.map((pillar) => {
              const Icon = pillarIconMap[pillar.id] ?? Lock;
              return (
                <article
                  key={pillar.id}
                  className="bg-[#fbf9f4] border border-[#d7c2ba] p-8 rounded-lg flex flex-col items-center text-center h-full hover:border-[#904c27] hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-[#ffdbcc] rounded-full flex items-center justify-center mb-6 shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-[#421904]" strokeWidth={2} />
                  </div>
                  <h4 className="section-heading text-xl mb-4 leading-tight shrink-0">
                    {pillar.title}
                  </h4>
                  <p className="section-body text-xs md:text-sm flex-1">
                    {pillar.summary}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cultural divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#904c27] to-transparent opacity-30" />
    </div>
  );
}
