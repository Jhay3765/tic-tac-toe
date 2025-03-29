"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function LinkItem() {
  const [hov, setHov] = useState(false);
  return (
    <div
      onPointerEnter={() => setHov(true)}
      onPointerLeave={() => setHov(false)}
      className="text-5xl flex overflow-clip w-fit bg-red-400"
    >
      <motion.p style={{ x: hov ? 400 : 0 }}>LinkItem</motion.p>
    </div>
  );
}
