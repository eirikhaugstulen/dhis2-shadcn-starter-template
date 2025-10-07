import { Code2, Sparkles, CheckCircle2, X } from "lucide-react"

export function FocusVisualization() {
  return (
    <div className="flex items-center gap-12 max-w-5xl">
      <div className="flex-1 relative">
        <div className="relative bg-card border border-primary/30 rounded-xl p-8 shadow-md">
          <div className="absolute -top-2 -right-2">
            <CheckCircle2 className="w-7 h-7 bg-background rounded-full opacity-100 text-muted-foreground" strokeWidth={2.5} />
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <div className="text-lg font-semibold text-foreground">AI as Developer Tool</div>
            </div>
            <div className="text-muted-foreground text-xs">Enhancing workflow & productivity</div>
          </div>
        </div>
      </div>

      <div className="h-32 w-px bg-border/50" />

      <div className="flex-1 opacity-100 relative">
        <div className="bg-card border-border/70 rounded-xl p-8 text-muted border">
          <div className="absolute -top-2 -right-2">
            
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-4">
              <div className="shrink-0"></div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-muted rounded-lg">
                    <Sparkles className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div className="text-lg font-semibold text-muted-foreground">AI in Product</div>
                </div>
                <div className="text-muted-foreground text-xs">Chatbots & agents for users</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
