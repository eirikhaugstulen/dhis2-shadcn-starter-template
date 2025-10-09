import type { Slide } from "../presentation";
import { LightRays } from "@/components/ui/light-rays";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import { Button } from "@/components/ui/button";
import { motion, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { type ComponentType, useMemo, useState } from "react";
import { ContextAfter } from "../assets/context-after";
import { ContextBefore } from "../assets/context-before";

type CardConfig = {
    id: string;
    Component: ComponentType;
    label: string;
};

type CardState = {
    className: string;
    animate: Record<string, number>;
    zIndex: number;
};

const cardConfigs: CardConfig[] = [
    {
        id: "context-before",
        Component: ContextBefore,
        label: "Context window before context engineering",
    },
    {
        id: "context-after",
        Component: ContextAfter,
        label: "Context window after context engineering",
    },
];

const cardStates: CardState[] = [
    {
        className: "translate-x-3 -translate-y-4 border-border/40 bg-background shadow-2xl",
        animate: { rotate: 4, x: 12, y: -16, scale: 1 },
        zIndex: 30,
    },
    {
        className: "-translate-x-2 translate-y-6 border-border/70 bg-muted/40 shadow-lg",
        animate: { rotate: -6, x: -10, y: 20, scale: 0.95 },
        zIndex: 20,
    },
];

const CardStack = () => {
    const [topIndex, setTopIndex] = useState(0);

    const orderedCards = useMemo(() => {
        const length = cardConfigs.length;
        return cardConfigs.map((card, index) => ({
            card,
            position: (index - topIndex + length) % length,
        }));
    }, [topIndex]);

    const baseCardClass =
        "absolute inset-0 flex items-center justify-center rounded-3xl overflow-hidden border transition-all duration-500 ease-out will-change-transform";

    const showNextCard = () => {
        setTopIndex((prev) => (prev + 1) % cardConfigs.length);
    };

    const showPreviousCard = () => {
        setTopIndex((prev) => (prev - 1 + cardConfigs.length) % cardConfigs.length);
    };

    return (
        <div className="flex w-full max-w-[17rem] flex-col items-center gap-4">
            <div className="relative w-full aspect-[463/741]">
                {orderedCards.map(({ card, position }) => {
                    const state = cardStates[position] ?? cardStates[cardStates.length - 1];
                    const { Component } = card;

                    return (
                        <motion.div
                            key={card.id}
                            className={`${baseCardClass} ${state.className}`}
                            style={{ zIndex: state.zIndex }}
                            animate={state.animate}
                            transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                            role="img"
                            aria-label={card.label}
                        >
                            <div className="h-full w-full [&_svg]:h-full [&_svg]:w-full">
                                <Component />
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <div className="mt-10 flex items-center gap-3">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={showPreviousCard}
                    aria-label="Show previous context slide"
                >
                    <ChevronLeft className="size-4" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={showNextCard}
                    aria-label="Show next context slide"
                >
                    <ChevronRight className="size-4" />
                </Button>
            </div>
        </div>
    );
};

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
    notes: `
Context is literally the model’s only window out of the locked room we talked about earlier - without it, it has no idea what’s going on in your codebase, your team, or your problem. Early on, context was super basic. You’d write a prompt at the top, and then fill the rest with chat history. If you wanted the AI to understand your code, you had to manually copy and paste whatever files or docs you thought were relevant. It was clunky and tedious, but it worked well enough to show promise.

These days, context has become much more structured. Most tools automatically inject things like system instructions, tool definitions, rules and memories, relevant files, and the conversation history - basically, all the building blocks the AI needs to do useful work. But here’s the catch: there’s a sweet spot. If you give the model too little, it won’t understand the task. If you cram in too much, performance actually gets worse - it’s like telling a rambling story with no clear point. So crafting good context is all about balance: just enough for the AI to follow the thread, but not so much that it gets lost in the noise.
    `,
    content: (
        <div className="h-full relative rounded-lg">
            <motion.div
                className="h-full grid items-stretch justify-center gap-12 p-6 md:px-24 md:grid-cols-[1fr_2fr]"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants} className="flex h-full items-center justify-center md:justify-start z-20">
                    <CardStack />
                </motion.div>

                <motion.div className="space-y-10 text-left z-20 h-full flex flex-col items-center justify-center md:items-start" variants={itemVariants}>
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

