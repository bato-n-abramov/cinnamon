'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const StoryLine = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 85%", "end 25%"]
    });

    const clipPathProgress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    return (
        <div ref={containerRef}>
            <svg
                width="48"
                height="1599"
                viewBox="0 0 48 1599"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <clipPath id="lineClip">
                        <motion.rect
                            x="0"
                            y="0"
                            width="48"
                            height={clipPathProgress}
                        />
                    </clipPath>
                </defs>

                <g clipPath="url(#lineClip)">
                    <path
                        d="M47 1599C47 1129.64 47 186.55 47 169.049C47 147.172 38.4264 119.328 15.3321 124.798C-6.31013 129.923 -1.78452 160.781 17.8455 161.59C46.7989 162.784 47 123.306 47 101.926V0"
                        stroke="url(#paint0_linear_1888_5177)"
                        strokeWidth="2"
                        strokeDasharray="8 8"
                    />
                </g>

                <defs>
                    <linearGradient id="paint0_linear_1888_5177" x1="24.0001" y1="-405.716" x2="24.0001" y2="1599" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#2AB9B2" />
                        <stop offset="1" stopColor="#00696E" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};