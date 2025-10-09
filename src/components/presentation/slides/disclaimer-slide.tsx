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
    notes: `
Before diving into the world of AI, I wanted to start with a few disclaimers. First off, everything I’m sharing here is based on my own experiences and opinions - this field is still so new that there’s no official rulebook. What works for one person or team might not work for another, and that’s okay. I’m not here to sell you anything - just to walk you through the ups and downs I’ve encountered, and hopefully help you avoid some common pitfalls. There’s still a lot of uncertainty around where AI is headed, and anyone who claims to know for sure is probably overconfident. We might be in the middle of a bubble, or we might just be scratching the surface - nobody really knows.

The focus of this talk is really on how developers like us can practically use AI to enhance our workflows and development processes. It’s meant to be hands-on and grounded in real experience, not hype. That said, we’re also considering doing a separate session that goes into how to actually integrate generative AI into your own products. That would be a more product-focused follow-up, likely at a future meetup. So for now, let’s stay grounded, be curious, and explore how we can actually use these tools effectively in our day-to-day work.
    `,
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


