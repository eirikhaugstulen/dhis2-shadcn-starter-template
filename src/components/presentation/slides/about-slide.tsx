import type { Slide } from "../presentation";
import { LightRays } from "@/components/ui/light-rays";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import { motion, type Variants } from "framer-motion";
import portrait from "../assets/portrait.jpeg";

const containerVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.4, 0.25, 1] as const,
            when: "beforeChildren",
            staggerChildren: 0.12,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.4, 0.25, 1] as const,
        },
    },
};

export const aboutSlide: Slide = {
    id: "about",
    displayName: "About Me",
    notes: "Introduce yourself and highlight current roles.",
    content: (
        <div className="h-full relative overflow-hidden rounded-lg">
            <motion.div
                className="h-full grid items-center gap-12 p-6 md:px-32 md:grid-cols-[3fr_2fr]"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="space-y-10 text-left h-full pt-42 pl-10" variants={itemVariants}>
                    <motion.h2
                        className="text-5xl font-bold tracking-tight"
                        variants={itemVariants}
                    >
                        About me
                    </motion.h2>

                    <motion.ul
                        className="space-y-10 text-2xl leading-relaxed text-foreground/90"
                        variants={itemVariants}
                    >
                        <motion.li className="flex items-center gap-3" variants={itemVariants}>
                            <span className="size-2 rounded-full bg-primary/50" />
                            <span>Core developer @ DHIS2</span>
                        </motion.li>
                        <motion.li className="flex items-center gap-3" variants={itemVariants}>
                            <span className="size-2 rounded-full bg-primary/50" />
                            <span>Tracker &amp; Climate team</span>
                        </motion.li>
                        <motion.li className="flex items-center gap-3" variants={itemVariants}>
                            <span className="size-2 rounded-full bg-primary/50" />
                            <span>Head of R&amp;D @ Devotta</span>
                        </motion.li>
                    </motion.ul>
                </motion.div>

                <motion.div variants={itemVariants} className="flex justify-center md:justify-end z-20">
                    <div className="relative w-96 rounded-3xl grayscale overflow-hidden shadow-xl border border-border/60">
                        <img
                            src={portrait}
                            alt="Portrait"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-foreground/10" />
                    </div>
                </motion.div>
            </motion.div>

            <LightRays />
            <StripedPattern className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] opacity-15" />
            <div className="absolute inset-0 bg-gradient-to-br from-background/0 via-background/40 to-background/60 pointer-events-none" />
        </div>
    ),
};


