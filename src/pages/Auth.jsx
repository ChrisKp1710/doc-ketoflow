import React from 'react';
import Mermaid from '../components/Mermaid';

export default function Auth() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            <div>
                <h1 className="text-4xl font-bold mb-4 gradient-text">Auth & Sync Strategy</h1>
                <p className="text-xl text-[var(--text-secondary)]">
                    Zero Friction Login e Sincronizzazione Silenziosa.
                </p>
            </div>

            <div className="card">
                <h2 className="text-2xl mb-4 border-l-4 border-indigo-500 pl-4">1. Apple Login Flow</h2>
                <p className="text-[var(--text-secondary)] mb-6">L'utente non deve mai inserire password. Account creato al volo.</p>
                
                <Mermaid chart={`
                sequenceDiagram
                    participant User
                    participant App as iOS App
                    participant Sync as Sync Manager
                    participant Cloud as ☁️ Supabase

                    User->>App: Opens App (First Time)
                    note right of User: "Continue with Apple"
                    
                    App->>App: Request Apple ID
                    App->>Cloud: Check User Exists?
                    
                    alt New User
                        Cloud-->>App: Nope
                        App->>Cloud: Create Account (Silent)
                        App->>App: Init Local DB
                    else Existing User
                        Cloud-->>App: Yes, here is profile
                        App->>Sync: Trigger Initial Download
                    end
                    
                    App->>User: Show Dashboard 🏠
                `} chartId="auth-sequence" />
            </div>

            <div className="card">
                <h2 className="text-2xl mb-4 border-l-4 border-indigo-500 pl-4">2. Sync Engine Logic</h2>
                <p className="text-[var(--text-secondary)] mb-6">Gestione dati offline e background sync.</p>

                <Mermaid chart={`
                flowchart LR
                    Event(New Meal / Edit) --> SaveLocal[💾 Save to CoreData]
                    SaveLocal --> MarkDirty[Flag: needsSync = true]
                    
                    subgraph Background_Worker
                        MarkDirty --> CheckNet{Internet?}
                        CheckNet -- No --> Wait((Queue))
                        CheckNet -- Yes --> Push[🚀 Push to Supabase]
                        
                        Push --> Result{Success?}
                        Result -- Yes --> Clean[Flag: needsSync = false]
                        Result -- No --> Wait
                    end
                    
                    style SaveLocal fill:#E5F1FB,stroke:#007AFF
                    style Push fill:#E8F5E9,stroke:#34C759
                `} chartId="auth-sync" />
            </div>
        </div>
    );
}
