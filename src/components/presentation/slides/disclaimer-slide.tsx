import type { Slide } from "../presentation";
import { LightRays } from "@/components/ui/light-rays";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import { FocusVisualization } from "@/components/focus-visualization";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.4, 0.25, 1] as const,
            staggerChildren: 0.12,
            when: "beforeChildren",
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.4, 0.25, 1] as const,
        },
    },
};

export const disclaimerSlide: Slide = {
    id: "disclaimer",
    displayName: "Disclaimer",
    notes: "Set expectations that opinions are personal.",
    content: (
        <div className="h-full relative overflow-hidden rounded-lg">
            <motion.div
                className="h-full flex flex-col justify-center items-center gap-20 px-6 py-10 md:px-20 md:py-12"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="w-full max-w-3xl space-y-8 text-left" variants={itemVariants}>
                    <motion.h2 className="text-5xl font-bold tracking-tight" variants={itemVariants}>
                        Disclaimer
                    </motion.h2>

                    <motion.ul
                        className="space-y-6 text-xl leading-relaxed text-foreground/90"
                        variants={itemVariants}
                    >
                        <motion.li className="flex items-center gap-4" variants={itemVariants}>
                            <span className="size-2 rounded-full bg-primary/50" />
                            <span>These are my personal opinions.</span>
                        </motion.li>
                        <motion.li className="flex items-center gap-4" variants={itemVariants}>
                            <span className="size-2 rounded-full bg-primary/50" />
                            <span>We're in a bubble.</span>
                        </motion.li>
                        <motion.li className="flex items-center gap-4" variants={itemVariants}>
                            <span className="size-2 rounded-full bg-primary/50" />
                            <span>Focus on AI as a developer tool.</span>
                        </motion.li>
                    </motion.ul>
                </motion.div>

                <motion.div variants={itemVariants} className="relative w-full max-w-3xl z-10">
                    <div className="relative w-full rounded-2xl bg-background/60 border-[0.5px] border-border p-4 shadow backdrop-blur">
                        <FocusVisualization />
                    </div>
                </motion.div>
            </motion.div>

            <LightRays />
            <StripedPattern className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] opacity-15" />
        </div>
    ),
};


