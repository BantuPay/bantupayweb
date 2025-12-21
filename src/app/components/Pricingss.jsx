import { FaCheckCircle, FaTimesCircle, FaStar } from "react-icons/fa";
import { Crown, Gem, Globe, Medal, Rocket, Smartphone, Zap, DollarSign } from "lucide-react";
import { useTranslations } from "next-intl";

const plans = [
  { name: "GOLD", price: "3.00 USD", features: [true, true, true, true, true, true, true, true, true], popular: true, icon: <Crown className="w-6 h-6" />, gradient: "from-yellow-400 to-yellow-600" },
  { name: "PREMIUM", price: "2.00 USD", features: [true, true, false, true, true, true, true, false, false], popular: false, icon: <Gem className="w-6 h-6" />, gradient: "from-purple-400 to-purple-600" },
  { name: "DIASPORA", price: "0.00 USD", features: [true, true, false, true, true, false, true, true, false], popular: false, icon: <Globe className="w-6 h-6" />, gradient: "from-blue-400 to-blue-600" },
  { name: "SILVER", price: "1.00 USD", features: [true, true, false, true, false, true, true, false, false], popular: false, icon: <Medal className="w-6 h-6" />, gradient: "from-gray-400 to-gray-600" },
  { name: "DIASPORA+", price: "3.00 USD", features: [true, true, false, true, true, true, true, true, true], popular: false, icon: <Rocket className="w-6 h-6" />, gradient: "from-green-400 to-green-600" },
  { name: "BASIC", price: "0.00 USD", features: [true, true, false, true, false, true, true, false, false], popular: false, icon: <Smartphone className="w-6 h-6" />, gradient: "from-orange-400 to-orange-600" },
];

export default function Pricing() {
  const t = useTranslations("PricingPage");
  const featuresList = t.raw("features");

  return (
    <section className="relative min-h-screen py-0 md:py-25 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 z-[1]">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#FFF5EB_0%,#F7F0E7_25%,#EADBC8_50%,#DDB892_75%,#CC9966_100%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(86,35,21,0.05)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(139,61,39,0.08)_0%,transparent_50%)]"></div>
        <div className="absolute w-full h-full overflow-hidden">
          <div className="absolute rounded-full bg-gradient-to-br from-[rgba(86,35,21,0.06)] to-[rgba(139,61,39,0.04)] w-[250px] h-[250px] top-[5%] left-[-3%]"></div>
          <div className="absolute rounded-full bg-gradient-to-br from-[rgba(86,35,21,0.06)] to-[rgba(139,61,39,0.04)] w-[180px] h-[180px] top-[60%] right-[-2%]"></div>
          <div className="absolute rounded-full bg-gradient-to-br from-[rgba(86,35,21,0.06)] to-[rgba(139,61,39,0.04)] w-[120px] h-[120px] bottom-[15%] left-[25%]"></div>
          <div className="absolute rounded-full bg-gradient-to-br from-[rgba(86,35,21,0.06)] to-[rgba(139,61,39,0.04)] w-[200px] h-[200px] top-[30%] right-[20%]"></div>
        </div>
      </div>

      <div className="relative z-[2] max-w-[1600px] mx-auto px-5">
        <div
          className="text-center mb-20 max-w-[800px] mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-[rgba(86,35,21,0.08)] border-2 border-[rgba(86,35,21,0.15)] rounded-[30px] mb-6">
            <span className="w-2 h-2 bg-[#562315] rounded-full"></span>
            <span className="text-sm font-semibold text-[#562315] uppercase tracking-wider">{t("header_badge")}</span>
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight mb-6 text-[#562315]" style={{ fontFamily: "'Conneqt Black', sans-serif" }}>{t("title")}</h2>
          <p className="text-[clamp(1.1rem,2vw,1.3rem)] leading-relaxed text-[#6B5B4F] max-w-[600px] mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="relative overflow-x-auto ">
          <div className="flex gap-6 min-w-[1000px] mx-auto justify-center">
            <div
              className="relative flex flex-col bg-[rgba(255,255,255,0.95)] backdrop-blur-[20px] border border-[rgba(86,35,21,0.1)] rounded-3xl overflow-hidden min-w-[160px] max-w-[160px]"
            >
              <div className="flex flex-col items-center justify-center gap-3 py-6 px-4 bg-gradient-to-br from-[#562315] to-[#8B3D27] text-white relative">
                <div className="flex items-center justify-center w-12 h-12 bg-[rgba(255,255,255,0.15)] rounded-xl backdrop-blur-sm">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-[1rem] font-bold m-0 text-center">{t("features_header")}</h3>
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
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col bg-[rgba(255,255,255,0.95)] backdrop-blur-[20px] border border-[rgba(86,35,21,0.1)] rounded-3xl overflow-hidden min-w-[160px] max-w-[160px] ${plan.popular ? 'border-[rgba(255,215,0,0.3)] shadow-[0_10px_30px_rgba(255,215,0,0.15)]' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute top-[-12px] left-1/2 transform -translate-x-1/2 flex items-center gap-1 px-3 py-1.5 bg-gradient-to-br from-[#FFD700] to-[#FFA500] text-white text-[0.75rem] font-bold rounded-lg shadow-[0_4px_15px_rgba(255,215,0,0.3)] z-10">
                      <FaStar className="text-[0.7rem]" />
                      <span>{t("most_popular")}</span>
                    </div>
                  )}

                  <div className="flex flex-col items-center justify-center gap-3 py-6 px-4 bg-gradient-to-br from-[#562315] to-[#8B3D27] text-white relative">
                    <div className="flex items-center justify-center w-12 h-12 bg-[rgba(255,255,255,0.15)] rounded-xl backdrop-blur-sm">
                      {plan.icon}
                    </div>
                    <h3 className="text-[1rem] font-bold m-0 text-center">{plan.name}</h3>
                  </div>

                  <div className="flex-1 flex flex-col">
                    {plan.features.map((included, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center py-4 px-3 border-b border-[rgba(86,35,21,0.1)] min-h-[60px] last:border-b-0">
                        <div className="flex items-center justify-center">
                          {included ? (
                            <FaCheckCircle className="w-5 h-5 text-[#10B981]" />
                          ) : (
                            <FaTimesCircle className="w-5 h-5 text-[#EF4444]" />
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}