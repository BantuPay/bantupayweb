import { FaCheckCircle, FaTimesCircle, FaStar } from "react-icons/fa";
import { motion, useReducedMotion } from "framer-motion";

const plans = [
  { name: "GOLD", price: "3.00 USD", features: [true, true, true, true, true, true, true, true, true], popular: true, icon: "👑", gradient: "from-yellow-400 to-yellow-600" },
  { name: "PREMIUM", price: "2.00 USD", features: [true, true, false, true, true, true, true, false, false], popular: false, icon: "💎", gradient: "from-purple-400 to-purple-600" },
  { name: "DIASPORA", price: "0.00 USD", features: [true, true, false, true, true, false, true, true, false], popular: false, icon: "🌍", gradient: "from-blue-400 to-blue-600" },
  { name: "SILVER", price: "1.00 USD", features: [true, true, false, true, false, true, true, false, false], popular: false, icon: "🥈", gradient: "from-gray-400 to-gray-600" },
  { name: "DIASPORA+", price: "3.00 USD", features: [true, true, false, true, true, true, true, true, true], popular: false, icon: "🚀", gradient: "from-green-400 to-green-600" },
  { name: "BASIC", price: "0.00 USD", features: [true, true, false, true, false, true, true, false, false], popular: false, icon: "📱", gradient: "from-orange-400 to-orange-600" },
];

const featuresList = [
  "CURRENT ACC",
  "SAVINGS ACC",
  "VIRTUAL VISA",
  "Withdraw from Agent",
  "Top up VISA",
  "Topup Mobile Money",
  "Marketplace",
  "VISA Payouts",
  "2nd Number + OTP",
];

