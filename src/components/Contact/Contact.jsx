import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMobile,
} from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { contactData } from "../../data/contactData";
import { headerData } from "../../data/headerData";
import BubbleText from "../BubbleText/BubbleText";
import { useCursorSpotlight } from "../../utils/useCursorSpotlight";
import CursorSpotlight from "../CursorSpotlight/CursorSpotlight";

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const EMAILJS_AUTOREPLY_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_AUTOREPLY_TEMPLATE_ID;

const STATUS = {
  IDLE: "idle",
  SENDING: "sending",
  SUCCESS: "success",
  ERROR: "error",
  NOT_CONFIGURED: "not_configured",
};

const inputClasses =
  "w-full h-12 px-5 text-white bg-white/5 border border-white/15 rounded-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary/50 transition";

const Contact = () => {
  const spotlight = useCursorSpotlight();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(STATUS.IDLE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) nextErrors.message = "Please enter a message.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus(STATUS.NOT_CONFIGURED);
      return;
    }

    setStatus(STATUS.SENDING);
    try {
      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        to_email: contactData.email,
      };

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });

      if (EMAILJS_AUTOREPLY_TEMPLATE_ID) {
        emailjs
          .send(EMAILJS_SERVICE_ID, EMAILJS_AUTOREPLY_TEMPLATE_ID, templateParams, {
            publicKey: EMAILJS_PUBLIC_KEY,
          })
          .catch((error) => {
            console.error("Auto-reply email failed to send:", error);
          });
      }

      setStatus(STATUS.SUCCESS);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus(STATUS.ERROR);
    }
  };

  return (
    <div
      id="contact"
      ref={spotlight.containerRef}
      onMouseMove={spotlight.handleMouseMove}
      onMouseLeave={spotlight.handleMouseLeave}
      className="relative overflow-hidden scroll-mt-20"
    >
      <CursorSpotlight
        x={spotlight.spotlightX}
        y={spotlight.spotlightY}
        opacity={spotlight.spotlightOpacity}
      />

      <div className="relative px-4 py-16 md:px-10 md:py-28">
        <h1 className="text-3xl font-bold text-center text-white md:text-4xl">
          Contact
        </h1>
        <div className="w-16 h-1 mx-auto mt-4 mb-14 rounded-full bg-primary" />

        <div className="relative max-w-5xl mx-auto">
          <motion.div
            className="absolute rounded-[3rem] -inset-6 bg-primary/20 blur-2xl"
            style={{ x: spotlight.blobX, y: spotlight.blobY }}
          />

          <div className="relative flex flex-col overflow-hidden border md:flex-row rounded-3xl border-white/10 bg-white/[0.06] backdrop-blur-2xl shadow-2xl shadow-black/50">
            <div className="w-full p-8 text-white border-b md:w-2/5 md:p-10 md:border-b-0 md:border-r border-white/10 bg-primary/10">
              <h2 className="text-2xl font-semibold md:text-3xl">
                Let&apos;s Talk
              </h2>
              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-9 h-9 border rounded-xl shrink-0 bg-white/5 border-white/10">
                    <FaLocationDot className="text-sm" />
                  </span>
                  <p className="pt-1.5 text-sm text-gray-200 md:text-base">
                    {contactData.address}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-9 h-9 border rounded-xl shrink-0 bg-white/5 border-white/10">
                    <FaEnvelope className="text-sm" />
                  </span>
                  <p className="pt-1.5 text-sm text-gray-200 break-all md:text-base">
                    {contactData.email}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-9 h-9 border rounded-xl shrink-0 bg-white/5 border-white/10">
                    <FaMobile className="text-sm" />
                  </span>
                  <p className="pt-1.5 text-sm text-gray-200 md:text-base">
                    {contactData.phone}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 pt-10 text-lg">
                {headerData.social.facebook && (
                  <a
                    href={headerData.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex items-center justify-center transition-colors duration-300 border rounded-full group w-9 h-9 border-white/10 bg-white/5 hover:border-primary hover:text-primary"
                  >
                    <FaFacebook className="text-sm transition-transform duration-300 origin-center group-hover:scale-125" />
                  </a>
                )}
                {headerData.social.linkedIn && (
                  <a
                    href={headerData.social.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex items-center justify-center transition-colors duration-300 border rounded-full group w-9 h-9 border-white/10 bg-white/5 hover:border-primary hover:text-primary"
                  >
                    <FaLinkedin className="text-sm transition-transform duration-300 origin-center group-hover:scale-125" />
                  </a>
                )}
                <span className="flex items-center justify-center border rounded-full w-9 h-9 border-white/10 bg-white/5 opacity-50">
                  <FaInstagram className="text-sm" aria-hidden="true" />
                </span>
              </div>
            </div>

            <div className="w-full p-6 md:w-3/5 md:p-10">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Get In Touch
              </h2>
              <p className="text-gray-400">
                Feel free to drop me a line below!
              </p>

              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                <div>
                  <input
                    className={inputClasses}
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <input
                    className={inputClasses}
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                  )}
                </div>

                <div>
                  <textarea
                    className={`${inputClasses} px-5 py-3 h-auto min-h-28 max-h-40 resize-none`}
                    name="message"
                    placeholder="Message"
                    value={form.message}
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === STATUS.SENDING}
                  className="relative h-11 px-6 font-semibold text-white transition-all duration-300 border rounded-lg border-white/20 bg-primary/80 backdrop-blur-md shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-primary/50 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span className="absolute h-px inset-x-3 top-0 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                  <BubbleText text={status === STATUS.SENDING ? "Sending..." : "Submit"} />
                </button>

                {status === STATUS.SUCCESS && (
                  <p className="text-sm font-medium text-green-400">
                    Thanks! Your message has been sent successfully.
                  </p>
                )}
                {status === STATUS.ERROR && (
                  <p className="text-sm font-medium text-red-400">
                    Something went wrong sending your message. Please try
                    again, or email me directly at {contactData.email}.
                  </p>
                )}
                {status === STATUS.NOT_CONFIGURED && (
                  <p className="text-sm font-medium text-red-400">
                    The contact form isn&apos;t connected to an email service
                    yet. Please reach out directly at {contactData.email}.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full p-4 text-xs text-center text-gray-500 bg-black">
        copyright © {new Date().getFullYear()} | All rights reserved by
        Shanika Ayasmanthi
      </div>
    </div>
  );
};

export default Contact;
