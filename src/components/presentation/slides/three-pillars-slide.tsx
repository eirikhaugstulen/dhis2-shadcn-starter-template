import { Square, Circle, Triangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const threePillarsSlide = {
    id: "three-pillars",
    notes: "Explain why these pillars matter.",
    content: (
        <div className="max-w-4xl mx-auto py-12">
            <h2 className="text-4xl font-bold mb-8">Three pillars</h2>
            <div className="grid md:grid-cols-3 gap-6">
                <Card className="rounded-2xl shadow-sm">
                    <CardContent className="p-6">
                        <Square className="w-8 h-8 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Structure</h3>
                        <p className="opacity-80">Tell a story: setup → tension → resolution. One idea per slide.</p>
                    </CardContent>
                </Card>
                <Card className="rounded-2xl shadow-sm">
                    <CardContent className="p-6">
                        <Triangle className="w-8 h-8 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Design</h3>
                        <p className="opacity-80">Big type, generous whitespace, consistent rhythm, accessible contrast.</p>
                    </CardContent>
                </Card>
                <Card className="rounded-2xl shadow-sm">
                    <CardContent className="p-6">
                        <Circle className="w-8 h-8 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Motion</h3>
                        <p className="opacity-80">Use subtle transitions to guide attention—not to distract.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    ),
};

