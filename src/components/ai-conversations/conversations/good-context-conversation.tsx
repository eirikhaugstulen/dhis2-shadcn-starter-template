import { BrainCircuitIcon, BrainIcon, FileText, Globe, Search } from "lucide-react";


export const goodContextConversation = [
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
        icon: <BrainCircuitIcon className="h-4 w-4" />,
        label: "Read project memories",
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
            "I can see `react-router-dom` listed, so the app relies on React Router. I'll keep that in mind.",
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
        type: "step",
        icon: <FileText className="h-4 w-4" />,
        label: "Inspected layout components",
    },
    {
        role: "assistant",
        type: "message",
        content:
            "The layout combines `SidebarProvider`, `AppSidebar`, and `SidebarInset` so navigation links live in the sidebar, while `SyncUrlWithGlobalShell` keeps the router hash in sync with the DHIS2 shell.",
    },
    {
        role: "assistant",
        type: "step",
        icon: <FileText className="h-4 w-4" />,
        label: "Read package.json",
    },
    {
        role: "assistant",
        type: "step",
        icon: <FileText className="h-4 w-4" />,
        label: "Read d2.config.js",
    },
    {
        role: "assistant",
        type: "step",
        icon: <FileText className="h-4 w-4" />,
        label: "Read README.md",
    },
    {
        role: "assistant",
        type: "step",
        icon: <Globe className="h-4 w-4" />,
        label: "Searched for DHIS2 app bundling",
    },
    {
        role: "assistant",
        type: "step",
        icon: <Globe className="h-4 w-4" />,
        label: "Read https://developers.dhis2.org/docs/",
    },
    {
        role: "assistant",
        type: "step",
        icon: <FileText className="h-4 w-4" />,
        label: "Read sync-url-with-global-shell.tsx",
    },
    {
        role: "assistant",
        type: "message",
        content:
            "I found that the app is using DHIS2 (d2-app-scripts) to build the app and is served from inside a global app shell. It uses Vite as the build tool and keeps the DHIS2 shell in sync with the router hash with a custom listener to the router-dom's popstate event.",
    },
    {
        role: "assistant",
        type: "step",
        icon: <BrainIcon className="h-4 w-4" />,
        label: "Thought for 45 seconds",
    },
    {
        role: "assistant",
        type: "summary",
        content: [
            "## Navigation Findings",
            "",
            "- **Routing Stack:** `react-router-dom`'s `createHashRouter` orchestrates the profile (dashboard), about, and presentation routes so the URL hash matches what the DHIS2 global shell expects.",
            "- **Layout Composition:** `SidebarProvider`, `AppSidebar`, and `SidebarInset` assemble the shared shell, with `<Outlet />` hosting each child screen and preserving the sidebar/header frame across pages.",
            "- **Navigation State:** Sidebar entries derive from `menuItems`, the header title reacts to location changes, and the router is wrapped in React Query to centralize data fetching alongside navigation.",
            "- **Shell Synchronization:** `SyncUrlWithGlobalShell` watches hash changes and bridges them into the DHIS2 shell so external navigation controls stay aligned with in-app state.",
            "- **App Packaging:** The project ships with `d2-app-scripts` on top of Vite, meaning the router and hash listener run inside the DHIS2 app shell that hosts the bundle.",
            "",
            "**Result:** Navigation blends a hash-based router, sidebar-driven layout state, DHIS2-aware syncing logic, and d2-app packaging to provide a cohesive multi-page experience inside the platform shell.",
        ].join("\n"),
    },
];