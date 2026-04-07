"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import OurPattern from "./OurPattern";

export default function TheReason() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
      <section
        id="the-reason"
        ref={ref}
        className="min-h-screen pt-28 pb-44 sm:pt-36 sm:pb-56 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-cover"
        style={{ backgroundImage: "url('/images/image_7128.jpg')", backgroundPosition: "center 65%" }}
      >
        <div className="absolute inset-0 bg-charcoal/60" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                The Reason
              </h2>
              <div className="h-1 w-20 bg-gradient-gold rounded mb-8" />
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-gray-200 text-lg leading-relaxed">
                Why we gather, why we remember, and why this legacy still matters.
              </p>

              <br />

              <h3 className="font-serif text-2xl sm:text-3xl text-gold-300 mt-10 mb-5">
                Dwidell "Sunny" Hoskins Jr
              </h3>
              <div className="space-y-5 text-gray-200 text-base sm:text-lg leading-relaxed">
                <p>
                  He served the Lord wholeheartedly and walked with very strong integrity.
                  As a result of his belief and his walk, he instilled those values in his children.
                </p>

                <p>
                  He was also passionate about music and always wanted a family group.
                  He never got that, but he made sure his children were musically inclined.
                </p>

                <p>
                  As a result, we now have preachers, singers, musicians, songwriters, and music
                  producers to carry his legacy throughout the world.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-10">
              <div className="h-1 w-20 bg-gradient-gold rounded" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Pattern Section */}
      <OurPattern />
    </>
  );
}
