import React from 'react';
import Mermaid from '../components/Mermaid';

export default function Architecture() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div>
                <h1 className="text-4xl font-bold mb-4 gradient-text">Architecture & Tech</h1>
                <p className="text-xl text-[var(--text-secondary)]">
                    Strategia "Offline-First" per un'esperienza utente istantanea e robusta.
                </p>
            </div>

            {/* SYSTEM CONTEXT */}
            <div className="card">
                <h2 className="text-2xl mb-4">1. System Context</h2>
                <p className="text-[var(--text-secondary)] mb-6">Interazione tra l'app locale, il database interno e i servizi cloud.</p>
                
                <Mermaid chart={`
graph TB
    %% Nodes
    User((User))
    App["📱 KetoFlow iOS"]
    LocalDB[("CoreData")]
    
    subgraph Cloud [Cloud Services]
        Supabase["⚡️ Supabase DB"]
        Apple[" Auth Service"]
        AI["🤖 OpenAI API"]
    end

    %% Edges
    User -->|Uses| App
    App <-->|"Hot Path (Instant)"| LocalDB
    
    App -.->|"Background Sync"| Supabase
    App -.->|Auth| Apple
    App -.->|Analysis| AI
    
    %% Styles
    style App fill:#E5F1FB,stroke:#007AFF,stroke-width:2px,color:#000
    style LocalDB fill:#FFF3E0,stroke:#FF9500,color:#000
    style Supabase fill:#E8F5E9,stroke:#34C759,color:#000
    style Cloud fill:#FFFFFF,stroke:#D1D1D6,color:#000
                `} chartId="arch-context" />
            </div>

            {/* TECH STACK */}
            <div className="card">
                <h2 className="text-2xl mb-6">2. Technology Stack</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { title: "Swift 5 + SwiftUI", desc: "Nativo al 100% per performance massime.", tag: "Language", color: "border-blue-500" },
                        { title: "CoreData", desc: "Single source of truth. Zero latenza.", tag: "Local DB", color: "border-orange-500" },
                        { title: "Supabase", desc: "Auth, Storage e Database (PostgreSQL).", tag: "Cloud DB", color: "border-green-500" },
                        { title: "OpenAI Vision", desc: "GPT-4o-mini per analisi cibo.", tag: "Intelligence", color: "border-purple-500" }
                    ].map((item, i) => (
                        <div key={i} className={`bg-[var(--code-bg)] p-5 rounded-2xl border-l-4 transition-transform hover:scale-105 ${item.color}`}>
                            <span className="text-xs font-bold uppercase tracking-wide text-[var(--text-secondary)] block mb-1">{item.tag}</span>
                            <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                            <p className="text-sm opacity-70">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CLEAN ARCHITECTURE */}
            <div className="card">
                <h2 className="text-2xl mb-4">3. Clean Architecture Layers</h2>
                <p className="text-[var(--text-secondary)] mb-6">Structure for maintainability and testing.</p>
                <Mermaid chart={`
                classDiagram
                    direction TB
                    class UI_Layer {
                        +SwiftUI Views
                        +ViewModels
                    }
                    
                    class Domain_Layer {
                        +Use Cases
                        +Entities (Plain)
                        +Repository Protocol
                    }
                    
                    class Data_Layer {
                        +CoreData Store
                        +Supabase Client
                        +Repository Implementation
                    }
                    
                    UI_Layer --> Domain_Layer
                    Data_Layer ..|> Domain_Layer
                    Data_Layer --> Data_Layer : Sync Engine
                `} chartId="arch-layers" />
            </div>
        </div>
    );
}
