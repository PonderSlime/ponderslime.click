"use client";
import React, { useEffect, useRef } from "react";
import Card from "@/components/card";
import { animate, motion, useMotionValue } from "motion/react";


interface Item {
    image: string;
    link: string;
  }
  
  // Define the type for props
  interface AutoScrollProps {
    items: Item[];
  }

export default function AutoScroll(props: AutoScrollProps) {
  const xTranslation = useMotionValue(0);
  const ref = useRef(null);

  useEffect(() => {

    let controls;
    const finalPosition = -((props.items.length * 216));

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return () => controls.stop();
  }, [props.items, xTranslation]);

  return (
    <motion.div
      className="absolute left-0 flex gap-4"
      ref={ref}
      style={{ x: xTranslation }}
    >
      {[...props.items, ...props.items, ...props.items, ...props.items].map((item, idx) => (
        <Card image={item.image} link={item.link} key={idx} />
      ))}
    </motion.div>
  );
}
