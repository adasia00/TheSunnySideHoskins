"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  phone: string;
  familyUpdates?: string;
}

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const groupMeLink = "https://groupme.com/join_group/101906028/7iDBhrT9";
  const emailJsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID?.trim();
  const emailJsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?.trim();
  const emailJsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.trim();

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    setSubmitError("");

    try {
      if (!emailJsServiceId || !emailJsTemplateId || !emailJsPublicKey) {
        throw new Error("Email service is not configured correctly. Please contact the reunion team.");
      }

      await emailjs.send(
        emailJsServiceId,
        emailJsTemplateId,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          family_updates: data.familyUpdates ?? "",
        },
        emailJsPublicKey
      );

      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      let message = "We could not send your info right now. Please try again.";

      if (error instanceof Error && error.message) {
        message = error.message;
      } else if (error && typeof error === "object") {
        const maybeError = error as { text?: string; status?: number; message?: string };
        if (maybeError.message) {
          message = maybeError.message;
        } else if (maybeError.text && maybeError.status) {
          message = `Email service error (${maybeError.status}): ${maybeError.text}`;
        } else if (maybeError.text) {
          message = maybeError.text;
        }
      }

      setSubmitError(message);
    } finally {
      setSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
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

  return (
    <section
      id="connect"
      ref={ref}
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-cream relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gold-400 opacity-10 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-sky-blue opacity-10 blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
              Connect
            </h2>
            <p className="text-gray-600 text-lg">
              Keep the Sunny-Side in the loop!
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 space-y-6"
          >
            {/* Name Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-charcoal mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                {...register("name", { required: "Name is required" })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gold-400 focus:outline-none transition-colors"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </motion.div>

            {/* Email Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-charcoal mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="your.email@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email",
                  },
                })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gold-400 focus:outline-none transition-colors"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </motion.div>

            {/* Phone Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-charcoal mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                {...register("phone", { required: "Phone number is required" })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gold-400 focus:outline-none transition-colors"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </motion.div>

            {/* Family Updates Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-charcoal mb-2">
                Family Updates for the Family Tree (Optional)
              </label>
              <textarea
                rows={4}
                placeholder="Share births, marriages, memorials, name changes, or any family updates to add to the tree."
                {...register("familyUpdates", {
                  maxLength: {
                    value: 1200,
                    message: "Please keep updates under 1200 characters",
                  },
                })}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gold-400 focus:outline-none transition-colors"
              />
              {errors.familyUpdates && (
                <p className="text-red-500 text-sm mt-1">{errors.familyUpdates.message}</p>
              )}
            </motion.div>

            {/* Success Message */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-sky-50 border-l-4 border-sky-400 rounded text-sky-700"
              >
                ✓ Thank you! Your info has been sent to the reunion team.
              </motion.div>
            )}

            {submitError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-50 border-l-4 border-red-400 rounded text-red-700"
              >
                {submitError}
              </motion.div>
            )}

            <motion.button
              variants={itemVariants}
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={submitting}
              className="block text-center w-full px-8 py-4 bg-gradient-gold text-charcoal font-serif font-bold text-lg rounded-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {submitting ? "Sending..." : "Send Connect Form"}
            </motion.button>

            <motion.a
              variants={itemVariants}
              href={groupMeLink}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block text-center w-full px-8 py-4 bg-charcoal text-gold-200 font-serif font-bold text-lg rounded-lg border border-gold-300 shadow-[0_0_25px_rgba(217,160,60,0.45)] hover:shadow-[0_0_35px_rgba(217,160,60,0.65)] transition-all duration-300"
            >
              Join the GroupMe
            </motion.a>

            {/* Privacy Notice */}
            <motion.p variants={itemVariants} className="text-xs text-gray-500 text-center">
              We respect your privacy. Your information is used only for reunion coordination.
            </motion.p>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
