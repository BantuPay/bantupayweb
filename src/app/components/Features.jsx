import { getTranslations } from "next-intl/server";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

const features = [
  { img: "/smartphone.png", title: "feature1_title", description: "feature1_description" },
  { img: "/money-transfer-1.png", title: "feature2_title", description: "feature2_description" },
  { img: "/customer-service.png", title: "feature3_title", description: "feature3_description" },
  { img: "/smartphone-1.png", title: "feature4_title", description: "feature4_description" },
  { img: "/store.png", title: "feature5_title", description: "feature5_description" },
  { img: "/transaction.png", title: "feature6_title", description: "feature6_description" },
  { img: "/payment.png", title: "feature7_title", description: "feature7_description" },
  { img: "/payment-method.png", title: "feature8_title", description: "feature8_description" },
];

export default async function FeaturesSection() {
  const t = await getTranslations("FeaturesPage");

  return (
    <section className="features-section">
      <div className="features-background">
        <div className="features-gradient" />
        <div className="features-mesh" />
        <div className="features-shapes">
          <div className="feature-shape shape-1" />
          <div className="feature-shape shape-2" />
          <div className="feature-shape shape-3" />
        </div>
      </div>

      <div className="features-container">
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          subtitle={t("subtitle")}
          variant="light"
          wide
          className="reveal-up features-header"
        />

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="feature-card reveal-up"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="feature-card-glow" />

              <div className="feature-icon-container">
                <div className="feature-icon-bg" />
                <div className="feature-image-wrapper">
                  <Image
                    src={feature.img}
                    alt={t(feature.title)}
                    width={50}
                    height={50}
                    loading="lazy"
                    className="feature-image"
                  />
                </div>
              </div>

              <div className="feature-content">
                <h3 className="feature-title">{t(feature.title)}</h3>
                <p className="feature-description">{t(feature.description)}</p>
              </div>

              <div className="feature-hover-effect" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
