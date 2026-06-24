import {
  CheckCircle,
  XCircle,
  Star,
  Crown,
  Gem,
  Globe,
  Medal,
  Rocket,
  Smartphone,
  Zap,
  DollarSign,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import SectionHeader from "./SectionHeader";

const planIcons = {
  GOLD: Crown,
  PREMIUM: Gem,
  DIASPORA: Globe,
  SILVER: Medal,
  "DIASPORA+": Rocket,
  BASIC: Smartphone,
};

const plans = [
  { name: "GOLD", price: "3.00 USD", features: [true, true, true, true, true, true, true, true, true], popular: true },
  { name: "PREMIUM", price: "2.00 USD", features: [true, true, false, true, true, true, true, false, false], popular: false },
  { name: "DIASPORA", price: "0.00 USD", features: [true, true, false, true, true, false, true, true, false], popular: false },
  { name: "SILVER", price: "1.00 USD", features: [true, true, false, true, false, true, true, false, false], popular: false },
  { name: "DIASPORA+", price: "3.00 USD", features: [true, true, false, true, true, true, true, true, true], popular: false },
  { name: "BASIC", price: "0.00 USD", features: [true, true, false, true, false, true, true, false, false], popular: false },
];

export default async function Pricing() {
  const t = await getTranslations("PricingPage");
  const featuresList = t.raw("features");

  return (
    <section className="relative min-h-screen py-0 md:py-25 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 z-[1]">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#FFF5EB_0%,#F7F0E7_25%,#EADBC8_50%,#DDB892_75%,#CC9966_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(86,35,21,0.05)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(139,61,39,0.08)_0%,transparent_50%)]" />
        <div className="absolute w-full h-full overflow-hidden">
          <div className="absolute rounded-full bg-gradient-to-br from-[rgba(86,35,21,0.06)] to-[rgba(139,61,39,0.04)] w-[250px] h-[250px] top-[5%] left-[-3%]" />
          <div className="absolute rounded-full bg-gradient-to-br from-[rgba(86,35,21,0.06)] to-[rgba(139,61,39,0.04)] w-[180px] h-[180px] top-[60%] right-[-2%]" />
          <div className="absolute rounded-full bg-gradient-to-br from-[rgba(86,35,21,0.06)] to-[rgba(139,61,39,0.04)] w-[120px] h-[120px] bottom-[15%] left-[25%]" />
          <div className="absolute rounded-full bg-gradient-to-br from-[rgba(86,35,21,0.06)] to-[rgba(139,61,39,0.04)] w-[200px] h-[200px] top-[30%] right-[20%]" />
        </div>
      </div>

      <div className="relative z-[2] max-w-[1600px] mx-auto px-5">
        <SectionHeader
          badge={t("header_badge")}
          title={t("title")}
          subtitle={t("description")}
          wide
          className="mb-20"
        />

        <div className="relative overflow-x-auto">
          <div className="flex gap-6 min-w-[1000px] mx-auto justify-center">
            <div className="relative flex flex-col bg-[rgba(255,255,255,0.95)] backdrop-blur-[20px] border border-[rgba(86,35,21,0.1)] rounded-3xl overflow-hidden min-w-[160px] max-w-[160px]">
              <div className="flex flex-col items-center justify-center gap-3 py-6 px-4 bg-gradient-to-br from-[#562315] to-[#8B3D27] text-white relative">
                <div className="flex items-center justify-center w-12 h-12 bg-[rgba(255,255,255,0.15)] rounded-xl backdrop-blur-sm">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="section-heading text-[1rem] m-0 text-center text-white">{t("features_header")}</h3>
              </div>

              <div className="flex-1 flex flex-col">
                {featuresList.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center py-4 px-3 border-b border-[rgba(86,35,21,0.1)] min-h-[60px] last:border-b-0"
                  >
                    <span className="text-[0.9rem] font-semibold text-[#562315] text-center leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="py-5 px-4 bg-gradient-to-br from-[#562315] to-[#8B3D27]">
                <div className="flex items-center justify-center py-3 px-3 bg-[rgba(255,255,255,0.15)] rounded-xl backdrop-blur-sm">
                  <DollarSign className="w-4 h-4 text-white" />
                  <span className="text-[1rem] font-bold text-white text-center ml-2">{t("pricing_header")}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-5 flex-nowrap">
              {plans.map((plan) => {
                const Icon = planIcons[plan.name];
                return (
                  <div
                    key={plan.name}
                    className={`relative flex flex-col bg-[rgba(255,255,255,0.95)] backdrop-blur-[20px] border border-[rgba(86,35,21,0.1)] rounded-3xl overflow-hidden min-w-[160px] max-w-[160px] ${plan.popular ? "border-[rgba(255,215,0,0.3)] shadow-[0_10px_30px_rgba(255,215,0,0.15)]" : ""}`}
                  >
                    {plan.popular && (
                      <div className="absolute top-[-12px] left-1/2 transform -translate-x-1/2 flex items-center gap-1 px-3 py-1.5 bg-gradient-to-br from-[#FFD700] to-[#FFA500] text-white text-[0.75rem] font-bold rounded-lg shadow-[0_4px_15px_rgba(255,215,0,0.3)] z-10">
                        <Star className="w-3 h-3 fill-current" />
                        <span>{t("most_popular")}</span>
                      </div>
                    )}

                    <div className="flex flex-col items-center justify-center gap-3 py-6 px-4 bg-gradient-to-br from-[#562315] to-[#8B3D27] text-white relative">
                      <div className="flex items-center justify-center w-12 h-12 bg-[rgba(255,255,255,0.15)] rounded-xl backdrop-blur-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-[1rem] font-bold m-0 text-center">{plan.name}</h3>
                    </div>

                    <div className="flex-1 flex flex-col">
                      {plan.features.map((included, featureIndex) => (
                        <div key={featureIndex} className="flex items-center justify-center py-4 px-3 border-b border-[rgba(86,35,21,0.1)] min-h-[60px] last:border-b-0">
                          <div className="flex items-center justify-center">
                            {included ? (
                              <CheckCircle className="w-5 h-5 text-[#10B981]" />
                            ) : (
                              <XCircle className="w-5 h-5 text-[#EF4444]" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="py-5 px-4 bg-gradient-to-br from-[#562315] to-[#8B3D27]">
                      <div className="flex items-center justify-center py-3 px-3 bg-[rgba(255,255,255,0.15)] rounded-xl backdrop-blur-sm">
                        <span className="text-[1rem] font-bold text-white text-center">{plan.price}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
