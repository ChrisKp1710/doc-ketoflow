import React from 'react';
import Mermaid from '../components/Mermaid';

export default function UX() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <div>
                <h1 className="text-4xl font-bold mb-4 gradient-text">UX & Freemium Strategy</h1>
                <p className="text-xl text-[var(--text-secondary)]">
                    Design dei flussi utente e punti di conversione (Upsell).
                </p>
            </div>

            <div className="card">
                <h2 className="text-2xl mb-4 flex items-center gap-2">
                    <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded text-sm font-bold uppercase">Loop</span> 
                    Core Navigation
                </h2>
                <p className="text-[var(--text-secondary)] mb-6">Ciclo continuo tra acquisizione cibo (Spesa) e consumo (Diario).</p>

                <Mermaid chart={`
graph LR
    Dashboard["🏠 Dashboard"]
    
    subgraph Pantry_Zone [Zone: Acquisition]
        List["🛒 Lista Spesa"]
        Scan["📷 Barcode Scan"]
    end
    
    subgraph Diary_Zone [Zone: Consumption]
        Entry["🍽️ Log Pasto"]
        Photo["📸 Foto Piatto"]
    end

    Dashboard <-->|"Swipe"| List
    List -->|"Add"| Scan
    Dashboard -->|"Log"| Entry
    Entry --> Photo
                `} chartId="ux-loop" />
            </div>

            <div className="card">
                <h2 className="text-2xl mb-4 flex items-center gap-2">
                    <span className="bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300 px-2 py-1 rounded text-sm font-bold uppercase">Funnel</span> 
                    The Upsell Moment
                </h2>
                <p className="text-[var(--text-secondary)] mb-6">Dove convertiamo l'utente Free in Premium.</p>

                <Mermaid chart={`
flowchart TD
    User("User Action")
    
    User -->|"Taps Camera"| Intent{"Cosa scansiono?"}
    
    Intent -->|"Barcode"| Free["✅ Scanner Gratis"]
    Intent -->|"Piatto Pronto"| AI["🤖 AI Vision"]
    
    AI --> Check{"Is Premium?"}
    Check -- "Yes" --> Result["Result: Carbonara 12g Net Carbs"]
    Check -- "No" --> Paywall[["💎 Show Paywall €2"]]
    
    Paywall -.->|"Subscribe"| Result
    Paywall -.->|"Cancel"| Manual["Fallback: Inserimento Manuale"]
    
    style Paywall fill:#FCE4EC,stroke:#FF2D55,stroke-dasharray: 5 5
    style Result fill:#E0F2F1,stroke:#009688
                `} chartId="ux-funnel" />
            </div>
        </div>
    );
}
