import type { Slide } from "../presentation";
import { LightRays } from "@/components/ui/light-rays";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import { motion, type Variants } from "framer-motion";
import { badContextConversation, goodContextConversation, ChatDemo } from "@/components/ai-conversations";

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

export const chatDemoSlide: Slide = {
    id: "chat-demo",
    displayName: "Chat Demo",
    notes: `
Tip number three is: *if it walks like a duck, talks like a duck…* well, you know the rest. But with language models, it’s not that simple. Two tools might look identical - same model, same question, same interface - but under the hood, they can behave *very* differently. Why? Because context handling matters more than the model itself. I demonstrated this with a side-by-side comparison: both instances used Claude 4.5 Sonnet and were asked the exact same question - “How does navigation work in this app?” One gave a decent, surface-level answer. The other went way deeper.

The difference came down to how the tools packaged context. One tool just read a couple of files. The other started by reading project memories, traced deeper through the layout files, picked up on DHIS2-specific logic, and even referenced custom syncing code used in our shell. Same model, same question - but wildly different results because one tool had access to a richer, more relevant context. That’s why I’m not just recommending powerful models - I’m recommending tools that *know how* to talk to them properly. Context isn’t just part of the solution - it *is* the solution.
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
                        Tip #3
                    </motion.p>
                    <motion.h2
                        className="text-4xl font-bold"
                        variants={itemVariants}
                    >
                        If it walks like a duck...
                    </motion.h2>
                    <motion.ul
                        className="mt-4 space-y-2 text-lg leading-relaxed text-foreground"
                        variants={itemVariants}
                    >
                        <motion.li className="flex items-center gap-3" variants={itemVariants}>
                            <span className="size-2 rounded-full bg-primary/50" />
                            <span>Context matters more than the model itself</span>
                        </motion.li>
                    </motion.ul>
                </motion.div>

                <motion.div
                    className="flex-1 z-10 flex gap-2"
                    variants={itemVariants}
                >
                    <div className="w-1/2 max-h-[600px]">
                        <ChatDemo
                            className="h-full"
                            conversation={badContextConversation}
                        />
                    </div>
                    <div className="w-1/2 max-h-[600px]">
                        <ChatDemo
                            className="h-full"
                            conversation={goodContextConversation}
                        />
                    </div>
                </motion.div>
            </motion.div>

            <LightRays />
            <StripedPattern className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] opacity-15" />
            <div className="absolute inset-0 bg-gradient-to-br from-background/0 via-background/40 to-background/60 pointer-events-none" />
        </div>
    ),
};

