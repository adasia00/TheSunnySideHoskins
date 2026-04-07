"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Vision() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="travel"
      ref={ref}
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-cream relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-gold opacity-5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-sky-blue opacity-5 blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <motion.div variants={itemVariants}>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
              Introduction
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Get ready for a weekend of fun and a special history trip to Marvell,
              Arkansas. This gathering is designed to bring every branch of the
              family together in one place.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Everyone&apos;s attendance matters as we dive into the legacy Sunny started,
              reconnect across generations, and create fresh memories for the ones who
              follow us.
            </p>
            <div className="mb-6 rounded-xl border border-gold-200 bg-white/80 p-5">
              <h3 className="font-serif text-2xl text-charcoal mb-2">Host Hotel</h3>
              <p className="text-gray-700 mb-3">Hyatt Place Memphis/Germantown</p>
              <a
                href="https://www.hyatt.com/en-US/hotel/tennessee/hyatt-place-memphis-germantown/memzg?corp_id=G-HKSR"
                target="_blank"
                rel="noreferrer"
                className="inline-block mb-4 px-5 py-2 bg-charcoal text-gold-200 rounded-lg border border-gold-300 hover:bg-gold-300 hover:text-charcoal transition-all duration-300"
              >
                Book With Group Code G-HKSR
              </a>

              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li>Online booking: choose dates, click FIND ROOMS or BOOK NOW, then select room type.</li>
                <li>Hotel phone: 901-759-1174, press 0 for Front Desk Host, use code G-HKSR.</li>
                <li>Hyatt Reservations: 1-844-473-8324, use code G-HKSR.</li>
                <li className="font-semibold text-charcoal">Reservation cutoff: Monday, August 17, 2026.</li>
              </ul>

              <div className="pt-3 border-t border-gold-200">
                <p className="text-sm text-gray-700">Standard King with Sofa Sleeper: <span className="font-semibold">$117.00 + 19.75% tax</span></p>
                <p className="text-sm text-gray-700">Standard Double Queen with Sofa Sleeper: <span className="font-semibold">$127.00 + 19.75% tax</span></p>
              </div>
            </div>
            <div className="h-1 w-20 bg-gradient-gold rounded" />
          </motion.div>

          {/* Visual Element */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 lg:h-full min-h-[400px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold-200 to-sky-blue rounded-2xl opacity-20" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-12 border-2 border-gold-300 rounded-xl opacity-30"
            />
            <motion.div
              animate={{ rotate: -180 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-24 border-2 border-sky-blue rounded-full opacity-30"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-center font-serif text-3xl text-gold-500 font-light italic">
                Prestigious
                <br />
                <span className="text-sky-blue text-xl">Family Legacy</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
