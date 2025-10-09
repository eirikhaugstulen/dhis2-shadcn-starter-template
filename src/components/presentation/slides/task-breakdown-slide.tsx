import type { Slide } from "../presentation";
import { LightRays } from "@/components/ui/light-rays";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import { motion, type Variants } from "framer-motion";
import { DashboardBuildDemo } from "@/components/page-builder-demo";

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

export const taskBreakdownSlide: Slide = {
    id: "task-breakdown",
    displayName: "Break It Down",
    notes: `
The second big tip is *don’t overdo it*. A common mistake I see is assuming that language models are these endless, tireless machines that can just spit out massive amounts of perfect code in one go. But in practice, the longer the output you expect, the worse the quality tends to be. LLMs actually respond much better when you follow the same best practices we already use in software development - breaking tasks down, working in smaller units, doing code reviews, and building incrementally.

So instead of asking the model to generate an entire complex dashboard at once, I start small. I might begin with just the page shell: the routing, layout, maybe a button or two. Then I move on to one component at a time - say, the top-left widget - making sure it’s styled and functional to a production-ready standard. Once that’s done, I move to the next widget, using the previous one as a reference. Only after I’ve laid that foundation do I ask the model to generate multiple smaller components at once, using the established patterns. Basically, treat the AI like a junior teammate: guide it step-by-step until it can run with the task.
    `,
    content: (
        <div className="h-full relative overflow-hidden rounded-lg">
            <motion.div
                className="h-full flex flex-col gap-4 p-6 md:px-12 md:py-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    className="z-20 w-full max-w-3xl mx-auto text-center md:text-left"
                    variants={itemVariants}
                >
                    <motion.p
                        className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-4"
                        variants={itemVariants}
                    >
                        Tip #2
                    </motion.p>
                    <motion.h2
                        className="text-4xl font-bold"
                        variants={itemVariants}
                    >
                        Don't overdo it
                    </motion.h2>
                    <motion.ul
                        className="mt-4 space-y-2 text-lg leading-relaxed text-foreground"
                        variants={itemVariants}
                    >
                        <motion.li className="flex items-center gap-3" variants={itemVariants}>
                            <span className="size-2 rounded-full bg-primary/50" />
                            <span>Break larger features into smaller tasks</span>
                        </motion.li>
                        <motion.li className="flex items-center gap-3" variants={itemVariants}>
                            <span className="size-2 rounded-full bg-primary/50" />
                            <span>Follow development best practices</span>
                        </motion.li>
                    </motion.ul>
                </motion.div>

                <motion.div
                    className="flex-1 flex justify-center"
                    variants={itemVariants}
                >
                    <DashboardBuildDemo />
                </motion.div>
            </motion.div>

            <LightRays />
            <StripedPattern className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] opacity-15" />
            <div className="absolute inset-0 bg-gradient-to-br from-background/0 via-background/40 to-background/60 pointer-events-none" />
        </div>
    ),
};


