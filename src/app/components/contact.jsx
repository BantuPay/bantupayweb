"use client";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function ContactForm() {
  const t = useTranslations("ContactPages");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the mailto link with the form data
    const mailtoLink = `mailto:admin@bantu-pay.com?subject=Contact%20Form%20Message&body=Name:%20${encodeURIComponent(
      name
    )}%0AEmail:%20${encodeURIComponent(email)}%0APhone:%20${encodeURIComponent(
      phone
    )}%0AMessage:%20${encodeURIComponent(message)}`;

    // Open the email client with the pre-filled information
    window.location.href = mailtoLink;

    // Clear the form fields after submission
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden m-2 md:m-8">


      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8B4513] via-[#E6C2A6] to-[#8B4513] rounded-3xl">

        {/* Floating Shapes */}
        <motion.div
          className="absolute top-10 left-10 w-16 h-16 bg-white/10 rounded-full"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-12 h-12 bg-white/5 rounded-full"
          animate={{
            x: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-8 h-8 bg-[#562315]/20 rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Abstract SVG Background */}
        <svg
          className="absolute inset-0 w-full h-full opacity-30"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="flowerCenter" cx="50%" cy="50%" r="50%">
              <stop offset="0%" style={{ stopColor: '#E6C2A6', stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: '#8B4513', stopOpacity: 0.3 }} />
            </radialGradient>
          </defs>
          {/* Central Flower */}
          <circle cx="600" cy="400" r="80" fill="url(#flowerCenter)" />
          {/* Petals */}
          <ellipse cx="600" cy="280" rx="40" ry="80" fill="#F7D9C4" opacity="0.7" transform="rotate(0 600 400)" />
          <ellipse cx="720" cy="400" rx="40" ry="80" fill="#F7D9C4" opacity="0.7" transform="rotate(45 600 400)" />
          <ellipse cx="600" cy="520" rx="40" ry="80" fill="#F7D9C4" opacity="0.7" transform="rotate(90 600 400)" />
          <ellipse cx="480" cy="400" rx="40" ry="80" fill="#F7D9C4" opacity="0.7" transform="rotate(135 600 400)" />
          {/* Leaves extending from edges */}
          <path d="M200 400 Q300 350 400 400 Q300 450 200 400" fill="#8B7355" opacity="0.5" />
          <path d="M1000 400 Q1100 350 1200 400 Q1100 450 1000 400" fill="#8B7355" opacity="0.5" />
          <path d="M600 100 Q650 200 600 300 Q550 200 600 100" fill="#562315" opacity="0.4" />
          <path d="M600 500 Q650 600 600 700 Q550 600 600 500" fill="#562315" opacity="0.4" />
          {/* Smaller accent leaves */}
          <ellipse cx="150" cy="350" rx="30" ry="60" fill="#E6C2A6" opacity="0.6" transform="rotate(-30 150 350)" />
          <ellipse cx="1050" cy="450" rx="30" ry="60" fill="#E6C2A6" opacity="0.6" transform="rotate(30 1050 450)" />
          <ellipse cx="550" cy="150" rx="25" ry="50" fill="#8B4513" opacity="0.5" transform="rotate(60 550 150)" />
          <ellipse cx="650" cy="650" rx="25" ry="50" fill="#8B4513" opacity="0.5" transform="rotate(-60 650 650)" />
        </svg>
      </div>
      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-5xl pt-6 font-extrabold text-[#562315] drop-shadow-md relative z-10 font-['Conneqt_Black']"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t("title")}
      </motion.h1>
      <motion.p
        className="text-md text-sm md:text-lg text-gray-600 mt-2 text-center max-w-2xl relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {t("description")}
      </motion.p>

      /* Form Container with border */
        <motion.div
          className="w-full max-w-lg md:max-w-2xl bg-white/95 backdrop-blur-xl p-8 md:p-10 mt-8 rounded-3xl shadow-2xl relative overflow-hidden z-10 mx-4 md:mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            border: "2px solid transparent",
            background: "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.9)) padding-box, conic-gradient(#8B4513, #562315, #8B7355, #8B4513) border-box"
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
          className="relative content-center justify-center"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5 }}
        >
          <div className=" relative mb-4 justify-center content-center">
          <label className="block text-gray-700 font-medium">{t("name")}</label>

          
          <div className="absolute left-4 top-12 transform -translate-y-1/2 text-[#8B4513] z-10">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <motion.input
            type="text"
            placeholder={t("name")}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full pl-10 pr-3 py-3 border rounded-xl focus:ring-2 focus:ring-[#8B4513] outline-none bg-[#F9F3ED] text-[#562315] shadow-sm transition-all duration-300"
            whileFocus={{
              scale: 1.02,
              boxShadow: "0 0 0 3px rgba(139, 61, 39, 0.1)"
            }}
            transition={{ duration: 0.2 }}
          />
          </div>
        </motion.div>

        {/* Email Input */}
        <motion.div
          className="relative mb-4"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5 }}
        >
          <label className="block text-gray-700 font-medium">{t("email")}</label>
          <div className="absolute left-4 top-12 transform -translate-y-1/2 text-[#8B4513] z-10">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <motion.input
            type="email"
            placeholder={t("email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 pr-3 py-3 border rounded-xl focus:ring-2 focus:ring-[#8B4513] outline-none bg-[#F9F3ED] text-[#562315] shadow-sm transition-all duration-300"
            whileFocus={{
              scale: 1.02,
              boxShadow: "0 0 0 3px rgba(139, 61, 39, 0.1)"
            }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>

        {/* Phone Number Input */}
        <motion.div
          className="relative mb-4 z-20"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5 }}
        >
          <label className="block text-gray-700 font-medium">{t("phone")}</label>
          
          <PhoneInput
            country={"us"}
            value={phone}
            onChange={(value) => setPhone(value)}
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

        {/* Message Input */}
        <motion.div
          className="relative mb-6"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5 }}
        >
          <label className="block text-gray-700 font-medium">{t("message")}</label>
          <div className="absolute left-4 top-10 text-[#8B4513] z-10">
            <svg className="w-5 h-5 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <motion.textarea
            placeholder={t("message")}
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full pl-10 pr-3 py-3 rounded-xl border focus:ring-2 focus:ring-[#8B4513] outline-none bg-[#F9F3ED] text-[#562315] shadow-sm transition-all duration-300"
            whileFocus={{
              scale: 1.02,
              boxShadow: "0 0 0 3px rgba(139, 61, 39, 0.1)"
            }}
            transition={{ duration: 0.2 }}
          ></motion.textarea>
        </motion.div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="w-full text-white py-4 rounded-xl text-lg font-bold transition-all duration-300 shadow-xl relative overflow-hidden group"
          style={{
            background: "linear-gradient(135deg, #8B4513, #562315)"
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 15px 35px rgba(139, 61, 39, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="relative z-10 flex items-center justify-center gap-2"
            initial={{ opacity: 1 }}
            whileHover={{ opacity: 0.9 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            {t("buttonMsg")}
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
      </motion.div>
    </div>
  );
}

