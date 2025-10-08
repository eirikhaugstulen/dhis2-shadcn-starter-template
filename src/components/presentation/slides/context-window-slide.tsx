import type { Slide } from "../presentation";
import { LightRays } from "@/components/ui/light-rays";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import { motion, type Variants } from "framer-motion";
import { ContextAfter } from "../assets/context-after";

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

export const contextWindowSlide: Slide = {
    id: "context-window",
    displayName: "Context Window",
    notes: "Explain what an LLM's context window is and its importance.",
    content: (
        <div className="h-full relative overflow-hidden rounded-lg">
            <motion.div
                className="h-full grid items-center justify-center gap-12 p-6 md:px-32 md:grid-cols-[2fr_3fr]"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants} className="flex justify-center md:justify-start z-20">
                    <div className="relative w-full h-96 rounded-3xl bg-muted/50 border border-border/60 shadow-xl">
                        <ContextAfter />
                    </div>
                </motion.div>

                <motion.div className="space-y-10 text-left h-full flex flex-col items-center justify-center pr-10" variants={itemVariants}>
                    <motion.h2
                        className="text-5xl font-bold tracking-tight"
                        variants={itemVariants}
                    >
                        Context
                    </motion.h2>

                    <motion.ul
                        className="space-y-6 text-xl leading-relaxed text-foreground/90"
                        variants={itemVariants}
                    >
                        <motion.li className="flex items-center gap-3" variants={itemVariants}>
                            <span className="size-2 rounded-full bg-primary/50" />
                            <span>The AI's lens to the world</span>
                        </motion.li>
                        <motion.li className="flex items-center gap-3" variants={itemVariants}>
                            <span className="size-2 rounded-full bg-primary/50" />
                            <span>System prompt, conversation history, tool calls, etc.</span>
                        </motion.li>
                        <motion.li className="flex items-center gap-3" variants={itemVariants}>
                            <span className="size-2 rounded-full bg-primary/50" />
                            <span>Measured in tokens, ranging from 8K to 1M+</span>
                        </motion.li>
                    </motion.ul>
                </motion.div>
            </motion.div>

            <LightRays />
            <StripedPattern className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] opacity-15" />
            <div className="absolute inset-0 bg-gradient-to-br from-background/0 via-background/40 to-background/60 pointer-events-none" />
        </div>
    ),
};

