import type { Slide } from "../presentation";
import agentPovImage from "../assets/agent-pov.png";

export const agentPovSlide: Slide = {
    id: "agent-pov",
    displayName: "Agent POV",
    notes: `
Let me try to paint a clearer picture of how I think about AI agents and context - this mental model has helped me a lot when working with these tools. To illustrate it, I created this piece of artwork called *The Agent’s Perspective*. Imagine a large language model as a senior engineer locked in a small, windowless, doorless room. It can’t see anything outside, can’t browse your codebase, doesn’t know your tools or team preferences - it’s just sitting there with the information it was trained on. That pretrained knowledge gives it a solid foundation, but without any access to your world, it can only guess what's going on, which is where hallucinations can creep in.

So the only way this agent understands your project is through a single long document that slides in through a slot in the wall - a piece of paper that represents the *context* you provide. That context has to contain everything the AI needs to know to perform its task: your code, instructions, patterns, relevant docs, all of it. It's basically like onboarding a senior developer from scratch every single time you start a new chat. The better job you do at feeding the right context, the better the AI will perform. That’s really the key to working effectively with these models today.
    `,
    content: (
        <div className="h-[800px] w-full bg-background flex flex-col gap-10 mt-10 items-center justify-center">
            <img
                src={agentPovImage}
                alt="Agent point of view"
                className="max-h-[80%] max-w-[80%] object-contain drop-shadow-xl"
            />

            <h2 className="text-2xl font-bold">
                The Agent's Perspective
            </h2>
        </div>
    ),
};


