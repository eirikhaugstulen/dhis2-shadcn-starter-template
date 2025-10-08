import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Card,
    CardContent
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Play,
    CheckCircle2,
    MessageSquare,
    Bot,
    Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Response } from "../ai-elements/response";
import { Badge } from "../ui/badge";

/**
 * DHIS2 Navigation Investigation – Animated Conversation Demo
 *
 * Tips:
 * - Click Play to watch the conversation animate in.
 * - Use Replay to reset.
 */

const bubbleVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
};

const stepVariants = {
    hidden: { opacity: 0, y: 6 },
    visible: { opacity: 1, y: 0 },
};

function ChatBubble({ role, children }: { role: "user" | "assistant"; children: any }) {
    const isUser = role === "user";
    return (
        <motion.div
            variants={bubbleVariants}
            className={`flex items-start gap-2 ${isUser ? "justify-end" : "justify-start"}`}
        >
            {!isUser && (
                <div className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Bot className="h-3.5 w-3.5" />
                </div>
            )}
            <div
                className={cn(
                    "max-w-[560px] rounded-lg px-3 py-2 shadow-sm text-sm leading-snug",
                    isUser ? "bg-primary text-primary-foreground ml-auto" : "bg-muted text-foreground",
                )}
            >
                {children}
            </div>
            {isUser && (
                <div className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                    <MessageSquare className="h-3.5 w-3.5" />
                </div>
            )}
        </motion.div>
    );
}

function StepPill({ icon, label }: { icon: any; label: string }) {
    return (
        <motion.div
            variants={stepVariants}
            className="inline-flex items-center gap-2 rounded-full bg-background border px-3 py-1 text-sm shadow-sm"
        >
            <span className="text-muted-foreground">{icon}</span>
            <span>{label}</span>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
        </motion.div>
    );
}

const CustomResponse = ({ children }: { children: any }) => {
    return (
        <Response
            components={{
                code: ({ children }) => (
                    <code className="bg-gray-200 rounded mx-0.5 px-1 text-xs!">
                        {children}
                    </code>
                ),
            }}
        >
            {children}
        </Response>
    );
};

export const ChatDemo = ({
    className,
    conversation,
}: {
    className?: string;
    conversation: any[];
}) => {
    const [cursor, setCursor] = useState(0); // which item is visible
    const [playing, setPlaying] = useState(false);
    const max = conversation.length;

    // Drive the animation timeline
    useEffect(() => {
        if (!playing) return;
        if (cursor >= max) return;

        const durations = conversation.map((c) =>
            c.type === "message" ? 1400 : c.type === "step" ? 450 : 2000
        );

        const id = setTimeout(() => {
            setCursor((c) => Math.min(max, c + 1));
        }, durations[cursor] ?? 1200);

        return () => clearTimeout(id);
    }, [cursor, playing, max]);

    const visibleItems = useMemo(() => conversation.slice(0, cursor), [cursor]);

    useEffect(() => {
        if (!playing) return;
        if (cursor >= max) {
            setPlaying(false);
        }
    }, [cursor, max, playing]);

    const handleStart = () => {
        setCursor(1);
        setPlaying(true);
    };

    return (
        <div
            className={cn(
                "w-full border border-slate-200 backdrop-blur bg-background rounded overflow-auto",
                className,
            )}
        >
            <div
                className={cn(
                    "mx-auto flex h-full w-full flex-col gap-3 p-5",
                )}
            >
                <div
                    className={cn(
                        "order-2 flex flex-col gap-2 sm:order-1 sm:flex-row sm:items-end sm:justify-end",
                    )}
                >
                    <div className="flex items-center justify-between w-full gap-1.5">
                        <Badge variant="outline">Model: Claude 4.5 Sonnet</Badge>
                        <Button variant="ghost" size="sm" onClick={handleStart}>
                            <Play className="h-4 w-4" />
                            <p className="sr-only">Start</p>
                        </Button>
                    </div>
                </div>

                <Card
                    className={cn(
                        "order-1 shadow-none border-0 pt-2",
                    )}
                >
                    <CardContent
                        className={cn(
                            "h-full space-y-3 pb-3 sm:pb-4",
                        )}
                    >
                        {/* Conversation stream */}
                        <AnimatePresence initial={false}>
                            {visibleItems.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                >
                                    {item.type === "message" && (
                                        <ChatBubble role={item.role as any}>
                                            <CustomResponse>{item.content}</CustomResponse>
                                        </ChatBubble>
                                    )}

                                    {item.type === "step" && (
                                        <div className="pl-10">
                                            <StepPill icon={item.icon} label={item.label!} />
                                        </div>
                                    )}

                                    {item.type === "summary" && (
                                        <div className="pl-0 sm:pl-10">
                                            <motion.div
                                                initial={{ opacity: 0, y: 8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.35 }}
                                                className="rounded-xl border bg-card p-3 sm:p-4 text-sm"
                                            >
                                                <div className="mb-1.5 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                                                    <Sparkles className="h-3.5 w-3.5" /> Findings
                                                </div>
                                                <CustomResponse>
                                                    {item.content}
                                                </CustomResponse>
                                            </motion.div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </CardContent>
                </Card>

            </div>
        </div>
    );
}
