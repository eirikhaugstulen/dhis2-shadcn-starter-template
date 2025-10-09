import type { Slide } from "../presentation";
import { Cursor } from "../assets/cursor-logo";
import { Windsurf } from "../assets/windsurf-logo";
import { ClaudeAI } from "../assets/claude-logo";
import { OpenAI } from "../assets/openai-logo";
import devinLogo from "../assets/devin-logo.png";

export const choosingToolsSlide: Slide = {
    id: "choosing-tools",
    displayName: "Choosing the Best Tools",
    notes: `
I’m not trying to sell you anything here, but I do want to make a point: *frontier models deserve frontier tools.* A lot of the tools shown here are paid - though many have generous free tiers - but the reality is, high-quality AI still costs money. That said, most of these tools are currently delivering way more value than they cost, thanks to VC backing. And in my experience, just switching to one of these tools that knows how to package context properly can level up your entire workflow without needing you to change much else.

Personally, I’ve been using Cursor quite a lot - it’s a full IDE built with AI in mind. Windsurf is a similar competitor. Then you’ve got terminal-first options like Claude Code and OpenAI’s Codex, which are both super capable. And finally, for background automation, there’s Devin. We’ve used Devin to rewrite major DHIS2 apps like the Modeling app and the Capture app - massive rewrites, done in weeks instead of months. These tools don’t just give you a better chat box - they deeply understand your project and stay with it. That’s what makes the difference.
    `,
    content: (
        <div className="h-full w-full bg-gradient-to-br from-background via-background to-muted/40 p-8 md:p-14 flex flex-col gap-12">
            <header className="max-w-2xl space-y-4">
                <p className="text-sm font-semibold tracking-[0.3em] uppercase text-muted-foreground">Tooling</p>
                <h2 className="text-4xl md:text-4xl font-bold leading-tight">Frontier models deserve frontier tools</h2>
            </header>

            <div className="grid flex-1 grid-cols-1 gap-8 md:grid-cols-2">
                <section className="relative overflow-hidden rounded-3xl border bg-card/80 shadow-sm backdrop-blur">
                    <div className="h-full flex flex-col gap-6 p-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-2xl font-semibold">IDEs</h3>
                            </div>
                            <span className="rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">Full IDE experience</span>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex flex-col items-center gap-3 text-center">
                                <div className="grid place-items-center rounded-2xl bg-muted/60 p-6">
                                    <Cursor className="h-14 w-14" />
                                </div>
                                <div>
                                    <p className="text-base font-semibold">Cursor</p>
                                    <p className="text-xs text-muted-foreground italic">Anysphere, Inc</p>
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-3 text-center">
                                <div className="grid place-items-center rounded-2xl bg-muted/60 p-6">
                                    <Windsurf className="h-14 w-14" />
                                </div>
                                <div>
                                    <p className="text-base font-semibold">Windsurf</p>
                                    <p className="text-xs text-muted-foreground italic">Cognition</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative overflow-hidden rounded-3xl border bg-card/80 shadow-sm backdrop-blur">
                    <div className="h-full flex flex-col gap-6 p-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-2xl font-semibold">TUI</h3>
                            </div>
                            <span className="rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">Terminal-first</span>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex flex-col items-center gap-3 text-center">
                                <div className="grid place-items-center rounded-2xl bg-muted/60 p-6">
                                    <ClaudeAI className="h-14 w-14" />
                                </div>
                                <div>
                                    <p className="text-base font-semibold">Claude Code</p>
                                    <p className="text-xs text-muted-foreground italic">Anthropic</p>
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-3 text-center">
                                <div className="grid place-items-center rounded-2xl bg-muted/60 p-6">
                                    <OpenAI className="h-14 w-14" />
                                </div>
                                <div>
                                    <p className="text-base font-semibold">OpenAI Codex</p>
                                    <p className="text-xs text-muted-foreground italic">OpenAI</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative overflow-hidden rounded-3xl border bg-card/80 shadow-sm backdrop-blur md:col-span-2">
                    <div className="h-full flex flex-col gap-6 p-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-2xl font-semibold">Background agents</h3>
                            </div>
                            <span className="rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">Hands-off automation</span>
                        </div>

                        <div className="flex flex-col items-center gap-3 text-center">
                            <div className="grid place-items-center rounded-2xl bg-muted/60 p-6">
                                <img src={devinLogo} alt="Devin logo" className="h-14 w-14 object-contain" />
                            </div>
                            <div>
                                <p className="text-base font-semibold">Devin</p>
                                <p className="text-xs text-muted-foreground italic">Cognition</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    ),
};


