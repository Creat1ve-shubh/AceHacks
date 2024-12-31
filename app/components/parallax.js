"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
      <motion.h1
        style={{ y: textY }}
        className="font-bold font-serif text-opacity-50 text-neonPink text-3xl md:text-8xl relative z-10 mb-52" // Added margin-bottom
      >
        Innovate. Elevate. Transform.
      </motion.h1>
      
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/bg.jpg)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
     
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(/car.png)`,
          backgroundPosition: "center 85%", // Moved car lower
          backgroundSize: "70% auto", // Made car slightly smaller
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  );
}

