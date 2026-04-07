"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Amenities() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const amenitiesData = [
    {
      category: "Heritage & Memory",
      items: [
        { icon: "📖", name: "Storytelling Corners", desc: "Family voices and oral history moments" },
        { icon: "🖼️", name: "Ancestor Photo Gallery", desc: "Legacy portraits and memory walls" },
        { icon: "🎙️", name: "Family Interview Booth", desc: "Record stories for future generations" },
        { icon: "🌳", name: "Legacy Reflection Garden", desc: "Quiet remembrance and gratitude spaces" },
      ],
    },
    {
      category: "Weekend Essentials",
      items: [
        { icon: "👕", name: "Reunion Attire Guidance", desc: "Color themes and banquet dress notes" },
        { icon: "📸", name: "Family Photo Sessions", desc: "Group portraits and candid capture times" },
        { icon: "🍽️", name: "Picnic & Banquet Details", desc: "Dining schedule and event logistics" },
        { icon: "🧡", name: "Youth & Elders Moments", desc: "Intergenerational connection activities" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

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
          <h3 className="font-serif text-3xl text-charcoal mb-2">What to look forward to</h3>
          <div className="h-1 w-20 bg-gradient-gold rounded mx-auto" />
        </motion.div>

        {/* Amenities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {amenitiesData.map((category, categoryIdx) => (
            <motion.div
              key={categoryIdx}
              variants={itemVariants}
              className="space-y-4"
            >
              {/* Category Header */}
              <div className="pb-4 border-b-2 border-gold-300">
                <h3 className="font-serif text-xl font-bold text-charcoal">
                  {category.category}
                </h3>
              </div>

              {/* Items */}
              <div className="space-y-3">
                {category.items.map((item, itemIdx) => (
                  <motion.div
                    key={itemIdx}
                    whileHover={{ x: 5 }}
                    className="p-3 rounded-lg bg-white bg-opacity-40 hover:bg-opacity-60 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl flex-shrink-0 mt-1">
                        {item.icon}
                      </span>
                      <div>
                        <p className="font-semibold text-charcoal text-sm">
                          {item.name}
                        </p>
                        <p className="text-gray-600 text-xs mt-1">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
