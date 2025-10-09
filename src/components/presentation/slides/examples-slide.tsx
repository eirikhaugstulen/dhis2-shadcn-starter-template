import type { Slide } from "../presentation";
import { LightRays } from "@/components/ui/light-rays";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import { motion, type Variants } from "framer-motion";
import addExamplesVideo from "../assets/add-examples-to-llm-demo.mp4";

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

export const examplesSlide: Slide = {
    id: "examples",
    displayName: "Show Examples",
    notes: `
Here’s the first big tip I always share when working with LLMs: *show, don’t tell*. Just like it’s easier to understand a concept when there’s a picture instead of a long explanation, the same applies to large language models - especially when you're coding. If you try to describe everything with words - your architecture, your preferred styles, how you want something implemented - it can be exhausting and often unclear. But if you just show the model an actual example, it can pick up on the patterns way faster and much more reliably.

These models are pattern recognition machines. So if there's a file in your project that does something in a style you like, just point the model to it. Even better, tag it directly in the context and tell the model what you want to extract. And if you’re working with something like DHIS2 and don’t have a solid example in your own codebase - steal one! Everything in the core apps is open source. Find a pattern you like from an official repo, plug it into the prompt, and let the agent work from there. You don’t need to reinvent the wheel - just help the AI see it.
    `,
    content: (
        <div className="h-full relative overflow-hidden rounded-lg">
            <motion.div
                className="h-full grid items-center gap-12 p-6 md:px-12 md:grid-cols-[2fr_4fr]"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="text-left h-full flex flex-col justify-center" variants={itemVariants}>
                    <motion.p
                        className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-4"
                        variants={itemVariants}
                    >
                        Tip #1
                    </motion.p>
                    <motion.h2
                        className="text-5xl font-bold mb-10"
                        variants={itemVariants}
                    >
                        Show, don't tell
                    </motion.h2>

                    <motion.ul
                        className="space-y-6 text-xl leading-relaxed text-foreground/90"
                        variants={itemVariants}
                    >
                        <motion.li className="flex items-center gap-3" variants={itemVariants}>
                            <span className="size-2 rounded-full bg-primary/50" />
                            <span>Guide the model with examples</span>
                        </motion.li>
                        <motion.li className="flex items-center gap-3" variants={itemVariants}>
                            <span className="size-2 rounded-full bg-primary/50" />
                            <span>LLMs excel at pattern recognition</span>
                        </motion.li>
                        <motion.li className="flex items-center gap-3" variants={itemVariants}>
                            <span className="size-2 rounded-full bg-primary/50" />
                            <span>Tell it what to extract</span>
                        </motion.li>
                    </motion.ul>
                </motion.div>

                <motion.div variants={itemVariants} className="flex justify-center md:justify-end z-20">
                    <div className="relative w-full max-w-2xl rounded-3xl border border-border/60 bg-background/40 shadow-xl overflow-hidden">
                        <video
                            src={addExamplesVideo}
                            autoPlay
                            loop
                            muted
                            playsInline
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


