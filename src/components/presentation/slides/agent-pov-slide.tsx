import type { Slide } from "../presentation";
import agentPovImage from "../assets/agent-pov.png";

export const agentPovSlide: Slide = {
    id: "agent-pov",
    displayName: "Agent POV",
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


