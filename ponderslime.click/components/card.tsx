"use client"
import Image from "next/image";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

import { AnimatePresence, motion } from "motion/react"

interface CardProps {
    image: string;
    link: string
}

const Card: React.FC<CardProps> = ({ image, link }) => {
    const [showOverlay, setShowOverlay] = useState(false)

    return (
        <a href={link} className="relative overflow-hidden h-[200px] min-w-[200px] bg-slate-400 rounded-xl flex justify-center items-center">
            <motion.div onHoverStart={() => setShowOverlay(true)} onHoverEnd={() => setShowOverlay(false)}>
                <AnimatePresence>
                    {showOverlay && (
                        <motion.div className="absolute inset-0 z-10 flex justify-center items-center"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                        >
                            <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full"/>
                            <motion.h1 className="bg-white font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center gap-[0.5ch] hover:opacity-75 text-red-700"
                                initial={{y: 10}}
                                animate={{y: 0}}
                                exit={{y: 10}}
                            >
                                <span>Explore Now</span>
                                <FontAwesomeIcon icon={faCircleArrowRight} className="h-4 w-4"/>
                            </motion.h1>
                        </motion.div>
                    )}
                </AnimatePresence>
                <Image src={image} alt={image} fill style={{objectFit: 'cover'}} />
            </motion.div>
        </a>
    )
}

export default Card