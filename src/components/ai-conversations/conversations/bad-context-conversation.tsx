import { BrainIcon, FileText, Search } from "lucide-react";


export const badContextConversation = [
    {
        role: "user",
        type: "message",
        content: "How does navigation work in this app?",
    },
    {
        role: "assistant",
        type: "message",
        content:
            "I'll dig into the routing setup. Let me start by checking the dependencies and the main app entry point.",
    },
    {
        role: "assistant",
        type: "step",
        icon: <FileText className="h-4 w-4" />,
        label: "Opened package.json",
    },
    {
        role: "assistant",
        type: "message",
        content:
            "I can see `react-router-dom` listed in the dependencies, so the app relies on React Router.",
    },
    {
        role: "assistant",
        type: "step",
        icon: <FileText className="h-4 w-4" />,
        label: "Read App.tsx",
    },
    {
        role: "assistant",
        type: "step",
        icon: <Search className="h-4 w-4" />,
        label: "Traced createHashRouter",
    },
    {
        role: "assistant",
        type: "message",
        content:
            "`App.tsx` builds a `createHashRouter` with routes for the profile, about, and presentation pages. The layout wraps the outlet in a sidebar shell and uses the current location to set the header title.",
    },
    {
        role: "assistant",
        type: "step",
        icon: <BrainIcon className="h-4 w-4" />,
        label: "Thought for 5 seconds",
    },
    {
        role: "assistant",
        type: "message",
        content: [
            "React Router DOM uses a hash-based router exposing routes for the profile (dashboard), about, and presentation sections.",
            "",
            "**Result:** Navigation is driven by React Router's hash router.",
        ].join("\n"),
    },
];