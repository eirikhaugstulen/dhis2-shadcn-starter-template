export const codeSlide = {
    id: "code",
    notes: "Keep code font large. Highlight key lines verbally.",
    content: (
        <div className="max-w-4xl mx-auto py-12">
            <h2 className="text-3xl font-bold mb-6">Live components ≫ static slides</h2>
            <pre className="bg-black/80 text-white p-6 rounded-2xl overflow-auto text-sm md:text-base leading-relaxed">
                {`function BigIdea() {\n  return (\n    <em>Ship stories, not slides.</em>\n  );\n}`}
            </pre>
            <p className="mt-6 opacity-80">Embed real demos: charts, API calls, or interactive UIs.</p>
        </div>
    ),
};

