"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  XIcon
} from "react-share";
import { FacebookIcon, LinkedinIcon, WhatsappIcon } from "react-share";
import Image from "next/image";
import { assets } from "@/public/assets/images/assets";

const ShareArticle = () => {
  const [showIcons, setShowIcons] = useState(false);
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  // Container animation (stagger effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }, // Icons appear one by one
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.1, staggerDirection: -1 }, // Reverse order on hide
    },
  };

  // Individual icon animation
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };
  // const shareOnInstagram = async () => {
  //   const instagramPostUrl = "https://www.instagram.com/p/DGLMwLsNVY-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="; // Replace with actual post URL

  //   try {
  //     await navigator.clipboard.writeText(instagramPostUrl);
  //     console.log(instagramPostUrl);

  //     // Open Instagram App (Android/iOS) or Web
  //     window.open(instagramPostUrl, "_blank");
  //   } catch (err) {
  //     console.error("Failed to copy URL:", err);
  //   }
  // };
  const shareOnInstagram = async () => {
    const instagramPostUrl = "https://www.instagram.com/p/DGLMwLsNVY-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==";

    try {
      await navigator.clipboard.writeText(instagramPostUrl);
      console.log("URL copied!");

      // Try opening the Instagram app
      window.location.href = "instagram://"; // iOS & Android
    } catch (err) {
      console.error("Error copying URL:", err);
    }
  };

  return (
    <div className="relative w-fit">
      {/* Share Button */}
      <motion.button
        onClick={() => setShowIcons(!showIcons)}
        className="flex items-center gap-2 pb-6 cursor-pointer transition-transform transform hover:scale-110"
        whileTap={{ scale: 0.9 }}
      >
        <Image src={assets.share} alt="Share Icon" />
        <p className="nuber-next-bold text-font18 leading-[1]">
          Share Article
        </p>

      </motion.button>

      {/* Animated Social Icons */}
      <AnimatePresence>
        {showIcons && (
          <motion.div
            className="flex gap-3 md:mt-2 relative bottom-2 md:absolute md:top-7   md:right-[-65px] lg:right-[-51px]  xl:right-[-54px] px-0 md:px-2 p-2 rounded-lg"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {[
              { Component: FacebookShareButton, Icon: FacebookIcon },
              { Component: TwitterShareButton, Icon: XIcon },
              { Component: LinkedinShareButton, Icon: LinkedinIcon },
              { Component: WhatsappShareButton, Icon: WhatsappIcon },
            ].map(({ Component, Icon }, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, rotate: 5 }}
                variants={itemVariants}
              >
                <Component url={shareUrl}>
                  <Icon size={32} round />
                </Component>
              </motion.div>
            ))}
            <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                variants={itemVariants}
              >
              <p onClick={shareOnInstagram}   rel="noopener noreferrer">
                <div className="bg-[#E4405F] cursor-pointer rounded-full w-[32px] h-[32px] flex align-center justify-center">
                  <FaInstagram size={32} color="#fff" className="w-[18px]"/>
                  </div>
              </p>
              </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ShareArticle;
