"use client"
import Image from "next/image";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

import { AnimatePresence, motion } from "motion/react"
import Link from "next/link";

interface CardProps {
    image: string;
    link: string;
    name: string;
}

const Card: React.FC<CardProps> = ({ image, link, name }) => {
    const [showOverlay, setShowOverlay] = useState(false)

    return (
        <Link href={link} className="relative overflow-hidden h-[200px] min-w-[200px] bg-slate-400 rounded-xl flex justify-center items-center">
            <motion.div onHoverStart={() => setShowOverlay(true)} onHoverEnd={() => setShowOverlay(false)}>
                <AnimatePresence>
                    {showOverlay && (
                        <motion.div className="absolute inset-0 z-10 flex justify-center items-center"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                        >
                            <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full text-center justify-center items-center" />
                            <motion.h1 className="font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center flex-col text-center gap-[0.5ch] hover:opacity-75 text-red-700"
                                initial={{y: 10}}
                                animate={{y: 0}}
                                exit={{y: 10}}
                            >   
                                <div className="text-xl font-bold">
                                    {name}
                                </div>
                                <div className="bg-white rounded-full px-3 py-2">
                                    <span >Explore Now</span>
                                    <FontAwesomeIcon icon={faCircleArrowRight} className="h-4 w-4"/>
                                </div>
                            </motion.h1>
                        </motion.div>
                    )}
                </AnimatePresence>
                <Image src={image} alt={image} fill style={{objectFit: 'cover'}} />
            </motion.div>
        </Link>
    )
}

export default Card