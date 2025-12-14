"use client";

// ============================================================================
// IMPORTS
// ============================================================================
import { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

// ============================================================================
// DYNAMIC IMPORTS
// ============================================================================
const Select = dynamic(() => import("react-select"), { ssr: false });

// ============================================================================
// COMPONENT
// ============================================================================
export default function PreSignUpForm() {
  // ============================================================================
  // HOOKS & STATE
  // ============================================================================
  const t = useTranslations("SignupPages");

  const accountOptions = [
    { value: "diaspora", label: t("account_options.diaspora") },
    { value: "business", label: t("account_options.business") },
    { value: "startup", label: t("account_options.startup") },
    { value: "premium", label: t("account_options.premium") },
    { value: "basic_student", label: t("account_options.basic_student") },
    { value: "agent", label: t("account_options.agent") },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    accountType: null,
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // ============================================================================
  // HANDLERS
  // ============================================================================
  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Construct the mailto link with the form data
    const mailtoLink = `mailto:admin@bantu-pay.com?subject=New SignUp Form&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AAccount Type: ${formData.accountType?.label || 'N/A'}`;

    // Open the email client with the mailto link
    window.location.href = mailtoLink;
  };

  // ============================================================================
  // MAIN RENDER
  // ============================================================================
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center min-h-screen overflow-hidden rounded-3xl">
      
      {/* ===================================================================== */}
      {/* ANIMATED BACKGROUND */}
      {/* ===================================================================== */}
      
      <div className="absolute inset-0 bg-gradient-to-br from-[#F7D9C4] via-[#E6C2A6] to-[#8B4513]">
        
        
       {/* Floating Shapes */}
          

          

        
      </div>

      {/* ===================================================================== */}
      {/* LEFT SIDE - ILLUSTRATION */}
      {/* ===================================================================== */}
      <motion.div
        className="md:w-1/2 flex justify-center relative z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        
        <motion.div
          className="relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative flex justify-center">
  {/* SVG background lines */}
  <svg
    className="absolute inset-0 -z-10 w-full h-full"
    viewBox="0 0 400 400"
    fill="none"
  >
    {/* NEW bigger circle */}
    <circle cx="200" cy="200" r="500" stroke="#8B4513" strokeWidth="1" opacity="50" />
    <circle cx="200" cy="200" r="300" stroke="#8B4513" strokeWidth="1" opacity="0.35" />
    <circle cx="200" cy="200" r="200" stroke="#8B4513" strokeWidth="1" opacity="0.25" />

    <circle cx="200" cy="200" r="160" stroke="#8B4513" strokeWidth="1" opacity="0.15" />
    <circle cx="200" cy="200" r="120" stroke="#8B4513" strokeWidth="1" opacity="0.2" />
    <circle cx="200" cy="200" r="80" stroke="#8B4513" strokeWidth="1" opacity="0.25" />
  </svg>

  {/* Image */}
  <Image
    src="/signup.webp"
    alt="Signup Illustration"
    height={400}
    width={400}
    priority
    className="max-w-xs md:max-w-lg w-full rounded-2xl drop-shadow-2xl"
  />
</div>


          {/* Floating Badge */}
          <motion.div
            className="absolute top-4 left-2 w-12 h-12 sm:top-2 sm:w-20 sm:h-20 opacity-30"


            animate={{
              y: [0, -18, 0],
              scale: [1, 1.12, 1],
              rotate: [0, 6, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#562315]">
              <circle cx="50" cy="50" r="40" fill="currentColor" opacity="0.1"/>
              <path d="M30 40 L50 20 L70 40 L70 70 L30 70 Z" fill="currentColor" opacity="0.2"/>
            </svg>
          </motion.div>

        
        <motion.div
            className="absolute bottom-32 right-16 w-16 h-16 opacity-15"
            animate={{
              y: [0, -14, 0],
              rotate: [0, 8, 0],
              scale: [1, 1.06, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#8B4513]">
              <rect x="20" y="20" width="60" height="60" rx="8" fill="currentColor" opacity="0.1"/>
              <circle cx="35" cy="35" r="8" fill="currentColor" opacity="0.3"/>
              <circle cx="65" cy="35" r="8" fill="currentColor" opacity="0.3"/>
              <circle cx="35" cy="65" r="8" fill="currentColor" opacity="0.3"/>
              <circle cx="65" cy="65" r="8" fill="currentColor" opacity="0.3"/>
            </svg>
          </motion.div>

          <motion.div
            className="absolute top-1/2 left-1/4 w-12 h-12 opacity-25"
            animate={{
              x: [0, 38, 0],
              y: [0, -12, 0],
              rotate: [0, 5, 0],
              scale: [1, 1.08, 1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#562315]">
              <path d="M50 10 L90 90 L10 90 Z" fill="currentColor" opacity="0.15"/>
              <circle cx="50" cy="50" r="15" fill="currentColor" opacity="0.2"/>
            </svg>
          </motion.div>

          {/* Payment Icons */}
        <motion.div
          className="absolute bottom-[-5px] left-1/3 w-6 h-6 sm:w-10 sm:h-10 opacity-40"

          animate={{ rotate: [0, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 24 24" className="w-full h-full text-[#8B4513]">
            <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" fill="currentColor"/>
          </svg>
        </motion.div>

          <motion.div
          className="absolute -top-0 -right-2 mt-6 sm:mt-0 sm:-top-4 sm:-right-30 bg-[#8B4513] text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            ✨ Join Now
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ===================================================================== */}
      {/* RIGHT SIDE - SIGNUP FORM */}
      {/* ===================================================================== */}
      <motion.div
        className="md:w-1/2 bg-white/95 backdrop-blur-xl px-4 py-6 md:p-8 shadow-2xl rounded-3xl max-w-lg relative overflow-hidden mx-2 mb-3 md:mx-0 md:mb-0"

        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          border: "2px solid transparent",
          background: "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.9)) padding-box, conic-gradient(from var(--border-angle), #8B4513, #562315, #8B7355, #8B4513) border-box",
          animation: "border 4s linear infinite",
          "--border-angle": "0deg"
        }}
      >
        {/* Decorative Elements */}
        <motion.div
          className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#8B4513] to-[#562315] rounded-full transform -translate-x-1/2 -translate-y-1/2 opacity-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-br from-[#562315] to-[#8B7355] rounded-full transform translate-x-1/2 translate-y-1/2 opacity-5"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Header */}
        <motion.div
          className="text-center mb-8 relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-[#8B4513]/10 px-4 py-2 rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <svg className="w-5 h-5 text-[#8B4513]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-[#8B4513] font-semibold text-sm">Get Started</span>
          </motion.div>

          <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-[#8B4513] to-[#562315] bg-clip-text text-transparent" style={{ fontFamily: "'Conneqt Black', sans-serif" }}>
            {t("pre_signup_title")}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">{t("pre_signup_description")}</p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
              }
            }
          }}
        >
          {/* Name Input */}
          <motion.div
            className="relative"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8B4513] z-10">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <motion.input
              type="text"
              placeholder={t("name_placeholder")}
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full pl-10 pr-3 py-3 border rounded-xl focus:ring-2 focus:ring-[#8B4513] outline-none bg-[#F9F3ED] text-[#562315] shadow-sm transition-all duration-300"
              required
              whileFocus={{
                scale: 1.02,
                boxShadow: "0 0 0 3px rgba(139, 61, 39, 0.1)"
              }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>

          {/* Email Input */}
          <motion.div
            className="relative"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8B4513] z-10">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <motion.input
              type="email"
              placeholder={t("email_placeholder")}
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full pl-10 pr-3 py-3 border rounded-xl focus:ring-2 focus:ring-[#8B4513] outline-none bg-[#F9F3ED] text-[#562315] shadow-sm transition-all duration-300"
              required
              whileFocus={{
                scale: 1.02,
                boxShadow: "0 0 0 3px rgba(139, 61, 39, 0.1)"
              }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>

          {/* Phone Input */}
          <motion.div
            className="relative z-20"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8B4513] z-10">
              {/* <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg> */}
            </div>
            <PhoneInput
              country={"us"}
              value={formData.phone}
              onChange={(phone) => handleChange("phone", phone)}
              inputProps={{
                required: true,
                className: "w-full pl-10 pr-3 py-3 border rounded-xl focus:ring-2 focus:ring-[#8B4513] outline-none bg-[#F9F3ED] text-[#562315] shadow-sm transition-all duration-300",
              }}
              containerClass="w-full"
              inputClass="w-full !pl-10 !pr-3 !py-3 !border !rounded-xl"
              dropdownStyle={{
                zIndex: 10000
              }}
            />
          </motion.div>

          {/* Select Dropdown (Hydration Issue Fix) */}
          {isMounted && (
            <motion.div
              className="relative z-10"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8B4513] z-10">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <Select
                options={accountOptions}
                placeholder={t("account_placeholder")}
                className="w-full"
                onChange={(selectedOption) =>
                  handleChange("accountType", selectedOption)
                }
                isSearchable={false}
                required
                menuPortalTarget={typeof document !== 'undefined' ? document.body : null}
                styles={{
                  control: (base) => ({
                    ...base,
                    paddingLeft: '2.5rem',
                    borderRadius: '0.75rem',
                    borderColor: '#d1d5db',
                    '&:hover': { borderColor: '#8B4513' },
                    '&:focus-within': {
                      borderColor: '#8B4513',
                      boxShadow: '0 0 0 3px rgba(139, 61, 39, 0.1)'
                    }
                  }),
                  menuPortal: base => ({ ...base, zIndex: 9999 })
                }}
              />
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 35px rgba(139, 61, 39, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="w-full text-white py-4 rounded-xl text-lg font-bold transition-all duration-300 shadow-xl relative overflow-hidden group"
            style={{
              background: "linear-gradient(135deg, #8B4513, #562315)"
            }}
          >
            <motion.span
              className="relative z-10 flex items-center justify-center gap-2"
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0.9 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {t("signup_button")}
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.8 }}
            />
            {/* Animated particles on hover */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: '50%'
                  }}
                  animate={{
                    y: [-10, -30, -10],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.1
                  }}
                />
              ))}
            </motion.div>
          </motion.button>
        </motion.form>

        {/* Trust Indicators & Social Proof */}
        <motion.div
          className="mt-8 pt-6 border-t border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Secure & Encrypted</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Instant Setup</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>Trusted by 50K+</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

// ============================================================================
// COMPONENT END
// ============================================================================