export default function Pricing() {
  const reduce = useReducedMotion();

  const fadeUp = reduce
    ? { initial: false, animate: { opacity: 1 }, transition: { duration: 0 } }
    : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } };

  return (
    <section className="relative min-h-screen py-30 md:py-25 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 z-[1]">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#FFF5EB_0%,#F7F0E7_25%,#EADBC8_50%,#DDB892_75%,#CC9966_100%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(86,35,21,0.05)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(139,61,39,0.08)_0%,transparent_50%)]"></div>
        <div className="absolute w-full h-full overflow-hidden">
          <div className="absolute rounded-full bg-gradient-to-br from-[rgba(86,35,21,0.06)] to-[rgba(139,61,39,0.04)] w-[250px] h-[250px] top-[5%] left-[-3%] animate-[floatPricing_25s_ease-in-out_infinite] animation-delay-0"></div>
          <div className="absolute rounded-full bg-gradient-to-br from-[rgba(86,35,21,0.06)] to-[rgba(139,61,39,0.04)] w-[180px] h-[180px] top-[60%] right-[-2%] animate-[floatPricing_25s_ease-in-out_infinite] animation-delay-[8s]"></div>
          <div className="absolute rounded-full bg-gradient-to-br from-[rgba(86,35,21,0.06)] to-[rgba(139,61,39,0.04)] w-[120px] h-[120px] bottom-[15%] left-[25%] animate-[floatPricing_25s_ease-in-out_infinite] animation-delay-[16s]"></div>
          <div className="absolute rounded-full bg-gradient-to-br from-[rgba(86,35,21,0.06)] to-[rgba(139,61,39,0.04)] w-[200px] h-[200px] top-[30%] right-[20%] animate-[floatPricing_25s_ease-in-out_infinite] animation-delay-[12s]"></div>
        </div>
      </div>

      <div className="relative z-[2] max-w-[1600px] mx-auto px-5">
        <motion.div
          className="text-center mb-20 max-w-[800px] mx-auto"
          {...fadeUp}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-[rgba(86,35,21,0.08)] border-2 border-[rgba(86,35,21,0.15)] rounded-[30px] mb-6 transition-all duration-300 hover:bg-[rgba(86,35,21,0.12)] hover:border-[rgba(86,35,21,0.25)]">
            <span className="w-2 h-2 bg-[#562315] rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-[#562315] uppercase tracking-wider">Pricing Plans</span>
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight mb-6 text-[#562315]" style={{ fontFamily: "'Conneqt Black', sans-serif" }}>Choose Your Plan</h2>
          <p className="text-[clamp(1.1rem,2vw,1.3rem)] leading-relaxed text-[#6B5B4F] max-w-[600px] mx-auto">
            Select the perfect plan that fits your financial needs and goals
          </p>
        </motion.div>

        <div className="relative overflow-x-auto ">
          <div className="flex gap-6 min-w-[1000px] mx-auto justify-center">
            <motion.div
              className="flex flex-col bg-[rgba(255,255,255,0.9)] backdrop-blur-[20px] border border-[rgba(86,35,21,0.1)] rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(86,35,21,0.08)] min-w-[200px] max-w-[200px]"
              {...fadeUp}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="flex items-center justify-center gap-2 py-5 bg-gradient-to-br from-[#562315] to-[#8B3D27] text-white">
                <div className="text-[1.2rem]">⚡</div>
                <h3 className="text-[1.1rem] font-bold m-0">Features</h3>
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

              <div className="flex items-center justify-center gap-2 py-5 bg-gradient-to-br from-[#562315] to-[#8B3D27] text-white">
                <div className="text-[1.2rem]">💰</div>
                <h3 className="text-[1.1rem] font-bold m-0">Pricing</h3>
              </div>
            </motion.div>

            <div className="flex gap-5 flex-nowrap">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col bg-[rgba(255,255,255,0.95)] backdrop-blur-[20px] border border-[rgba(86,35,21,0.1)] rounded-3xl overflow-hidden transition-transform duration-200 will-change-transform min-w-[160px] max-w-[160px] hover:-translate-y-1 hover:scale-[1.01] hover:border-[rgba(86,35,21,0.2)] hover:shadow-[0_10px_30px_rgba(86,35,21,0.12)] ${plan.popular ? 'border-[rgba(255,215,0,0.3)] shadow-[0_10px_30px_rgba(255,215,0,0.15)] hover:border-[rgba(255,215,0,0.5)]' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute top-[-12px] left-1/2 transform -translate-x-1/2 flex items-center gap-1 px-3 py-1.5 bg-gradient-to-br from-[#FFD700] to-[#FFA500] text-white text-[0.75rem] font-bold rounded-lg shadow-[0_4px_15px_rgba(255,215,0,0.3)] z-10">
                      <FaStar className="text-[0.7rem]" />
                      <span>Most Popular</span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-br from-[rgba(86,35,21,0.05)] to-transparent rounded-3xl opacity-0 transition-opacity duration-300 hover:opacity-100"></div>

                  <div className="flex flex-col items-center justify-center gap-3 py-6 px-4 bg-gradient-to-br from-[#562315] to-[#8B3D27] text-white relative">
                    <div className="flex items-center justify-center w-12 h-12 bg-[rgba(255,255,255,0.15)] rounded-xl backdrop-blur-sm">
                      <span className="text-[1.5rem]">{plan.icon}</span>
                    </div>
                    <h3 className="text-[1rem] font-bold m-0 text-center">{plan.name}</h3>
                  </div>

                  <div className="flex-1 flex flex-col">
                    {plan.features.map((included, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center py-4 px-3 border-b border-[rgba(86,35,21,0.1)] min-h-[60px] last:border-b-0">
                        <div className="flex items-center justify-center">
                          {included ? (
                            <FaCheckCircle className="w-5 h-5 text-[#10B981] transition-all duration-300 hover:text-[#059669] hover:scale-110" />
                          ) : (
                            <FaTimesCircle className="w-5 h-5 text-[#EF4444] transition-all duration-300 hover:text-[#DC2626] hover:scale-110" />
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

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(86,35,21,0.03)] to-transparent transition-all duration-600 ease-linear opacity-0 hover:opacity-100 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}