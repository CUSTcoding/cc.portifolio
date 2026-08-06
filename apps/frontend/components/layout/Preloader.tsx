'use client';

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { slideUp, opacity } from "@/components/layout/animations";


const words = [ "Olá","Ola", "Hello","Hola", "你好"];


export default function Preloader() {

    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({
        width: 0,
        height: 0
    });

    useEffect(() => {
        const resize = () => {
            setDimension({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        resize();
        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("resize", resize);
        };

    }, []);

    useEffect(() => {
        if (index === words.length - 1) return;
        const timeout = setTimeout(() => {
            setIndex(prev => prev + 1);
        }, index === 0 ? 100 : 500);
        return () => clearTimeout(timeout);
    }, [index]);

    const initialPath = `
        M 0 ${dimension.height}
        L ${dimension.width} ${dimension.height}
        Q ${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}
        L 0 0
    `;

    const targetPath = `
        M 0 ${dimension.height}
        L ${dimension.width} ${dimension.height}
        Q ${dimension.width / 2} ${dimension.height} 0 ${dimension.height}
        L 0 0
    `;

    const curve: Variants = {

        initial: {
            d: initialPath,
            transition: {
                duration: 0.7,
                ease: [0.76, 0, 0.24, 1]
            }
        },

        exit: {
            d: targetPath,
            transition: {
                duration: 0.7,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.3
            }
        }
    };

    return (

        <motion.div
            className=" preloader z-[99]  bg-[#141516] flex items-center justify-center overflow-hidden fixed top-0 left-0 w-full h-[100vh]" 
            variants={slideUp} 
            initial="initial" 
            exit="exit"
        >
            {
                dimension.width > 0 &&
                <>
                    <motion.p
                        className="text-white text-5xl font-medium flex items-center gap-3 absolute z-1"
                        variants={opacity}
                        initial="initial"
                        animate="enter"

                    >
                        <span className=" w-2.5 h-2.5 bg-white rounded-full mr-2.5 p-3"></span>
                        {words[index]}
                    </motion.p>
                    <svg
                        className="absolute top-0 left-0 w-full h-full"
                        viewBox={`0 0 ${dimension.width} ${dimension.height}`}
                        preserveAspectRatio="none"
                    >
                        <motion.path
                            fill="#141516"
                            variants={curve}
                            initial="initial"
                            exit="exit"
                        />
                    </svg>
                </>
            }
        </motion.div>
    );
}