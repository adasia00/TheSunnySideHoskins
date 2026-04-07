"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface TimelineCardProps {
  year: string;
  name: string;
  biography: string;
  isMemorial?: boolean;
}

export default function TimelineCard({
  year,
  name,
  biography,
  isMemorial = false,
}: TimelineCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipVariants = {
    front: {
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    back: {
      rotateY: 180,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <div
      className="h-72 cursor-pointer perspective"
      onClick={() => setIsFlipped(!isFlipped)}
      style={{
        perspective: "1000px",
      }}
    >
      <motion.div
        className="w-full h-full relative"
        animate={isFlipped ? "back" : "front"}
        variants={flipVariants}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* FRONT FACE */}
        <div
          className="absolute w-full h-full bg-white border-2 border-gold/50 rounded-lg p-6 flex flex-col items-center justify-center hover:border-gold hover:shadow-lg transition-all duration-300"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          <div className="text-center">
            <div className="font-serif text-4xl font-bold text-gold mb-4">
              {year}
            </div>
            <h4 className="font-sans text-lg text-charcoal font-semibold">
              {name}
            </h4>
          </div>

          {/* Click to Flip Indicator */}
          <motion.div
            className="absolute bottom-4 right-4 text-gold"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M1 4v6h6M23 20v-6h-6" />
              <path d="M20.49 9A9 9 0 0 0 5.64 5.64" />
              <path d="M3.51 15A9 9 0 0 0 18.36 18.36" />
            </svg>
          </motion.div>
        </div>

        {/* BACK FACE */}
        <div
          className={`absolute w-full h-full rounded-lg p-6 overflow-y-auto ${
            isMemorial
              ? "bg-gradient-to-b from-white to-yellow-50"
              : "bg-cream"
          } border-2 border-gold/50`}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Memorial Heart/Dove Icon */}
          {isMemorial && (
            <div className="flex justify-center mb-4">
              <div className="text-gold text-4xl">💙</div>
            </div>
          )}

          <div className="text-charcoal text-sm leading-relaxed">
            <h5 className="font-serif text-lg font-bold text-gold mb-3">
              {name}
            </h5>
            <p className="text-charcoal/80">{biography}</p>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute inset-0 pointer-events-none rounded-lg bg-gradient-to-b from-transparent via-transparent to-white/30" />
        </div>
      </motion.div>
    </div>
  );
}
