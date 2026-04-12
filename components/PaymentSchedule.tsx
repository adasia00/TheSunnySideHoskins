"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function PaymentSchedule() {
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const paymentSheetLink =
    "https://docs.google.com/spreadsheets/d/1-b2qQiCsKBb0dOxYUY5xANcershAK82r7ZK800dFcs4/edit?usp=sharing";
  const formLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSeOcQy7LyXt3jQr8Xwf7T0xrnsiIDMuhqvaNGUyXkuKXl_QlQ/viewform?usp=dialog";

  const paymentTimeline = [
    {
      step: "01",
      label: "First Deposit",
      dueDate: "April 1st, 2026 (Flexible)",
      installmentAmount: "$100",
      notes: "Initial deposit to confirm your spot. The April 1st due date is flexible.",
    },
    {
      step: "02",
      label: "Hotel Reservation",
      dueDate: "May 1st, 2026",
      installmentAmount: "Reserve directly with hotel",
      notes: "Hotel should be reserved by May 1st. Hotel cost is paid individually and should not be sent with reunion payments.",
    },
    {
      step: "03",
      label: "Bowling Payment",
      dueDate: "May 13th, 2026",
      installmentAmount: "$18 / $14 (55+)",
      notes: "Bowling at 901 Bowl on Friday, June 12th (7:30–9:30 PM). $18/person or $14/person for adults 55+. Shoes included. Due by May 13th — we are paying in advance at a discounted rate to reserve our lanes.",
    },
    {
      step: "04",
      label: "Saturday Eating & Activities",
      dueDate: "TBD",
      installmentAmount: "TBD",
      notes: "Costs covering Saturday meals and activities. Details and pricing to be announced.",
    },
    {
      step: "05",
      label: "Banquet Costs",
      dueDate: "TBD",
      installmentAmount: "TBD",
      notes: "Costs for the Legacy Banquet on Saturday evening. Details and pricing to be announced.",
    },
    {
      step: "06",
      label: "Final Payment",
      dueDate: "TBA",
      installmentAmount: "Remaining balance",
      notes: "Submit your remaining reunion balance as soon as possible.",
    },
  ];

  return (
    <section
      id="payments"
      ref={ref}
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-charcoal via-charcoal to-sky-blue relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-gold-300 rounded-full opacity-30"
        />
      </div>
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-sky-blue opacity-10 blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          {/* Header */}
          <motion.h2 variants={itemVariants} className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
            Payment Schedule
          </motion.h2>

          {/* Timeline + Breakdown Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white bg-opacity-5 backdrop-blur-md border-2 border-gold-400 rounded-3xl p-8 sm:p-10 lg:p-12 max-w-5xl mx-auto mb-12"
          >
            <motion.div variants={itemVariants} className="mb-10">
              <p className="text-gold-200 text-lg font-light mb-2">
                Timeline and payment breakdown for reunion contributions
              </p>
              <div className="inline-block bg-gold-50/10 border border-gold-300/30 px-5 py-2 rounded-full text-gold-100 text-sm tracking-wide uppercase">
                6 Steps • Deposit, Hotel, Bowling, Saturday, Banquet, Final Balance
              </div>
            </motion.div>

            {/* Visual Timeline */}
            <motion.div variants={itemVariants} className="mb-10">
              <h3 className="font-serif text-2xl font-bold text-white mb-8">Payment Timeline</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                {paymentTimeline.map((milestone, index) => (
                  <div key={milestone.step} className="relative">
                    <div className="bg-charcoal/40 border border-gold-300/30 rounded-2xl p-5 h-full">
                      <p className="text-gold-300 text-xs tracking-[0.2em] uppercase mb-2">Step {milestone.step}</p>
                      <p className="text-white font-serif text-xl mb-1">{milestone.label}</p>
                      <p className="text-gold-200 text-sm mb-4">Due {milestone.dueDate}</p>
                      <p className="text-gray-200 text-sm leading-relaxed">{milestone.notes}</p>
                    </div>
                    {index < paymentTimeline.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gold-300/50" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Breakdown Table */}
            <motion.div variants={itemVariants} className="text-left mb-10">
              <h3 className="font-serif text-2xl font-bold text-white mb-5">Payment Breakdown</h3>
              <div className="overflow-x-auto rounded-xl border border-gold-300/30">
                <table className="min-w-full text-sm">
                  <thead className="bg-gold-200/10 text-gold-100 uppercase tracking-wide">
                    <tr>
                      <th className="px-4 py-3 text-left">Installment</th>
                      <th className="px-4 py-3 text-left">Due Date</th>
                      <th className="px-4 py-3 text-left">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paymentTimeline.map((milestone, index) => (
                      <tr key={milestone.step} className={index % 2 === 0 ? "bg-white/5" : "bg-transparent"}>
                        <td className="px-4 py-3 text-white font-semibold">{milestone.label}</td>
                        <td className="px-4 py-3 text-gray-200">{milestone.dueDate}</td>
                        <td className="px-4 py-3 text-gold-200">{milestone.installmentAmount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-300 mt-3">
                Final payment includes all remaining reunion costs. Reference the official payment sheet for exact totals.
              </p>
            </motion.div>

            {/* Payment Info */}
            <motion.div variants={itemVariants} className="text-left mb-8">
              <h3 className="font-serif text-lg font-bold text-gold-300 mb-4">
                Payment Options
              </h3>
              <ul className="space-y-3 text-white">
                <li className="flex items-center gap-3">
                  <span className="text-gold-400">✓</span>
                  <span>Zelle: Send to (832) 812-5686 and include your full name in the memo</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gold-400">✓</span>
                  <span>Apple Pay: Send to (832) 812-5686</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gold-400">✓</span>
                  <span>You may send money at any time via Zelle or Apple Pay to go toward your reunion costs.</span>
                </li>
              </ul>
              <h3 className="font-serif text-lg font-bold text-gold-300 mt-8 mb-4">
                Additional Information
              </h3>
              <ul className="space-y-3 text-white">
                <li className="flex items-center gap-3">
                  <span className="text-gold-400">✓</span>
                  <span className="font-semibold text-gold-100">Do not send hotel reservation money through reunion payments. Hotel is paid directly by each individual guest.</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gold-400">✓</span>
                  <span>Track all submissions in the official family payment sheet.</span>
                </li>
              </ul>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="space-y-4">
              <a
                href={paymentSheetLink}
                target="_blank"
                rel="noreferrer"
                className="block w-full text-center px-8 py-4 bg-gradient-gold text-charcoal font-serif font-bold text-lg rounded-xl hover:shadow-2xl transition-all duration-300"
              >
                Open Payment Sheet
              </a>
              <motion.a
                href={formLink}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block w-full text-center px-8 py-4 border border-gold-300 text-gold-100 font-serif font-bold text-lg rounded-xl hover:bg-gold-300 hover:text-charcoal transition-all duration-300"
              >
                Secure Your Spot
              </motion.a>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
