

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  const t = useTranslations("FeaturesPage");

  const features = [
    { img: "/smartphone.png", title: "feature1_title", description: "feature1_description", icon: "📱" },
    { img: "/money-transfer-1.png", title: "feature2_title", description: "feature2_description", icon: "💸" },
    { img: "/customer-service.png", title: "feature3_title", description: "feature3_description", icon: "🎧" },
    { img: "/smartphone-1.png", title: "feature4_title", description: "feature4_description", icon: "🔒" },
    { img: "/store.png", title: "feature5_title", description: "feature5_description", icon: "🏪" },
    { img: "/transaction.png", title: "feature6_title", description: "feature6_description", icon: "📊" },
    { img: "/payment.png", title: "feature7_title", description: "feature7_description", icon: "⚡" },
    { img: "/payment-method.png", title: "feature8_title", description: "feature8_description", icon: "💳" },
  ];

  return (
    <section className="features-section">
      {/* Modern Background */}
      <div className="features-background">
        <div className="features-gradient"></div>
        <div className="features-mesh"></div>
        <div className="features-shapes">
          <div className="feature-shape shape-1"></div>
          <div className="feature-shape shape-2"></div>
          <div className="feature-shape shape-3"></div>
        </div>
      </div>

      <div className="features-container">
        {/* Header Section */}
        <motion.div 
          className="features-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="features-badge">
            <span className="badge-dot"></span>
            <span className="badge-text">Features</span>
          </div>
          <h1 className="features-title">
            <span className="title-main">{t("title")}</span>
          </h1>
          <p className="features-subtitle">{t("subtitle")}</p>
        </motion.div>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="feature-card-glow"></div>
              
              {/* Icon Section */}
              <div className="feature-icon-container">
                <div className="feature-icon-bg">

                </div>
                <div className="feature-image-wrapper">
                  <Image
                    src={feature.img}
                    alt={t(feature.title)}
                    width={50}
                    height={50}
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="feature-image"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="feature-content">
                <h3 className="feature-title">{t(feature.title)}</h3>
                <p className="feature-description">{t(feature.description)}</p>
              </div>

              {/* Hover Effect */}
              <div className="feature-hover-effect"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
