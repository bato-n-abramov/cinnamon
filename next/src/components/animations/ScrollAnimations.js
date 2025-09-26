"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";




export const FadeIn = ({ children }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 75%", "end 15%"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    // const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);
    const width = "100%";

    return (
        <motion.div ref={ref} style={{ opacity, width }}>
            {children}
        </motion.div>
    );
};