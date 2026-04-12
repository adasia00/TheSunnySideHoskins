"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Amenities() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      id="itinerary"
      ref={ref}
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-cream relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
            See what is planned!
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-4">
            A curated blend of family heritage spaces, travel support, and celebration experiences.
          </p>
          <div className="inline-block bg-gold-50 border-l-4 border-gold-400 px-6 py-3 rounded">
            <p className="text-charcoal font-semibold">
              June 11th - 14th Family Reunion Weekend
            </p>
          </div>
        </motion.div>

        {/* Luxury Itinerary Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-12 bg-white rounded-2xl shadow-lg p-8 sm:p-12"
        >
          <h3 className="font-serif text-3xl text-charcoal mb-6">Itinerary</h3>
          <div className="space-y-5">
            <div className="border-l-4 border-gold-400 pl-4">
              <p className="text-sm uppercase tracking-wide text-gold-600">June 11th | Thursday</p>
              <p className="font-semibold text-charcoal">Early Arrival Connection</p>
              <p className="text-gray-600 text-sm">For family members arriving early to connect, relax, and settle in together.</p>
            </div>
            <div className="border-l-4 border-gold-400 pl-4">
              <p className="text-sm uppercase tracking-wide text-gold-600">June 12th | Friday</p>
              <p className="font-semibold text-charcoal">Meet & Greet Reception</p>
              <p className="text-gray-600 text-sm">Evening welcome, registration check-in, family introductions, and bowling at 901 Bowl.</p>
            </div>
            <div className="border-l-4 border-gold-400 pl-4">
              <p className="text-sm uppercase tracking-wide text-gold-600">June 13th | Saturday</p>
              <p className="font-semibold text-charcoal">Marvell Heritage Tour, Museum Visits, Legacy Banquet & Connection Night</p>
              <p className="text-gray-600 text-sm">A full day of heritage experiences followed by banquet honors and an evening of games and activities.</p>
            </div>
            <div className="border-l-4 border-gold-400 pl-4">
              <p className="text-sm uppercase tracking-wide text-gold-600">June 14th | Sunday</p>
              <p className="font-semibold text-charcoal">Church & Family Farewell Brunch</p>
              <p className="text-gray-600 text-sm">Worship service followed by a farewell family brunch before departure.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-8 text-center"
        >
          <h3 className="font-serif text-3xl text-charcoal mb-2">Full Itinerary</h3>
          <div className="h-1 w-20 bg-gradient-gold rounded mx-auto" />
        </motion.div>

        {/* Full Itinerary PDF */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-4 sm:p-6"
        >
          <div className="mb-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/docs/full-itinerary.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-gold-500 px-4 py-2 text-sm font-semibold text-white hover:bg-gold-600 transition-colors"
            >
              Open Full Itinerary
            </a>
            <a
              href="/docs/full-itinerary.pdf"
              download
              className="inline-flex items-center rounded-md border border-gold-500 px-4 py-2 text-sm font-semibold text-gold-700 hover:bg-gold-50 transition-colors"
            >
              Download PDF
            </a>
          </div>

          <div className="h-[70vh] min-h-[500px] overflow-hidden rounded-xl border border-gold-200">
            <iframe
              src="/docs/full-itinerary.pdf#view=FitH"
              title="Sunny Side Hoskins Full Itinerary PDF"
              className="h-full w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
