import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Play, Pause, ChevronLeft, ChevronRight, Grid, Maximize, Minimize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate, useLocation } from "react-router-dom";

export type Slide = {
    id: string;
    displayName?: string;
    notes?: string;
    content: React.ReactNode;
}

interface DeckProps {
    slides: Slide[];
    autoAdvanceMs?: number;
}

/**
 * React Presentation Starter
 * - Arrow keys / click nav
 * - Progress bar & slide numbers
 * - Overview grid (press G or click grid icon)
 * - Fullscreen mode (press F or click fullscreen icon)
 * - Light/Dark theme toggle
 * - Notes mode (press N) — shows speaker notes overlay (hidden by default)
 * - Print to PDF with Cmd/Ctrl+P (print styles included)
 * - Responsive, touch-friendly
 *
 * Drop this into any React/Next.js project using Tailwind + shadcn/ui + framer-motion.
 */

const variants = {
    enter: (direction: number) => ({ x: direction > 0 ? 40 : -40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({ x: direction < 0 ? 40 : -40, opacity: 0 }),
};

function useKey(handler: (e: KeyboardEvent) => void) {
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => handler(e);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [handler]);
}

function Progress({ index, total }: { index: number; total: number }) {
    const pct = ((index + 1) / total) * 100;
    return (
        <div className="fixed left-0 right-0 bottom-0 h-1 bg-black/10 dark:bg-white/10 print:hidden">
            <div className="h-full" style={{ width: pct + "%" }} />
        </div>
    );
}

interface ToolbarProps {
    dark: boolean;
    setDark: React.Dispatch<React.SetStateAction<boolean>>;
    grid: boolean;
    setGrid: React.Dispatch<React.SetStateAction<boolean>>;
    prev: () => void;
    next: () => void;
    playing: boolean;
    setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
    isFullscreen: boolean;
    toggleFullscreen: () => void;
}

function Toolbar({ dark, setDark, setGrid, prev, next, playing, setPlaying, isFullscreen, toggleFullscreen }: ToolbarProps) {
    return (
        <div className="fixed z-50 left-1/2 -translate-x-1/2 bottom-6 print:hidden">
            <Card className="backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-black/40 rounded-2xl shadow-lg py-3">
                <CardContent className="flex items-center gap-2 px-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={prev} aria-label="Previous slide">
                        <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setPlaying((p) => !p)} aria-label="Autoplay">
                        {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={next} aria-label="Next slide">
                        <ChevronRight className="w-4 h-4" />
                    </Button>
                    <div className="mx-2 w-px self-stretch bg-black/10 dark:bg-white/10" />
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setGrid((g) => !g)} aria-label="Overview grid (G)">
                        <Grid className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={toggleFullscreen} aria-label="Fullscreen (F)">
                        {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setDark((d) => !d)} aria-label="Toggle theme">
                        {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}

export const SlideDeck = ({ slides, autoAdvanceMs = (0.2 * 60 * 1000) }: DeckProps) => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [dark, setDark] = useState(false);
    const [showNotes, setShowNotes] = useState(false);
    const [grid, setGrid] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const location = useLocation();

    const total = slides.length;

    const toggleFullscreen = async () => {
        if (!document.fullscreenElement) {
            try {
                await containerRef.current?.requestFullscreen();
            } catch (err) {
                console.error("Failed to enter fullscreen:", err);
            }
        } else {
            await document.exitFullscreen();
        }
    };

    const go = (nextIdx: number) => {
        const clamped = Math.max(0, Math.min(total - 1, nextIdx));
        setDirection(nextIdx > index ? 1 : -1);
        setIndex(clamped);
        const id = slides[clamped]?.id;
        if (id) {
            navigate(`${location.pathname}?slide=${id}`, { replace: true });
        }
    };
    const next = () => go(index + 1);
    const prev = () => go(index - 1);

    // Query parameter deep-linking
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const slideId = params.get('slide');
        if (!slideId) return;
        const i = slides.findIndex((s) => s.id === slideId);
        if (i >= 0) setIndex(i);
    }, [slides, location.search]);

    // Keyboard shortcuts
    useKey((e: KeyboardEvent) => {
        if (e.key === "ArrowRight" || e.key === "PageDown" || e.key.toLowerCase() === "l") next();
        if (e.key === "ArrowLeft" || e.key === "PageUp" || e.key.toLowerCase() === "h") prev();
        if (e.key.toLowerCase() === "g") setGrid((g: boolean) => !g);
        if (e.key.toLowerCase() === "n") setShowNotes((s: boolean) => !s);
        if (e.key.toLowerCase() === "d") setDark((d: boolean) => !d);
        if (e.key.toLowerCase() === "f") toggleFullscreen();
    });

    // Touch navigation
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        let startX = 0;
        const onStart = (e: TouchEvent) => (startX = e.touches[0].clientX);
        const onEnd = (e: TouchEvent) => {
            const dx = e.changedTouches[0].clientX - startX;
            if (dx > 50) prev();
            if (dx < -50) next();
        };
        el.addEventListener("touchstart", onStart);
        el.addEventListener("touchend", onEnd);
        return () => {
            el.removeEventListener("touchstart", onStart);
            el.removeEventListener("touchend", onEnd);
        };
    }, [index, prev, next]);

    // Autoplay
    useEffect(() => {
        if (!playing || !autoAdvanceMs) return;
        const id = setInterval(() => {
            if (index >= total - 1) return;
            next();
        }, autoAdvanceMs);
        return () => clearInterval(id);
    }, [playing, index, total, autoAdvanceMs]);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
    }, [dark]);

    // Listen to fullscreen changes
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener("fullscreenchange", handleFullscreenChange);
        return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
    }, []);

    const gridView = (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
            {slides.map((s, i) => (
                <button
                    key={s.id || i}
                    onClick={() => {
                        setGrid(false);
                        go(i);
                    }}
                    className={`aspect-[4/3] rounded-xl overflow-hidden border hover:shadow ${i === index ? "ring-2 ring-foreground" : ""
                        }`}
                >
                    <div className="w-full h-full p-4 text-left">
                        <div className="text-xs opacity-60 mb-2">{i + 1}</div>
                        <div className="text-sm line-clamp-3">
                            {s.displayName || s.id}
                        </div>
                    </div>
                </button>
            ))}
        </div>
    );

    return (
        <div ref={containerRef} className={`${isFullscreen ? 'h-screen' : 'h-full'} bg-background text-foreground selection:bg-primary/20 print:bg-white`}>
            <style>{`
        @page { size: A4 landscape; margin: 12mm; }
        @media print {
          .print:hidden { display: none !important; }
          .print:show { display: block !important; }
          .slide { break-inside: avoid; page-break-inside: avoid; height: auto !important; }
        }
      `}</style>

            <div className="h-full flex items-center justify-center p-4">
                <div className="relative w-full max-w-7xl">
                    <div className="aspect-[4/3] slide rounded-3xl border shadow-sm overflow-hidden grid place-items-stretch">
                        <AnimatePresence custom={direction} mode="popLayout">
                            {!grid ? (
                                <motion.div
                                    key={slides[index]?.id || index}
                                    className="p-8 md:p-12"
                                    custom={direction}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ type: "spring", stiffness: 200, damping: 30, mass: 0.6 }}
                                    variants={variants}
                                    onClick={next}
                                >
                                    {slides[index]?.content}
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="grid"
                                    className="p-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    {gridView}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* HUD */}
                    <div className="absolute top-3 right-4 text-sm opacity-70 print:hidden">
                        {index + 1} / {total}
                    </div>
                    <Toolbar
                        dark={dark}
                        setDark={setDark}
                        grid={grid}
                        setGrid={setGrid}
                        prev={prev}
                        next={next}
                        playing={playing}
                        setPlaying={setPlaying}
                        isFullscreen={isFullscreen}
                        toggleFullscreen={toggleFullscreen}
                    />
                    <Progress index={index} total={total} />

                    {/* Speaker notes overlay */}
                    {showNotes && !grid && (
                        <div className="fixed inset-0 bg-black/70 text-white p-6 print:hidden">
                            <div className="max-w-4xl mx-auto">
                                <h4 className="text-xl font-semibold mb-2">Notes</h4>
                                <p className="opacity-90 whitespace-pre-wrap">{slides[index]?.notes || "—"}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

/**
 * Usage example (in Next.js):
 *
 * export default function TalkPage() {
 *   const slides = [
 *     { id: 'intro', displayName: 'Introduction', content: (<div>Hi 👋</div>), notes: 'Smile.' },
 *     { id: 'demo', content: (<YourLiveDemo />) },
 *     { id: 'qna', displayName: 'Questions & Answers', content: (<h2>Q&A</h2>) },
 *   ];
 *   return <Deck slides={slides} autoAdvanceMs={0} />
 * }
 */

