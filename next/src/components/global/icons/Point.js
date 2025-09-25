'use client';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Point = () => {
    const pointRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: pointRef,
        offset: ["start 55%", "end 15%"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 1]);

    return (
        <motion.div ref={pointRef} style={{ scale }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="12" fill="#E69138" stroke="#F1F7F6" strokeWidth="8" />
            </svg>
        </motion.div>
    );
};