"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 pb-12 border-b border-gold-300 border-opacity-20">

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif font-bold text-gold-300 mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="/" className="hover:text-gold-300 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/itinerary" className="hover:text-gold-300 transition">
                  Itinerary
                </a>
              </li>
              <li>
                <a href="/the-reason" className="hover:text-gold-300 transition">
                  The Reason
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Logistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif font-bold text-gold-300 mb-4">Logistics</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="/payments" className="hover:text-gold-300 transition">
                  Payments
                </a>
              </li>
              <li>
                <a href="/connect" className="hover:text-gold-300 transition">
                  RSVP
                </a>
              </li>
              <li>
                <a href="/travel" className="hover:text-gold-300 transition">
                  Travel
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif font-bold text-gold-300 mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="https://groupme.com/join_group/101906028/7iDBhrT9" className="hover:text-gold-300 transition">
                  GroupMe
                </a>
              </li>
              <li>
                <a href="https://docs.google.com/spreadsheets/d/1zjpaDJG4jJCBjAl3XtU9I1laCvMeyaVszIFRaqJeof0/edit?usp=sharing" className="hover:text-gold-300 transition">
                  Family Tree
                </a>
              </li>
              <li>
                <a href="/connect" className="hover:text-gold-300 transition">
                  Connect Page
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left text-sm text-gray-400"
        >
          <p>&copy; {currentYear} The Sunny-Side: Hoskins Family Reunion. All rights reserved.</p>
          <p className="mt-4 sm:mt-0">
            Rooted in love, growing for generations.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
