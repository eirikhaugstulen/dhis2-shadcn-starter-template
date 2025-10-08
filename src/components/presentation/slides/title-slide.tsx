import type { Slide } from "../presentation";
import { LightRays } from "@/components/ui/light-rays";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { Badge } from "@/components/ui/badge";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.4, 0.25, 1] as const,
        },
    },
};

const badgeVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.25, 0.4, 0.25, 1] as const,
        },
    },
};

const titleVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
            ease: [0.25, 0.4, 0.25, 1] as const,
        },
    },
};

export const titleSlide: Slide = {
    id: "title",
    displayName: "Introduction",
    content: (
        <div className="h-full grid place-items-center relative text-center overflow-hidden rounded-lg">
            <motion.div
                className="space-y-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Typing animation - Welcome in different languages */}
                <motion.div
                    className="flex justify-center"
                    variants={itemVariants}
                >
                    <TypingAnimation
                        words={[
                            "Welcome 👋",
                            "Bienvenue 👋",
                            "Karibu 👋",
                            "Bienvenido 👋",
                            "أهلاً وسهلاً 👋",
                            "Velkommen 👋",
                        ]}
                        typeSpeed={80}
                        deleteSpeed={40}
                        pauseDelay={1500}
                        loop
                        className="text-2xl font-medium text-muted-foreground"
                        cursorStyle="underscore"
                        blinkCursor={true}
                    />
                </motion.div>

                {/* Main title with gradient and shiny effect */}
                <motion.div
                    className="space-y-4"
                    variants={titleVariants}
                >
                    <h1 className="text-6xl font-bold tracking-tight">
                        <AnimatedShinyText shimmerWidth={150} className="inline-block text-foreground dark:text-foreground">
                            AI-assisted
                        </AnimatedShinyText>
                    </h1>
                    <h2 className="text-5xl font-bold tracking-tight bg-gradient-to-br from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                        Development
                    </h2>
                </motion.div>

                {/* Top badge */}
                <motion.div
                    className="flex justify-center"
                    variants={badgeVariants}
                >
                    <Badge variant="default" className="px-4 py-1.5 text-sm font-medium">
                        Developer Meetup
                    </Badge>
                </motion.div>

                {/* Subtitle with muted text */}
                <motion.div
                    className="flex flex-col items-center gap-3"
                    variants={itemVariants}
                >
                    <motion.div
                        className="h-px w-24 bg-gradient-to-r from-transparent via-border to-transparent"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    />
                    <p className="text-lg text-muted-foreground font-medium">
                        October 9th, 2025
                    </p>
                </motion.div>

                {/* Optional: Add a subtle "scroll down" or "presentation by" indicator */}
                <motion.div
                    className="pt-8"
                    variants={itemVariants}
                >
                    <motion.p
                        className="text-sm text-muted-foreground/80"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay: 1.2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            repeatDelay: 0.7,
                        }}
                    >
                        Press → to continue
                    </motion.p>
                </motion.div>
            </motion.div>

            {/* Background effects */}
            <LightRays />
            <StripedPattern className="[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] opacity-20" />

            {/* Additional subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/10 pointer-events-none" />
        </div>
    ),
};

