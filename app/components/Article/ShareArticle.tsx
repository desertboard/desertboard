"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FacebookShareButton, 
  TwitterShareButton, 
  LinkedinShareButton, 
  WhatsappShareButton 
} from "react-share";
import { FacebookIcon, TwitterIcon, LinkedinIcon, WhatsappIcon } from "react-share";
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

  return (
    <div className="relative">
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
            className="flex gap-3 mt-2 absolute top-7 p-2 rounded-lg"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {[
              { Component: FacebookShareButton, Icon: FacebookIcon },
              { Component: TwitterShareButton, Icon: TwitterIcon },
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ShareArticle;
