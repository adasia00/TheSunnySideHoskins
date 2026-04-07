"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function EldersCommittee() {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="family-tree"
      ref={ref}
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-charcoal via-charcoal to-sky-blue relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gold-400 opacity-5 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-sky-blue opacity-10 blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              The Elders & Committee
            </h2>
            <p className="text-gold-200 text-lg max-w-2xl mx-auto">
              Guided by wisdom, family stewardship, and enduring love
            </p>
          </motion.div>

          {/* Elders & Committee Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white bg-opacity-5 backdrop-blur-md border border-gold-300 border-opacity-20 rounded-2xl p-8 sm:p-12 lg:p-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Logo/Name */}
              <motion.div
                variants={itemVariants}
                className="lg:col-span-1 text-center lg:text-left"
              >
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-gold-300 mb-4">
                  Legacy Leadership
                </h3>
                <p className="text-gold-100 text-sm mb-4">Matriarchs, Patriarchs, and Reunion Committee</p>
                <div className="h-1 w-16 bg-gradient-gold rounded mx-auto lg:mx-0" />
              </motion.div>

              {/* Badge */}
              <motion.div
                variants={itemVariants}
                className="lg:col-span-1 flex justify-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-40 h-40 flex items-center justify-center"
                >
                  <div className="absolute inset-0 bg-gradient-gold rounded-full opacity-20" />
                  <div className="text-center">
                    <div className="text-4xl mb-2">✓</div>
                    <p className="font-serif font-bold text-gold-300 text-sm">
                      Honor
                    </p>
                    <p className="font-serif font-bold text-gold-300 text-sm">
                      Tradition
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Description */}
              <motion.div variants={itemVariants} className="lg:col-span-1">
                <p className="text-white text-base leading-relaxed mb-4">
                  The Sunny-Side reunion is anchored by elders and organizers who
                  carry the Hoskins legacy with pride and purpose.
                </p>
                <p className="text-gold-100 text-sm">
                  Their commitment: preserving family history, welcoming every
                  generation, and building stronger ties for years to come.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
