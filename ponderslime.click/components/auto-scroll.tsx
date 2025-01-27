"use client";
import React, { useEffect, useRef, useState } from "react";
import Card from "@/components/card";
import { animate, motion, motionValue, useMotionValue } from "motion/react";


interface Item {
    image: string;
    link: string;
    name: string;
  }
  
  // Define the type for props
  interface AutoScrollProps {
    items: Item[];
    direction: "to-left" | "to-right"
  }



export default function AutoScroll(props: AutoScrollProps) {
    const FAST_DURATION = props.items.length * 5
    const SLOW_DURATION = props.items.length * 15;
    const [duration, setDuration] = useState(FAST_DURATION)
    const [mustFinish, setMustFinish] = useState(false)
    const [rerender, setRerender] = useState(false)

    const xTranslation = useMotionValue(0);
    const ref = useRef(null);

    

    useEffect(() => {

        let controls;
        const finalPosition = props.direction === "to-left" 
            ? -(props.items.length * 216)
            : 0

        const startPos = props.direction === "to-left"
            ? 0
            : -(props.items.length * 216)

        
        if (mustFinish) { 

            controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
                ease: "linear",
                duration: duration * (props.direction === "to-left" ? (1 - xTranslation.get() / finalPosition) : (xTranslation.get() / startPos)),
                onComplete: () => {
                    setMustFinish(false)
                    setRerender(!rerender)
                }
            })
        } else {
            controls = animate(xTranslation, [startPos, finalPosition], {
                ease: "linear",
                duration: duration,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0,
            });
        }

        return () => controls?.stop();
    }, [props.items, xTranslation, duration, rerender]);

    return (
        <motion.div
        className="absolute left-0 flex gap-4"
        ref={ref}
        style={{ x: xTranslation }}
        onHoverStart={() => {
            setMustFinish(true)
            setDuration(SLOW_DURATION)
        }}
        onHoverEnd={() => {
            setMustFinish(true)
            setDuration(FAST_DURATION)

        }}
        >
        {[...props.items, ...props.items, ...props.items, ...props.items, ...props.items, ...props.items].map((item, idx) => (
            <Card image={item.image} link={item.link} name={item.name} key={idx} />
        ))}
        </motion.div>
    );
}
