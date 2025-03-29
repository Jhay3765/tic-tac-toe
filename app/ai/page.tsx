"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TbMenu } from "react-icons/tb";
import { Model } from "./components/Banana";
import { Canvas } from "@react-three/fiber";
import { ArrowDownRight, BananaIcon } from "lucide-react";

export default function Page() {
  const hero = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: hero,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const moveX = useTransform(scrollYProgress, [0.2, 1], [-20, -1000]);

  // Track mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div className="relative" onMouseMove={handleMouseMove}>
      <motion.section
        style={{ opacity, scale }}
        className="text-stone-500 min-h-screen sticky top-0 -z-10"
      >
        <section className="flex flex-col justify-between min-h-screen p-24">
          <div className="flex justify-between">
            <div className="flex text-stone-950 gap-2">
              <BananaIcon />
              <p className="tracking-tighter">Banana Inc</p>
            </div>
            <TbMenu size={40} />
          </div>
          <div>
            <h1 className="text-9xl tracking-tighter text-stone-900">
              We Love <span className="text-yellow-400">Bananas</span>{" "}
            </h1>
            <ArrowDownRight size={70} className="mt-8" />
          </div>

          <div className="flex justify-between">
            <p className="text-xl w-fit bg-stone-900 h-fit py-2 px-10 rounded-3xl text-yellow-200">
              Subscribe to the Peel-Mail 🍌
            </p>
            <p className="max-w-sm text-stone-600">
              Bananas are more than just a fruit—they’re nature’s perfect snack.
              Packed with potassium, vitamins, and natural sweetness, they’re as
              versatile as they are delicious. Whether you’re making smoothies,
              baking bread, or grabbing a quick bite, bananas never disappoint.
            </p>
          </div>
        </section>
      </motion.section>

      <motion.main
        ref={hero}
        className="bg-stone-900 min-h-screen rounded-t-3xl z-40 relative overflow-clip"
      >
        <p className="text-yellow-200 text-center p-8">
          Keep scrolling to experience the magic of bananas!
        </p>

        <motion.p
          style={{ x: moveX }}
          className="text-yellow-200 whitespace-nowrap p-8 text-9xl uppercase font-bold mt-48 sticky top-0"
        >
          They are Everywhere They are Everywhere They are Everywhere They are
          They are Everywhere Everywhere
        </motion.p>

        <motion.div>
          <Scene />
        </motion.div>
        <div className="h-screen bg-stone-900"></div>
      </motion.main>
      <div className="h-screen bg-stone-900"></div>
      <motion.div
        style={{
          position: "fixed",
          top: mousePosition.y - 20,
          left: mousePosition.x - 20,
          pointerEvents: "none",
        }}
        className="text-4xl z-40"
      >
        🍌
      </motion.div>
    </div>
  );
}

const Scene = () => {
  return (
    <div className="w-full h-screen">
      <Canvas>
        <ambientLight />
        <Model />
        <Model position={[-4, -1, 0]} />
      </Canvas>
    </div>
  );
};
