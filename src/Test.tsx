"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import React from "react";

const blackBox = {
  initial: {
    height: "100%",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: "afterChildren",
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren",
    },
  },
};

const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 80,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const InitialTransition = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      className="absolute z-50 flex items-center justify-center w-full bg-black"
      initial="initial"
      animate="animate"
      variants={blackBox}
      onAnimationStart={() => document.body.classList.add("overflow-hidden")}
      onAnimationComplete={() =>
        document.body.classList.remove("overflow-hidden")
      }
    >
      <motion.svg variants={textContainer} className="absolute z-50 flex">
        <pattern
          id="pattern"
          patternUnits="userSpaceOnUse"
          width={750}
          height={800}
          className="text-white"
        >
          <rect className="w-full h-full fill-current" />
          <motion.rect
            variants={text}
            className="w-full h-full text-gray-600 fill-current"
          />
        </pattern>
        <text
          className="text-4xl font-bold "
          textAnchor="middle"
          x="50%"
          y="50%"
          style={{ fill: "url(#pattern)" }}
        >
          БАРС
        </text>
      </motion.svg>
    </motion.div>
  );
};

export default function ClientAnimationWrapper({ children }) {
  const pathname = usePathname();
  const [isFirstMount, setIsFirstMount] = useState(true);
  console.log("render2");
  useEffect(() => {
    if (isFirstMount) {
      const timer = setTimeout(() => {
        setIsFirstMount(false);
      }, 2800);
      return () => clearTimeout(timer);
    }
  }, [isFirstMount]);

  return (
    <>
      {isFirstMount && <InitialTransition />}
      <AnimatePresence mode="wait">
        {React.cloneElement(children, { isFirstMount, key: pathname })}
      </AnimatePresence>
    </>
  );
}
