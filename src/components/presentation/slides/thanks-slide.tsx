import type { Slide } from "../presentation";
import { LightRays } from "@/components/ui/light-rays";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { Badge } from "@/components/ui/badge";
import { motion, type Variants } from "framer-motion";
import { GlobeIcon, MailIcon } from "lucide-react";

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

export const thanksSlide: Slide = {
    id: "thanks",
    displayName: "Thank You",
    notes: "Close with a call-to-action.",
    content: (
        <div className="h-full grid place-items-center relative text-center overflow-hidden rounded-lg">
            <motion.div
                className="space-y-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Main thank you heading */}
                <motion.div
                    className="space-y-4"
                    variants={titleVariants}
                >
                    <h1 className="text-7xl font-bold tracking-tight">
                        <AnimatedShinyText shimmerWidth={200} className="inline-block text-foreground dark:text-foreground">
                            Thank You! 🎉
                        </AnimatedShinyText>
                    </h1>
                    <p className="text-2xl text-muted-foreground font-medium">
                        For your time and attention
                    </p>
                </motion.div>

                {/* Divider */}
                <motion.div
                    className="flex justify-center"
                    variants={itemVariants}
                >
                    <motion.div
                        className="h-px w-32 bg-gradient-to-r from-transparent via-border to-transparent"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    />
                </motion.div>

                {/* Contact/Questions section */}
                <motion.div
                    className="space-y-4"
                    variants={itemVariants}
                >
                    <h3 className="text-xl font-semibold text-foreground/90">
                        Questions or Feedback?
                    </h3>

                    <div className="flex flex-wrap gap-3 justify-center">
                        <Badge variant="default" className="px-4 py-2 text-base font-medium">
                            <div className="flex items-center gap-2">
                                <MailIcon className="size-4 text-gray-600" />
                                <span>
                                    eirik@dhis2.org
                                </span>
                            </div>
                        </Badge>
                        <Badge variant="default" className="px-4 py-2 text-base font-medium">
                            <div className="flex items-center gap-2">
                                <GlobeIcon className="size-4 text-gray-600" />
                                <span>
                                    @eirikhaugstulen
                                </span>
                            </div>
                        </Badge>
                    </div>
                </motion.div>

                {/* Additional message */}
                <motion.div
                    className="pt-4"
                    variants={itemVariants}
                >
                    <p className="text-lg text-muted-foreground/70">
                        Reach out if I can help you with anything!
                    </p>
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

