import type { Slide } from "../presentation";
import { LightRays } from "@/components/ui/light-rays";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import { motion, type Variants } from "framer-motion";
import { useMemo, useState } from "react";
import o1Logo from "../assets/o1-logo.webp";
import gpt5Logo from "../assets/GPT-5-logo.webp";
import claudeLogo from "../assets/claude-4-5.svg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type CardConfig = {
    id: string;
    src: string;
    alt: string;
    additionalClasses?: string;
};

const cardConfigs: CardConfig[] = [
    {
        id: "gpt5",
        src: gpt5Logo,
        alt: "GPT-5 logo",
    },
    {
        id: "o1",
        src: o1Logo,
        alt: "Generative AI landscape graphic",
    },
    {
        id: "claude45",
        src: claudeLogo,
        alt: "Claude 4.5 Sonnet logo",
        additionalClasses: "bg-[#cc7b5e]!",
    },
];

const cardStates = [
    {
        className: "translate-x-6 -translate-y-6 border-border/40 bg-background shadow-2xl",
        animate: { rotate: 6, x: 24, y: -24, scale: 1 },
        zIndex: 30,
    },
    {
        className: "-translate-x-4 translate-y-4 border-border/60 bg-muted/40 shadow-xl",
        animate: { rotate: -8, x: -18, y: 12, scale: 0.96 },
        zIndex: 20,
    },
    {
        className: "translate-x-4 translate-y-12 border-border/70 bg-muted/30 shadow-lg",
        animate: { rotate: 11, x: 18, y: 30, scale: 0.92 },
        zIndex: 10,
    },
];

const CardStack = () => {
    const [topIndex, setTopIndex] = useState(1);

    const orderedCards = useMemo(() => {
        const length = cardConfigs.length;
        return cardConfigs.map((card, index) => ({
            card,
            position: (index - topIndex + length) % length,
        }));
    }, [topIndex]);

    const showNextCard = () => {
        setTopIndex((prev) => (prev + 1) % cardConfigs.length);
    };

    const showPreviousCard = () => {
        setTopIndex((prev) => (prev - 1 + cardConfigs.length) % cardConfigs.length);
    };

    const baseCardClass =
        "absolute inset-0 flex items-center justify-center rounded-3xl overflow-hidden border transition-all duration-500 ease-out will-change-transform";

    return (
        <div className="flex flex-col items-center gap-6">
            <div className="relative h-80 aspect-square">
                {orderedCards.map(({ card, position }) => {
                    const state = cardStates[position] ?? cardStates[cardStates.length - 1];
                    const cardClass = `${baseCardClass} ${state.className} ${card.additionalClasses || ""}`;

                    return (
                        <motion.div
                            key={card.id}
                            className={cardClass}
                            style={{ zIndex: state.zIndex }}
                            animate={state.animate}
                            transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                        >
                            <img src={card.src} alt={card.alt} className="h-full w-full object-contain" />
                        </motion.div>
                    );
                })}
            </div>

            <div className="flex items-center gap-3 mt-16">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={showPreviousCard}
                    aria-label="Show previous card"
                >
                    <ChevronLeft className="size-4" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={showNextCard}
                    aria-label="Show next card"
                >
                    <ChevronRight className="size-4" />
                </Button>
            </div>
        </div>
    );
};

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

export const stateOfGenerativeAISlide: Slide = {
    id: "state-of-generative-ai",
    displayName: "State of Generative AI",
    notes: `
When I first started preparing this talk, I was watching OpenAI’s DevDay livestream, and it made me reflect on how much has changed over the past year. I remember that last year’s DevDay was a real turning point for me - it was the first time I truly felt that AI models, like the o1 family, had become better generalist developers than I was. Not because they were perfect, but because they could handle almost any random task in any random repo and language - way better than I could. I’m experienced, sure - strong in React, JavaScript, and backend stuff like Node - but drop me into something like .NET or Rust, and I’d probably be lost. These new models, though? They just get it done.

And the thing is, over the past year, the models have only gotten better. With things like Claude 4.5 and the newer GPT-5 family, the capabilities are just wild. So, the problem isn’t really the models anymore. They’re not the bottleneck. But a lot of people still struggle to get good results from them, and that disconnect - between what the model can do and what people actually get from it - often comes down to one thing: context. Understanding and crafting good context - or what I now think of as “context engineering” - is absolutely crucial. If there’s one takeaway I hope sticks with you, it’s that mastering context is the key to unlocking the full potential of these tools.
    `,
    content: (
        <div className="h-full relative overflow-hidden rounded-lg">
            <motion.div
                className="h-full grid items-center gap-12 p-6 md:px-20 md:py-12 md:grid-cols-[1.2fr_1fr]"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="space-y-10 text-left z-20" variants={itemVariants}>
                    <motion.h2 className="text-5xl font-bold tracking-tight" variants={itemVariants}>
                        Generative AI Today
                    </motion.h2>

                    <motion.ul
                        className="space-y-6 text-xl leading-relaxed text-foreground/90"
                        variants={itemVariants}
                    >
                        <motion.li className="flex items-center gap-3" variants={itemVariants}>
                            <span className="size-2 rounded-full bg-primary/50" />
                            <span>Models have been good enough for a while</span>
                        </motion.li>
                        <motion.li className="flex items-center gap-3" variants={itemVariants}>
                            <span className="size-2 rounded-full bg-primary/50" />
                            <span>Tools are constantly catching up</span>
                        </motion.li>
                        <motion.li className="flex items-center gap-3" variants={itemVariants}>
                            <span className="size-2 rounded-full bg-primary/50" />
                            <span>Model performance is heavily tied to context engineering</span>
                        </motion.li>
                    </motion.ul>
                </motion.div>

                <motion.div variants={itemVariants} className="relative z-10 w-full flex justify-center">
                    <CardStack />
                </motion.div>
            </motion.div>

            <LightRays />
            <StripedPattern className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] opacity-15" />
            <div className="absolute inset-0 bg-gradient-to-br from-background/0 via-background/40 to-background/60 pointer-events-none" />
        </div>
    ),
};


