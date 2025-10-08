import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Empty, EmptyDescription, EmptyHeader, EmptyTitle } from "./ui/empty";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Folder, FolderPlus, RefreshCcw } from "lucide-react";

const steps = [
    { title: "" },
    { title: "Step 0 - Empty workspace" },
    { title: "Step 1 — Page shell" },
    { title: "Step 2 — Top-left widget" },
    { title: "Step 3 — Bottom-left widget" },
    { title: "Step 4 — Right column: three remaining cards" },
];

const fadeUp = {
    hidden: { opacity: 0, y: 32, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } },
};

const widgetEnterVertical = {
    hidden: { opacity: 0, y: 12, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } },
};

const widgetEnterHorizontal = {
    hidden: { opacity: 0, x: 12, scale: 0.98 },
    visible: { opacity: 1, x: 0, scale: 1 },
};

const ghost =
    "bg-gradient-to-b from-slate-50 to-slate-100 border border-slate-200 dark:from-slate-800 dark:to-slate-900 dark:border-slate-700";

export const DashboardBuildDemo = () => {
    const [step, setStep] = React.useState(0);

    // With a leading "Preview" step at index 0, map steps so
    // 0 => show everything, 1 => show only shell, 2+ progressively add widgets
    const show = (n: number) => (step === 0 ? true : (step - 1) >= n);

    return (
        <div className="min-h-[500px] backdrop-blur-lg z-10 w-full text-slate-800 flex flex-col items-center dark:text-slate-100">
            <div className="text-sm text-slate-500 mb-4 w-full flex items-center justify-between px-8">
                <p className="text-left">
                    {steps[step].title}
                </p>

                <div className="flex items-center gap-2 mt-4">
                    {step === 0 && (
                        <button
                            onClick={() => setStep(1)}
                            className="flex items-center gap-2 px-3 py-2 rounded-2xl cursor-pointer shadow-sm border bg-white text-sm border-slate-200 dark:bg-slate-900 dark:text-slate-100 dark:border-slate-700"
                        >
                            Start <ChevronRight className="size-4" />
                        </button>
                    )}
                    {(step > 0) && (
                        <>
                            {(step !== steps.length - 1) && (
                                <>
                                    <button
                                        onClick={() => setStep((s) => Math.max(0, s - 1))}
                                        className="flex items-center justify-center px-3 py-2 rounded-2xl cursor-pointer shadow-sm border bg-white text-sm border-slate-200 dark:bg-slate-900 dark:text-slate-100 dark:border-slate-700"
                                    >
                                        <ChevronLeft className="size-4" />
                                    </button>
                                    <button
                                        onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
                                        className="flex items-center justify-center px-3 py-2 rounded-2xl cursor-pointer shadow-sm border bg-white text-sm border-slate-200 dark:bg-slate-900 dark:text-slate-100 dark:border-slate-700"
                                    >
                                        <ChevronRight className="size-4" />
                                    </button>
                                </>
                            )}
                            <button
                                onClick={() => setStep(0)}
                                className="flex items-center gap-2 justify-center px-3 py-2 rounded-2xl cursor-pointer shadow-sm border bg-white text-sm border-slate-200 dark:bg-slate-900 dark:text-slate-100 dark:border-slate-700"
                            >
                                <RefreshCcw className="size-4" />
                            </button>
                        </>
                    )}
                </div>
            </div>
            {step === 1 && (
                <motion.div>
                    <Empty>
                        <EmptyHeader>
                            <div className="size-64 rounded-xl border border-slate-400 border-dashed flex items-center justify-center">
                                <Folder className="size-16 text-slate-400 opacity-50" />
                            </div>
                        </EmptyHeader>
                    </Empty>
                </motion.div>
            )}
            {show(1) && (
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="rounded-[28px] min-h-[500px] p-6 md:p-8 border bg-background border-slate-200 shadow-sm w-full max-w-6xl dark:border-slate-700 dark:bg-slate-950"
                >
                    <div className="flex items-center justify-between mb-6">
                        <div className="space-y-2">
                            <div className={`h-4 w-32 rounded-full ${ghost} ${show(0) ? "opacity-100" : "opacity-0"}`} />
                            <div className={`h-4 w-64 rounded-full ${ghost} ${show(0) ? "opacity-100" : "opacity-0"}`} />
                        </div>
                        <div className={`h-6 w-16 rounded ${ghost} ${show(0) ? "opacity-100" : "opacity-0"}`} />
                    </div>

                    <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 ${show(0) ? "opacity-100" : "opacity-0"}`}>
                        <div className="md:col-span-2 space-y-4 md:space-y-6">
                            <AnimatePresence>
                                {show(2) && (
                                    <motion.div
                                        key="top-left"
                                        variants={widgetEnterVertical}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        className={`h-32 md:h-44 rounded-3xl ${ghost} shadow-sm`}
                                    />
                                )}
                                {show(3) && (
                                    <motion.div
                                        key="bottom-left"
                                        variants={widgetEnterVertical}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        className={`h-52 md:h-64 rounded-3xl ${ghost} shadow-sm`}
                                    />
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="space-y-4 md:space-y-6">
                            <AnimatePresence initial={false}>
                                {show(4) && (
                                    <motion.div
                                        key="right-1"
                                        variants={widgetEnterHorizontal}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        transition={{ delay: 0.2 }}
                                        className={`h-32 rounded-3xl ${ghost} shadow-sm`}
                                    />
                                )}
                                {show(4) && (
                                    <motion.div
                                        key="right-2"
                                        variants={widgetEnterHorizontal}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        transition={{ delay: 0.4 }}
                                        className={`h-32 rounded-3xl ${ghost} shadow-sm`}
                                    />
                                )}
                                {show(4) && (
                                    <motion.div
                                        key="right-3"
                                        variants={widgetEnterHorizontal}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        transition={{ delay: 0.6 }}
                                        className={`h-32 rounded-3xl ${ghost} shadow-sm`}
                                    />
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                </motion.div>
            )}
        </div>
    );
}
