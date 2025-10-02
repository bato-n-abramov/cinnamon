"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

export const FadeIn = ({ children }) => {
    const ref = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(max-width: 768px)");
        const apply = () => setIsMobile(mq.matches);
        apply();
        mq.addEventListener("change", apply);
        return () => mq.removeEventListener("change", apply);
    }, []);

    const offset = useMemo(
        () => (isMobile ? ["start 95%", "end 25%"] : ["start 75%", "end 15%"]),
        [isMobile]
    );

    const { scrollYProgress } = useScroll({ target: ref, offset });

    const opacity = useTransform(
        scrollYProgress,
        isMobile ? [0, 0.25] : [0, 0.5],
        [0, 1]
    );

    return (
        <motion.div ref={ref} style={{ opacity, width: "100%" }}>
            {children}
        </motion.div>
    );
};
