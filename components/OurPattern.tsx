"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import TimelineCard from "./TimelineCard";

export default function OurPattern() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  // Section 1: Header & Introduction
  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Section 2: Timeline
  const { ref: timelineRef, inView: timelineInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Section 3: Descendants Map
  const { ref: descendantsRef, inView: descendantsInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const timelineData = [
    {
      year: "1936",
      name: "Dwidell 'Sunny' Hoskins Jr",
      title: "Birth of Dwidell 'Sunny' Hoskins Jr",
      location: "Marvell, Arkansas",
      side: "left",
      biography: "Born in Marvell, Arkansas in 1936. Dwidell and Pearline moved from Arkansas to Michigan in 1954, beginning a journey that would shape the family's legacy. A man of strong integrity and faith, he instilled these values in all his children and shared his passion for music throughout his life.",
      isMemorial: false,
    },
    {
      year: "1954",
      name: "Pearline & Migration",
      title: "Dwidell and Pearline Move",
      location: "Arkansas to Michigan",
      side: "right",
      biography: "1954 marked a pivotal year in the Hoskins family history. Dwidell and Pearline made the courageous decision to move from Arkansas to Michigan, seeking new opportunities and a fresh start. This decision would define the family's geographic and cultural trajectory for generations to come.",
      isMemorial: false,
    },
    {
      year: "1954",
      name: "Evorn Neal",
      title: "First child, Evorn Neal, born",
      location: "Holly Grove, Arkansas",
      side: "left",
      biography: "Born in Holly Grove, Arkansas on September 6, 1954. Evorn is a Pine Bluff native with training as a CNA and PBX specialist. She resided in Grand Rapids from 1982-1983 before moving to Dallas in 1984, where she has built her life and continued the family legacy in Texas.",
      isMemorial: false,
    },
    {
      year: "1956",
      name: "Mary Halen Johnson",
      title: "Second child, Mary Halen Johnson, born",
      location: "Grand Rapids, Michigan",
      side: "right",
      biography: "Born in Grand Rapids, Michigan in 1956. Mary Halen is a Ferris State '78 graduate and a dedicated spiritual leader. She serves as Co-Pastor of Divine Grace Ministries in Grand Blanc, Michigan, continuing her father's legacy of faith and service to the community with grace and purpose.",
      isMemorial: false,
    },
    {
      year: "1958",
      name: "Jimmy Louis Hoskins",
      title: "Third child, Jimmy Louis Hoskins, born",
      location: "Grand Rapids, Michigan",
      side: "left",
      biography: "Born in Grand Rapids, Michigan in 1958. Jimmy Louis is a Morehouse College graduate and track scholar who served his country with honor in the military, stationed in Alaska, Alabama, and Germany. He now resides in Atlanta, Georgia, where he continues to shine the Sunny Side legacy.",
      isMemorial: false,
    },
    {
      year: "1959",
      name: "Kenneth Wayne Hoskins",
      title: "Fourth child, Kenneth Wayne Hoskins, born",
      location: "Grand Rapids, Michigan",
      side: "right",
      biography: "Born in Grand Rapids, Michigan in 1959. Kenneth Wayne is a Ferris State alumnus who served his country through military service at Fort Jackson, Fort Lee, and Fayetteville. He has built a strong life in Grand Rapids, maintaining deep roots in the Michigan community where he was raised.",
      isMemorial: false,
    },
    {
      year: "1961",
      name: "Donald Durell Hoskins",
      title: "Fifth child, Donald Durell Hoskins, born",
      location: "Michigan",
      side: "left",
      biography: "Born in Michigan in 1961. Donald Durell is a Michigan State '84 graduate whose career has taken him across multiple states—Indiana, Minnesota, Ohio, and Kentucky. In 2002, he made the move to Austin, Texas, where he has established his home and continues the family's entrepreneurial spirit.",
      isMemorial: false,
    },
    {
      year: "1963",
      name: "John Denishall Hoskins",
      title: "Sixth child, John Denishall Hoskins, born",
      location: "Grand Rapids, Michigan",
      side: "right",
      biography: "Born and raised in Grand Rapids, Michigan in 1963. John Denishall is a lifelong Michigan resident with deep community roots. All of his children were born in Michigan. He continues to reside in Grand Rapids, maintaining the family's strong presence in the state where many of the Hoskins children grew up.",
      isMemorial: false,
    },
    {
      year: "1970",
      name: "Kevin Bernard Hoskins",
      title: "Seventh child, Kevin Bernard Hoskins, born and passed",
      location: "December, Michigan",
      side: "left",
      biography: "Kevin Bernard Hoskins was born and passed away in December 1970, living a brief but deeply cherished life from December 28 to December 30, 1970. Though his time on earth was short, his memory remains forever in the hearts of his family, a precious reminder of the fragility and beauty of life.",
      isMemorial: true,
    },
  ];

  return (
    <>
      {/* SECTION 1: Header & Introduction */}
      <section
        ref={headerRef}
        className="py-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url('${basePath}/images/marvell.jpg')` }}
      >
        <div className="absolute inset-0 bg-yellow-100/85" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
          >
            {/* Headline */}
            <motion.div variants={itemVariants} className="mb-6">
              <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-charcoal leading-tight">
                Our Pattern.
              </h2>
            </motion.div>

            {/* Gold Divider */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="h-1.5 w-24 bg-gradient-to-r from-gold to-gold/60 rounded" />
            </motion.div>

            {/* Sub-Headline */}
            <motion.div variants={itemVariants} className="mb-12">
              <p className="font-serif text-2xl sm:text-3xl text-charcoal/80 italic leading-relaxed">
                We gather not just to reconnect, but to retrace the steps of our
                foundation.
              </p>
            </motion.div>

            {/* Body Text */}
            <motion.div variants={itemVariants} className="pb-8 border-b-2 border-black">
              <div className="prose prose-lg max-w-none">
                <p className="text-charcoal text-lg leading-relaxed">
                  Our decision to host this gathering in Memphis, TN is intentional. It
                  places us only 1 hour and 20 minutes from where it all started: Marvell,
                  Arkansas. This réunion is the beginning of a larger journey; future
                  gatherings will follow the roadmap of Dwidell "Sunny" Hoskins Jr and his
                  descendants. We are returning to our roots to understand the legacy we
                  carry.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* DIVIDER LINE */}
      <section
        className="py-8 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url('${basePath}/images/marvell.jpg')` }}
      >
        <div className="absolute inset-0 bg-yellow-100/85" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="h-px bg-gold/50" />
        </div>
      </section>

      {/* SECTION 2: The Legacy Roadmap - Interactive Timeline */}
      <section
        ref={timelineRef}
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-yellow-100 to-yellow-50 relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={timelineInView ? "visible" : "hidden"}
          >
            {/* Section Header */}
            <motion.div variants={itemVariants} className="text-center mb-10 -mt-24">
              <h3 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal mb-4">
                The Legacy Roadmap
              </h3>
              <div className="h-1 w-16 bg-gold rounded mx-auto" />
            </motion.div>

            {/* Timeline Container */}
            <div className="relative">
              {/* Black Road Spine */}
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 w-5 bg-black rounded-full shadow-md"
                style={{ top: 0, bottom: 0 }}
                initial={{ scaleY: 0, originY: 0 }}
                animate={timelineInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />

              {/* Road Center Dash */}
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-gold/0 via-gold to-gold/0 rounded-full"
                style={{ top: 0, bottom: 0 }}
                initial={{ scaleY: 0, originY: 0 }}
                animate={timelineInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.15 }}
              />

              {/* Timeline Items */}
              <div className="relative z-10">
                {timelineData.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`mb-16 flex ${
                      item.side === "left"
                        ? "flex-row"
                        : "flex-row-reverse"
                    } items-center gap-8`}
                    initial={{ opacity: 0, x: item.side === "left" ? -30 : 30 }}
                    animate={
                      timelineInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: item.side === "left" ? -30 : 30 }
                    }
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                  >
                    {/* Content Container - TimelineCard */}
                    <div className="w-5/12 relative">
                      {/* Side road connector from card to center road */}
                      <div
                        className={`hidden sm:block absolute top-1/2 -translate-y-1/2 h-2 bg-black ${
                          item.side === "left"
                            ? "-right-8 w-8"
                            : "-left-8 w-8"
                        }`}
                      />
                      <TimelineCard
                        year={item.year}
                        name={item.name}
                        biography={item.biography}
                        isMemorial={item.isMemorial}
                      />
                    </div>

                    {/* Timeline Dot */}
                    <div className="w-2/12 flex justify-center">
                      <motion.div
                        className="w-7 h-7 rounded-full bg-black border-2 border-gold shadow-lg z-20 relative"
                        initial={{ scale: 0 }}
                        animate={timelineInView ? { scale: 1 } : { scale: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.1 + 0.3,
                        }}
                      >
                        <span className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-gold" />
                      </motion.div>
                    </div>

                    {/* Spacer for left side content */}
                    <div className="w-5/12 hidden sm:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: Mapping the Descendants */}
      <section
        ref={descendantsRef}
        className="py-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url('${basePath}/images/marvell.jpg')` }}
      >
        <div className="absolute inset-0 bg-yellow-100/85" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={descendantsInView ? "visible" : "hidden"}
          >
            {/* Section Header */}
            <motion.div variants={itemVariants} className="mb-16">
              <h3 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal mb-4">
                Where the Sunny Side Shines.
              </h3>
              <div className="h-1 w-16 bg-gold rounded" />
            </motion.div>

            {/* Full Width Map */}
            <motion.div
              variants={itemVariants}
              className="relative overflow-hidden rounded-lg shadow-xl max-w-4xl mx-auto"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={`${basePath}/images/map.png`}
                  alt="Heritage Map: Descendants' Journey"
                  width={900}
                  height={600}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent rounded-lg" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
