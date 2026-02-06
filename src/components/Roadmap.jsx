import React from "react";
import { CheckCircle, Circle, Clock, CheckCircle2 } from "lucide-react";

export default function Roadmap() {
  const phases = [
    {
      title: "Fase 1: Foundation",
      status: "completed", // completed, current, future
      items: [
        "Setup progetto Xcode",
        "Implementazione Sign in with Apple",
        "Setup Supabase e collegamento Database",
      ],
    },
    {
      title: "Fase 2: The Solid Diary",
      status: "current",
      items: [
        "UI Dashboard e CoreData locale",
        "Integrazione Open Food Facts",
        "Logica Sync (Background Upload/Download)",
      ],
    },
    {
      title: "Fase 3: The AI Brain",
      status: "future",
      items: ["Integrazione OpenAI Vision", "Chatbot Coach"],
    },
    {
      title: "Fase 4: The Ecosystem",
      status: "future",
      items: [
        "Widget Spesa e Dashboard",
        "Implementazione StoreKit (€2/mese)",
        "Lancio Beta",
      ],
    },
  ];

  const getIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="text-green-500" />;
      case "current":
        return <Clock className="text-orange-500 animate-pulse" />;
      default:
        return <Circle className="text-[var(--text-secondary)] opacity-30" />;
    }
  };

  const getBorderColor = (status) => {
    switch (status) {
      case "completed":
        return "border-green-500/20 bg-green-500/5";
      case "current":
        return "border-orange-500/50 bg-orange-500/5 shadow-[0_0_15px_rgba(255,165,0,0.1)]";
      default:
        return "border-[var(--border-color)] opacity-60";
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {phases.map((phase, i) => (
        <div
          key={i}
          className={`p-6 rounded-2xl border ${getBorderColor(phase.status)} relative overflow-hidden transition-all duration-300 hover:scale-[1.02]`}
        >
          {/* Status Badge */}
          <div className="flex justify-between items-start mb-4">
            <div className="bg-[var(--bg-color)] p-2 rounded-full shadow-sm">
              {getIcon(phase.status)}
            </div>
            {phase.status === "completed" && (
              <span className="text-xs font-bold text-green-500 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">
                DONE
              </span>
            )}
            {phase.status === "current" && (
              <span className="text-xs font-bold text-orange-500 bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded-full">
                WIP
              </span>
            )}
          </div>

          <h3 className="font-bold text-lg mb-4">{phase.title}</h3>

          <ul className="space-y-3">
            {phase.items.map((item, j) => (
              <li
                key={j}
                className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
              >
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[var(--text-secondary)] opacity-40 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
