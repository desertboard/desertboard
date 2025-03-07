"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  href,
  children,
  noMenu,
}: {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  href: string;
  children?: React.ReactNode;
  noMenu?:boolean;
}) => {




  return (
    <div onMouseEnter={() => noMenu ? setActive(null) : setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className={`cursor-pointer hover:text-gray-500 text-[12px] xl:text-[14px]  xxl:text-font18 mitm nuber-next-bold tracking-normal`}

      >
      <Link href={href}>{item}</Link>
      </motion.p>
      {active !== null && !noMenu && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && !noMenu && (
            <div className="absolute top-[calc(100%_+_1rem)] left-1/2 transform -translate-x-1/2 pt-6">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl mnbg"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-7"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative border border-transparent dark:bg-black dark:border-white/[0.2] bg-transparent w-full shadow-input flex
      justify-between gap-[10px] lg:gap-[15px] xxl:gap-[30px] 3xl:gap-[52px] py-4 navgap">
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={80}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-font18  mb-1 text-black dark:text-white nuber-next-heavy mb-3 lg:mb-4">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300 helvetica">
          {description}
        </p>
      </div>
    </Link>
  );
};


export const ProductItemL = ({
  title,
  href,
}: {
  title: string;
  href: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <p className="text-black tracking-normal">
       {title}
       </p>
    </Link>
  );
};